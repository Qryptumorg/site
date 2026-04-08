import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function CommitPhasePage() {
    return (
        <FeatureBentoPage
            pageTitle="Commit Phase"
            badge="TRANSFER ENGINE"
            heroTitle="Hash First,"
            heroHighlight="Reveal Nothing"
            heroSubtitle="The commit phase submits a keccak256 hash of your transfer intent to Ethereum. The actual recipient and amount remain invisible to every mempool observer."
            primaryColor="#0EA5E9"
            secondaryColor="#6366F1"
            heroButtons={[
                { label: "Reveal Phase", href: "/reveal-phase", primary: true },
                { label: "MEV Protection", href: "/mev-protection" },
            ]}
            stats={[
                { value: "1 tx", label: "Commit transaction", note: "Hash only, no details" },
                { value: "keccak256", label: "Hash function", note: "256-bit commitment" },
                { value: "0", label: "MEV exposure", note: "Details not visible" },
                { value: "~$0.06", label: "Gas cost", note: "At 0.5 gwei avg" },
            ]}
            sectionBadge="COMMIT MECHANISM"
            sectionHeading="What Gets Submitted in the Commit Phase"
            sectionBody="The commitment is a hash of the vault proof, recipient address, amount, and a unique nonce. None of these fields appear in plaintext in the transaction. Observers see only a 32-byte hash."
            sectionColor="#0EA5E9"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format",
                    color: "#0EA5E9",
                    title: "Hash Commitment",
                    body: "keccak256(vaultProof, recipient, amount, nonce) is computed client-side and submitted onchain. No plaintext field is included in the transaction calldata.",
                    link: { text: "Vault proof hashing", href: "/vault-proof-hashing" },
                },
                {
                    img: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&auto=format",
                    color: "#6366F1",
                    title: "Mempool Invisibility",
                    body: "The commitment transaction contains no recipient address, no amount, and no vault proof. Mempool scanners cannot extract any useful information from it.",
                },
                {
                    img: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&auto=format",
                    color: "#3B82F6",
                    title: "Unique Nonce Per Commit",
                    body: "Each commitment includes a unique nonce that is stored onchain after use. Attempting to replay the same commitment will fail with a nonce rejection.",
                    link: { text: "Nonce protection", href: "/nonce-protection" },
                },
                {
                    img: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&auto=format",
                    color: "#2563EB",
                    title: "10-Minute Reveal Window",
                    body: "After committing, you have exactly 10 minutes to submit the reveal. Expired commitments are voided on-chain automatically.",
                    link: { text: "Time-locked reveals", href: "/time-locked-reveals" },
                },
            ]}
            techNote={{
                label: "Contract: commit transfer",
                lines: [
                    "function commitTransfer(bytes32 commitment) external {",
                    "    require(!usedNonces[nonce], 'nonce already used');",
                    "    commitments[msg.sender] = Commitment({",
                    "        hash: commitment,",
                    "        expiry: block.timestamp + 600", // 10 minutes
                    "    });",
                    "}",
                    "// commitment = keccak256(vaultProof, recipient, amount, nonce)",
                ],
            }}
            relatedLinks={[
                { label: "Reveal Phase", href: "/reveal-phase", color: "#0EA5E9" },
                { label: "MEV Protection", href: "/mev-protection", color: "#6366F1" },
                { label: "Nonce Protection", href: "/nonce-protection", color: "#3B82F6" },
            ]}
        />
    );
}

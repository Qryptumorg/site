import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function RevealPhasePage() {
    return (
        <FeatureBentoPage
            pageTitle="Reveal Phase"
            badge="TRANSFER ENGINE"
            heroTitle="Reveal and"
            heroHighlight="Execute Atomically"
            heroSubtitle="The reveal transaction submits your vault proof and transfer details. The contract matches the stored commitment hash and executes the qToken transfer in one atomic call."
            primaryColor="#10B981"
            secondaryColor="#0EA5E9"
            heroButtons={[
                { label: "Commit Phase", href: "/commit-phase", primary: false },
                { label: "Making Transfers", href: "/making-transfers", primary: false },
            ]}
            stats={[
                { value: "10 min", label: "Reveal window", note: "600 blocks on Ethereum" },
                { value: "1 tx", label: "Reveal transaction", note: "Proof + details onchain" },
                { value: "Hash match", label: "Verification", note: "Contract checks commitment" },
                { value: "Atomic", label: "Execution", note: "Verify and transfer together" },
            ]}
            sectionBadge="REVEAL MECHANISM"
            sectionHeading="What Happens During the Reveal"
            sectionBody="The reveal transaction includes the vault proof plaintext, recipient address, amount, and nonce. The contract recomputes the hash and compares it to the stored commitment. Only if they match does the transfer execute."
            sectionColor="#10B981"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format",
                    color: "#10B981",
                    title: "Vault Proof Reveal",
                    body: "The reveal submits the vault proof plaintext for the first time. By this point, the commit is already anchored on-chain: front-running is structurally impossible.",
                    link: { text: "Vault proof hashing", href: "/vault-proof-hashing" },
                },
                {
                    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format",
                    color: "#0EA5E9",
                    title: "Commitment Hash Matching",
                    body: "The contract recomputes keccak256(vaultProof, recipient, amount, nonce) and requires it to equal the stored commitment. Any mismatch causes a full revert.",
                },
                {
                    img: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&auto=format",
                    color: "#059669",
                    title: "Atomic Transfer Execution",
                    body: "Verification and qToken movement happen in one transaction. There is no state between a valid reveal and the completed transfer.",
                },
                {
                    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format",
                    color: "#0891B2",
                    title: "Expiry Protection",
                    body: "Reveals submitted after the 10-minute window are rejected by the contract. The commitment is voided and the nonce is permanently consumed.",
                    link: { text: "Time-locked reveals", href: "/time-locked-reveals" },
                },
            ]}
            techNote={{
                label: "Contract: reveal and execute",
                lines: [
                    "function revealTransfer(bytes32 vaultProof, address to, uint256 amount, uint256 nonce) external {",
                    "    Commitment memory c = commitments[msg.sender];",
                    "    require(block.timestamp <= c.expiry, 'commitment expired');",
                    "    bytes32 expected = keccak256(abi.encode(vaultProof, to, amount, nonce));",
                    "    require(expected == c.hash, 'hash mismatch');",
                    "    _executeTransfer(to, amount);",
                    "}",
                ],
            }}
            relatedLinks={[
                { label: "Commit Phase", href: "/commit-phase", color: "#10B981" },
                { label: "Making Transfers", href: "/making-transfers", color: "#0EA5E9" },
                { label: "Vault Proof Hashing", href: "/vault-proof-hashing", color: "#059669" },
            ]}
        />
    );
}

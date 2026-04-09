import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function CommitTransferPage() {
    return (
        <FeatureBentoPage
            pageTitle="Commit Transfer"
            badge="HOW IT WORKS"
            heroTitle="Submit the"
            heroHighlight="Hashed Commitment"
            heroSubtitle="The first transfer transaction sends a keccak256 commitment to Ethereum. No recipient address, no amount, no vault proof is visible. You have 10 minutes to complete the reveal."
            primaryColor="#3B82F6"
            secondaryColor="#0EA5E9"
            heroButtons={[
                { label: "Reveal and Execute", href: "/reveal-and-execute", primary: true },
                { label: "Commit Phase Details", href: "/commit-phase" },
            ]}
            stats={[
                { value: "1 tx", label: "Commit transaction", note: "Hash only, no details" },
                { value: "10 min", label: "Reveal window", note: "600 blocks to complete" },
                { value: "~$0.06", label: "Gas cost", note: "At 0.5 gwei average" },
                { value: "Hash only", label: "What observers see", note: "Zero transfer information" },
            ]}
            sectionBadge="COMMIT STEP"
            sectionHeading="Step 1 of 2 in the Transfer Flow"
            sectionBody="The commit is the first of two transactions required to transfer qTokens. It anchors your transfer intent on-chain as a hash. The 10-minute clock starts from this block."
            sectionColor="#3B82F6"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format",
                    color: "#3B82F6",
                    title: "What Gets Committed",
                    body: "keccak256(vaultProof, recipient, amount, nonce) is computed in the browser and submitted as a single bytes32 value. Nothing else is in the calldata.",
                    link: { text: "Commit phase deep dive", href: "/commit-phase" },
                },
                {
                    img: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&auto=format",
                    color: "#0EA5E9",
                    title: "10-Minute Reveal Window",
                    body: "After the commit transaction confirms, you have exactly 600 blocks to submit the reveal. The app shows a live countdown timer.",
                    link: { text: "Time-locked reveals", href: "/time-locked-reveals" },
                },
                {
                    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format",
                    color: "#2563EB",
                    title: "Nonce Consumed",
                    body: "The nonce embedded in the commitment is stored on-chain as used. Attempting to resubmit the same commitment will fail with a nonce rejection.",
                    link: { text: "Nonce protection", href: "/nonce-protection" },
                },
                {
                    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format",
                    color: "#1D4ED8",
                    title: "MEV Invisible",
                    body: "Mempool observers see a bytes32 hash with no extractable information. Bot scanners cannot determine recipient, amount, or vault identity.",
                    link: { text: "MEV protection", href: "/mev-protection" },
                },
            ]}
            techNote={{
                label: "Contract: commit transfer call",
                lines: [
                    "// Step 1: submit commitment hash",
                    "bytes32 commitment = keccak256(abi.encode(vaultProof, recipient, amount, nonce));",
                    "await personalQrypt-Safe.commitTransfer(commitment);",
                    "// Step 2: reveal within 10 minutes",
                    "await personalQrypt-Safe.revealTransfer(vaultProof, recipient, amount, nonce);",
                ],
            }}
            relatedLinks={[
                { label: "Reveal and Execute", href: "/reveal-and-execute", color: "#3B82F6" },
                { label: "MEV Protection", href: "/mev-protection", color: "#0EA5E9" },
                { label: "Making Transfers", href: "/making-transfers", color: "#2563EB" },
            ]}
        />
    );
}

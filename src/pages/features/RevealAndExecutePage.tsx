import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function RevealAndExecutePage() {
    return (
        <FeatureBentoPage
            pageTitle="Reveal and Execute"
            badge="HOW IT WORKS"
            heroTitle="Complete the"
            heroHighlight="Transfer in One Call"
            heroSubtitle="The reveal transaction submits your vault proof and transfer details. The contract matches the stored commitment hash and executes the qToken transfer atomically within the same call."
            primaryColor="#10B981"
            secondaryColor="#3B82F6"
            heroButtons={[
                { label: "Commit Transfer", href: "/commit-transfer", primary: false },
                { label: "Reveal Phase Details", href: "/reveal-phase", primary: false },
            ]}
            stats={[
                { value: "1 tx", label: "Reveal transaction", note: "Proof and details onchain" },
                { value: "Atomic", label: "Verify and transfer", note: "Together in one call" },
                { value: "Hash match", label: "Required", note: "Contract rejects mismatches" },
                { value: "~$0.06", label: "Gas cost", note: "At 0.5 gwei average" },
            ]}
            sectionBadge="REVEAL STEP"
            sectionHeading="Step 2 of 2 in the Transfer Flow"
            sectionBody="The reveal is the second and final transaction. It submits the vault proof plaintext, recipient, amount, and nonce. The contract verifies the commitment hash before executing the qToken transfer."
            sectionColor="#10B981"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format",
                    color: "#10B981",
                    title: "Vault Proof Submitted",
                    body: "This is the first transaction where your vault proof plaintext appears: but by this point, the commitment is already anchored. Front-running cannot help anyone.",
                    link: { text: "Reveal phase deep dive", href: "/reveal-phase" },
                },
                {
                    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format",
                    color: "#3B82F6",
                    title: "Commitment Hash Matching",
                    body: "The contract recomputes keccak256(vaultProof, recipient, amount, nonce) and checks it against the stored commitment. Any discrepancy triggers a full revert.",
                },
                {
                    img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format",
                    color: "#059669",
                    title: "Atomic qToken Transfer",
                    body: "Verification and qToken movement are part of the same transaction. The recipient receives qTokens in the same block as the successful reveal.",
                },
                {
                    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format",
                    color: "#2563EB",
                    title: "Expiry Enforcement",
                    body: "Reveals submitted after the 10-minute window are rejected. The commitment is voided and cannot be replayed: the nonce is permanently consumed.",
                    link: { text: "Time-locked reveals", href: "/time-locked-reveals" },
                },
            ]}
            techNote={{
                label: "Contract: reveal and execute",
                lines: [
                    "function revealTransfer(bytes32 proof, address to, uint256 amt, uint256 nonce) external {",
                    "    Commitment memory c = commitments[msg.sender];",
                    "    require(block.timestamp <= c.expiry, 'expired');",
                    "    require(keccak256(abi.encode(proof, to, amt, nonce)) == c.hash);",
                    "    delete commitments[msg.sender];",
                    "    qToken.transfer(to, amt);",
                    "}",
                ],
            }}
            relatedLinks={[
                { label: "Commit Transfer", href: "/commit-transfer", color: "#10B981" },
                { label: "Making Transfers", href: "/making-transfers", color: "#3B82F6" },
                { label: "MEV Protection", href: "/mev-protection", color: "#059669" },
            ]}
        />
    );
}

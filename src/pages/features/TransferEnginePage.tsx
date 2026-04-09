import FeatureBentoPage from "../FeatureBentoPage";

export default function TransferEnginePage() {
    return (
        <FeatureBentoPage
            pageTitle="Transfer Engine"
            badge="Transfer Engine"
            heroTitle="Two-Phase Transfers"
            heroHighlight="MEV Proof"
            heroSubtitle="Qryptum's commit-reveal engine makes every transfer invisible to mempool bots until it is already mined. No front-running. No interception."
            primaryColor="#10b981"
            secondaryColor="#7c3aed"
            heroButtons={[
                { label: "Open App", href: "/app", primary: true },
                { label: "MEV Protection", href: "/mev-protection" },
            ]}
            stats={[
                { value: "2-phase", label: "Transfer design", note: "Commit then reveal" },
                { value: "600s", label: "Reveal window", note: "10 minutes to complete" },
                { value: "Zero", label: "MEV exposure", note: "Commit hides all details" },
                { value: "On-chain", label: "Verification", note: "No off-chain steps" },
            ]}
            sectionBadge="Protocol Design"
            sectionColor="#10b981"
            sectionHeading="How the Transfer Engine Works"
            sectionBody="Every Qrypt-Safe transfer uses a two-step commit-reveal scheme. The commit phase submits a hash. The reveal phase unlocks it. Mempool bots see only a hash."
            cards={[
                {
                    img: "/images/transfer-commit.png",
                    color: "#10b981",
                    title: "Phase 1: Commit",
                    body: "You submit keccak256(vaultProof, recipient, amount, nonce) to the contract. The recipient and amount are invisible to any observer watching the mempool.",
                    link: { text: "Commit-reveal deep dive", href: "/mev-protection" },
                },
                {
                    img: "/images/transfer-reveal.png",
                    color: "#7c3aed",
                    title: "Phase 2: Reveal",
                    body: "After the commit is mined, you reveal the plaintext inputs. The contract verifies the hash matches and executes the transfer. No front-run window exists.",
                },
                {
                    img: "/images/transfer-nonce.png",
                    color: "#06b6d4",
                    title: "Nonce Prevents Replay",
                    body: "Each commit includes a unique nonce. Used commitments are stored on-chain. Replaying the same commit to a different recipient is impossible.",
                },
                {
                    img: "/images/transfer-window.png",
                    color: "#f59e0b",
                    title: "10-Minute Reveal Window",
                    body: "The reveal must arrive within 600 seconds of the commit block. Expired commitments are invalidated. The time limit adds a safety layer for abandoned transfers.",
                    link: { text: "Time-lock details", href: "/mev-protection" },
                },
            ]}
            steps={[
                { n: "01", color: "#10b981", title: "Enter Transfer Details", desc: "Choose the recipient address, token, and amount inside the app. Your vault proof is hashed locally.", detail: "hash = keccak256(abi.encodePacked(vaultProof, recipient, amount, nonce))" },
                { n: "02", color: "#7c3aed", title: "Submit Commit Transaction", desc: "Send the hash to the Qrypt-Safe contract. The transaction reveals nothing about the transfer to mempool observers.", detail: "personalVault.commitTransfer(bytes32 commitHash)" },
                { n: "03", color: "#06b6d4", title: "Wait for Commit to Mine", desc: "The commit transaction is included in a block. Once mined, the 10-minute reveal window opens.", detail: "Block confirms. commitTimestamp stored on-chain." },
                { n: "04", color: "#f59e0b", title: "Submit Reveal Transaction", desc: "Reveal the plaintext inputs. Contract verifies, executes the transfer, and marks the nonce as spent.", detail: "personalVault.revealTransfer(vaultProof, recipient, amount, nonce)" },
            ]}
            techNote={{
                label: "Commit hash construction",
                lines: [
                    "// Commit phase: nothing sensitive exposed",
                    "bytes32 commitHash = keccak256(abi.encodePacked(",
                    "    vaultProof,    // user's secret",
                    "    recipient,     // destination wallet",
                    "    amount,        // token amount",
                    "    nonce          // unique per-commit counter",
                    "));",
                    "personalVault.commitTransfer(commitHash);",
                ],
            }}
            relatedLinks={[
                { label: "MEV Protection", href: "/mev-protection", color: "#10b981" },
                { label: "Making Transfers", href: "/making-transfers", color: "#7c3aed" },
                { label: "Vault Proof Security", href: "/vault-proof-security", color: "#06b6d4" },
            ]}
        />
    );
}

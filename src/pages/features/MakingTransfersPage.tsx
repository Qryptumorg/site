import FeatureBentoPage from "../FeatureBentoPage";

export default function MakingTransfersPage() {
    return (
        <FeatureBentoPage
            pageTitle="Making Transfers"
            badge="How It Works"
            heroTitle="Transfer Shielded"
            heroHighlight="Tokens Safely"
            heroSubtitle="Send qTokens to any wallet using a two-phase commit-reveal flow. Your vault proof never appears in any transaction. Front-running is structurally impossible."
            primaryColor="#7c3aed"
            secondaryColor="#06b6d4"
            heroButtons={[
                { label: "Make a Transfer", href: "/app", primary: true },
                { label: "Transfer Engine", href: "/transfer-engine" },
            ]}
            stats={[
                { value: "2 tx", label: "Per transfer", note: "Commit then reveal" },
                { value: "~$0.12", label: "Total gas cost", note: "Both transactions at 0.5 gwei" },
                { value: "0", label: "MEV exposure", note: "Commit reveals nothing" },
                { value: "10 min", label: "Reveal deadline", note: "600 blocks to complete" },
            ]}
            sectionBadge="Transfer Flow"
            sectionColor="#7c3aed"
            sectionHeading="Two Transactions, Complete Privacy"
            sectionBody="The commit-reveal design separates the intent from the execution. You commit a hash first. You reveal the details only after the hash is on-chain and immutable."
            cards={[
                {
                    img: "/images/transfer-commit.png",
                    color: "#7c3aed",
                    title: "Enter Vault Proof Locally",
                    body: "Your vault proof is hashed in the browser. It is never sent to any server, never included in any transaction in plaintext. The hash travels, not the secret.",
                    link: { text: "How vault proof works", href: "/vault-proof-security" },
                },
                {
                    img: "/images/transfer-reveal.png",
                    color: "#06b6d4",
                    title: "Commit the Hash",
                    body: "Transaction 1 sends only the commitment hash. Mempool observers see a hash. No amount. No recipient. No vault proof. The transfer is invisible.",
                },
                {
                    img: "/images/transfer-nonce.png",
                    color: "#10b981",
                    title: "Reveal After Mining",
                    body: "Once the commit is mined, you send transaction 2 with the plaintext inputs. The contract verifies the hash matches and executes the transfer atomically.",
                },
                {
                    img: "/images/transfer-window.png",
                    color: "#f59e0b",
                    title: "Recipient Gets qTokens",
                    body: "The recipient receives qTokens in their wallet. They can hold them, or unshield to get the original ERC-20. qTokens are fully fungible inside the Qryptum system.",
                    link: { text: "qToken system", href: "/qtoken-system" },
                },
            ]}
            steps={[
                { n: "01", color: "#7c3aed", title: "Open Transfer Tab", desc: "Navigate to the Transfer section inside the app. Select the token and enter the recipient address and amount.", detail: "All inputs processed locally. Nothing sent to servers." },
                { n: "02", color: "#06b6d4", title: "Enter Vault Proof", desc: "Type your 6-character vault proof. The app computes keccak256(vaultProof, recipient, amount, nonce) in the browser.", detail: "hash = keccak256(abi.encodePacked(vaultProof, recipient, amount, nonce))" },
                { n: "03", color: "#10b981", title: "Submit Commit", desc: "Sign and send transaction 1. Only the hash goes on-chain. The commit is now recorded.", detail: "personalVault.commitTransfer(bytes32 commitHash)" },
                { n: "04", color: "#f59e0b", title: "Submit Reveal", desc: "Within 10 minutes, send the reveal transaction. The contract verifies and executes the transfer.", detail: "personalVault.revealTransfer(vaultProof, recipient, amount, nonce)" },
            ]}
            cta={{
                title: "Make Your First Transfer",
                body: "Try it on Sepolia testnet. Two transactions. Complete privacy.",
                button: "Open Transfer Tab",
                href: "/app",
            }}
            relatedLinks={[
                { label: "Transfer Engine", href: "/transfer-engine", color: "#7c3aed" },
                { label: "MEV Protection", href: "/mev-protection", color: "#06b6d4" },
                { label: "Vault Proof Security", href: "/vault-proof-security", color: "#10b981" },
            ]}
        />
    );
}

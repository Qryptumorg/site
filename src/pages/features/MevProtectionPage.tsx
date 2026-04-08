import FeatureBentoPage from "../FeatureBentoPage";

export default function MevProtectionPage() {
    return (
        <FeatureBentoPage
            pageTitle="MEV Protection"
            badge="Protocol Architecture"
            heroTitle="Front-Running"
            heroHighlight="Structurally Impossible"
            heroSubtitle="The commit-reveal scheme removes any window for mempool observers to front-run or sandwich your transfers. By the time details are visible, the transfer is already done."
            primaryColor="#06b6d4"
            secondaryColor="#7c3aed"
            heroButtons={[
                { label: "Transfer Engine", href: "/transfer-engine" },
            ]}
            stats={[
                { value: "Zero", label: "MEV window", note: "Commit reveals nothing" },
                { value: "Unique", label: "Nonce per commit", note: "Replay attacks blocked" },
                { value: "600s", label: "Reveal deadline", note: "Expired commits void" },
                { value: "On-chain", label: "Nonce registry", note: "Used nonces stored forever" },
            ]}
            sectionBadge="Anti-MEV Design"
            sectionColor="#06b6d4"
            sectionHeading="Why MEV Cannot Touch Qryptum"
            sectionBody="MEV bots need to see transfer details before they are finalized. The commit-reveal scheme makes the details invisible until execution is already guaranteed."
            cards={[
                {
                    img: "/images/transfer-commit.png",
                    color: "#06b6d4",
                    title: "Commit Reveals Nothing",
                    body: "The commitment is a keccak256 hash. It contains no readable information about recipient, amount, or vault proof. Mempool scanners see only an opaque 32-byte value.",
                    link: { text: "Commit-reveal flow", href: "/transfer-engine" },
                },
                {
                    img: "/images/transfer-nonce.png",
                    color: "#7c3aed",
                    title: "Nonce Prevents Replay",
                    body: "Each commit includes a unique nonce. The contract records used nonces permanently on-chain. No attacker can reuse a captured commitment against a different target.",
                },
                {
                    img: "/images/transfer-window.png",
                    color: "#10b981",
                    title: "10-Minute Time Lock",
                    body: "The reveal window expires after 600 seconds. An uncommitted or expired reveal cannot be forced through. This prevents griefing where someone commits but never reveals.",
                },
                {
                    img: "/images/mev-protection.png",
                    color: "#f59e0b",
                    title: "No Off-Chain Coordination",
                    body: "Every step happens on Ethereum. There is no relayer, no private mempool, no trusted sequencer. Protection comes from the protocol design itself.",
                    link: { text: "Security overview", href: "/vault-proof-security" },
                },
            ]}
            techNote={{
                label: "Why the commit hash is opaque",
                lines: [
                    "// Attacker sees only this in mempool:",
                    "commitHash = 0x3f7a91b2c4d8e5f1...",
                    "",
                    "// They cannot recover any of these without brute-forcing:",
                    "// - vaultProof    (6-char secret)",
                    "// - recipient     (destination address)",
                    "// - amount        (token amount)",
                    "// - nonce         (unique per commit)",
                    "",
                    "// By reveal time, commit is already mined. Too late to front-run.",
                ],
            }}
            relatedLinks={[
                { label: "Transfer Engine", href: "/transfer-engine", color: "#06b6d4" },
                { label: "Vault Proof Security", href: "/vault-proof-security", color: "#7c3aed" },
                { label: "Making Transfers", href: "/making-transfers", color: "#10b981" },
            ]}
        />
    );
}

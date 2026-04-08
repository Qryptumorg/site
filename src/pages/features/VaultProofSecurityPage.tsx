import FeatureBentoPage from "../FeatureBentoPage";

export default function VaultProofSecurityPage() {
    return (
        <FeatureBentoPage
            pageTitle="Vault Proof Security"
            badge="Cryptographic Design"
            heroTitle="keccak256 Security"
            heroHighlight="Without Servers"
            heroSubtitle="Your vault proof is hashed locally in the browser, stored on-chain as a hash, and verified by the smart contract. Qryptum never sees your plaintext."
            primaryColor="#7c3aed"
            secondaryColor="#10b981"
            heroButtons={[
                { label: "Read the Docs", href: "/docs/introduction/overview" },
            ]}
            stats={[
                { value: "keccak256", label: "Hash algorithm", note: "SHA-3 family, post-quantum" },
                { value: "Never", label: "Plaintext sent", note: "Hashed locally always" },
                { value: "Zero", label: "Server storage", note: "No database involved" },
                { value: "~$528K", label: "Expected brute-force cost", note: "At 0.5 gwei, $0.06/attempt" },
            ]}
            sectionBadge="Cryptographic Properties"
            sectionColor="#7c3aed"
            sectionHeading="How Vault Proof Hashing Protects You"
            sectionBody="Every vault operation compares the keccak256 hash of your input against the stored hash. The original 6-character proof never touches any server or appears in any transaction."
            cards={[
                {
                    img: "/images/sec-hash.png",
                    color: "#7c3aed",
                    title: "keccak256 On-Chain Hash",
                    body: "When you deploy a QRYPTANK, only the keccak256 hash of your vault proof is stored in contract state. The plaintext is mathematically irreversible from the hash.",
                    link: { text: "Technical spec", href: "/docs/introduction/overview" },
                },
                {
                    img: "/images/sec-noserver.png",
                    color: "#06b6d4",
                    title: "Zero Server Storage",
                    body: "Qryptum operates no servers that store vault proofs, private keys, or user data. The app is a UI layer. All logic runs on-chain or in your browser.",
                },
                {
                    img: "/images/sec-onchain.png",
                    color: "#10b981",
                    title: "On-Chain Verification Only",
                    body: "Every shield, transfer, and unshield is verified by the smart contract, not the UI. You can bypass the UI entirely and call the contract directly.",
                },
                {
                    img: "/images/card-sec-brute-force.png",
                    color: "#f59e0b",
                    title: "Brute-Force Cost: ~$528,000",
                    body: "A 6-char vault proof (3 lowercase + 3 digits) has 17,576,000 combinations. At $0.06 per attempt and 0.5 gwei gas, full brute-force costs ~$528K expected value.",
                    link: { text: "Security analysis", href: "/docs/introduction/how-it-works" },
                },
            ]}
            techNote={{
                label: "Security model: brute-force analysis",
                lines: [
                    "// Vault proof: 3 lowercase letters (26^3) + 3 digits (10^3)",
                    "combinations = 17,576 * 1,000 = 17,576,000",
                    "",
                    "// Cost per attempt at 0.5 gwei average gas price",
                    "gas_per_attempt  = ~200,000 units",
                    "cost_per_attempt = 200,000 * 0.5 gwei * $3,200/ETH ≈ $0.06",
                    "",
                    "// Expected brute-force cost (50% success point)",
                    "expected_cost = 17,576,000 / 2 * $0.06 ≈ $528,000",
                ],
            }}
            relatedLinks={[
                { label: "MEV Protection", href: "/mev-protection", color: "#7c3aed" },
                { label: "Transfer Engine", href: "/transfer-engine", color: "#10b981" },
                { label: "Transfer Shield", href: "/transfer-shield", color: "#06b6d4" },
            ]}
        />
    );
}

import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function VaultProofHashingPage() {
    return (
        <FeatureBentoPage
            pageTitle="Vault Proof Hashing"
            badge="CRYPTOGRAPHIC DESIGN"
            heroTitle="keccak256"
            heroHighlight="Post-Quantum Security"
            heroSubtitle="Your vault proof is hashed using keccak256 before any on-chain interaction. The protocol stores only the 256-bit hash. The plaintext never appears on any blockchain, server, or network call."
            primaryColor="#6366F1"
            secondaryColor="#8B5CF6"
            heroButtons={[
                { label: "Vault Proof Security", href: "/vault-proof-security", primary: false },
                { label: "No Server Storage", href: "/no-server-storage", primary: false },
            ]}
            stats={[
                { value: "keccak256", label: "Hash function", note: "Ethereum-native standard" },
                { value: "256 bits", label: "Hash output", note: "32-byte digest" },
                { value: "0", label: "Plaintext on-chain", note: "Never written to storage" },
                { value: "$528K", label: "Brute-force cost", note: "At 0.5 gwei, $2,500/ETH" },
            ]}
            sectionBadge="HASH FUNCTION"
            sectionHeading="Why keccak256 and Why It Is Enough"
            sectionBody="keccak256 is the hash function native to the Ethereum Virtual Machine. It produces a 256-bit digest from any input. Finding a plaintext that matches a stored hash would cost hundreds of thousands of dollars in compute at current gas prices."
            sectionColor="#6366F1"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format",
                    color: "#6366F1",
                    title: "EVM-Native Hash Function",
                    body: "keccak256 is the same hash function Ethereum uses for state roots, transaction hashes, and address derivation. It is deeply battle-tested in the EVM context.",
                    link: { text: "Onchain verification", href: "/onchain-verification" },
                },
                {
                    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format",
                    color: "#8B5CF6",
                    title: "Only Hash Stored On-Chain",
                    body: "The PersonalQRYPTANK contract stores only the keccak256 digest of your vault proof. No plaintext, no hint, no salt stored alongside it.",
                },
                {
                    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format",
                    color: "#4F46E5",
                    title: "Brute-Force Cost Analysis",
                    body: "At 0.5 gwei and $2,500/ETH, a full 256-bit brute force costs approximately $528,000. This is the economic floor for attacking any QRYPTANK vault proof.",
                },
                {
                    img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format",
                    color: "#7C3AED",
                    title: "Pre-Image Resistance",
                    body: "keccak256 is pre-image resistant: given a hash, computing the original input is computationally infeasible. An attacker who sees the stored hash learns nothing useful.",
                },
            ]}
            techNote={{
                label: "Hash: keccak256 in Solidity and JavaScript",
                lines: [
                    "// Solidity: hash stored on deployment",
                    "bytes32 public vaultProofHash;",
                    "constructor(bytes32 _hash) { vaultProofHash = _hash; }",
                    "",
                    "// JavaScript: computed client-side",
                    "const hash = ethers.keccak256(ethers.toUtf8Bytes(vaultProof));",
                ],
            }}
            relatedLinks={[
                { label: "Vault Proof Security", href: "/vault-proof-security", color: "#6366F1" },
                { label: "No Server Storage", href: "/no-server-storage", color: "#8B5CF6" },
                { label: "Onchain Verification", href: "/onchain-verification", color: "#4F46E5" },
            ]}
        />
    );
}

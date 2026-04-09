import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function PersonalQryptSafeContractPage() {
    return (
        <FeatureBentoPage
            pageTitle="PersonalQrypt-Safe"
            badge="SMART CONTRACTS"
            heroTitle="Your Vault"
            heroHighlight="Contract on L1"
            heroSubtitle="PersonalQrypt-Safe is the core contract that holds your shielded assets. It exposes shield(), transfer(), and unshield() functions: each requiring vault proof verification on every call."
            primaryColor="#7C3AED"
            secondaryColor="#00D4FF"
            heroButtons={[
                { label: "ShieldFactory", href: "/shield-factory", primary: false },
                { label: "ABI and Addresses", href: "/abi-and-addresses", primary: false },
            ]}
            stats={[
                { value: "3 functions", label: "Core operations", note: "Shield, transfer, unshield" },
                { value: "Vault proof", label: "Required on every call", note: "keccak256 verified" },
                { value: "keccak256", label: "Authorization hash", note: "Set on deployment" },
                { value: "Ethereum L1", label: "Deployed on", note: "Mainnet and Sepolia" },
            ]}
            sectionBadge="CONTRACT INTERFACE"
            sectionHeading="The Three Core Functions"
            sectionBody="Every function that moves tokens requires the caller to submit their vault proof. The contract hashes it and compares against the stored hash. Wrong proof triggers an immediate revert with no state change."
            sectionColor="#7C3AED"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&auto=format",
                    color: "#7C3AED",
                    title: "shield(token, amount, proof)",
                    body: "Deposits an ERC-20 token into the Qrypt-Safe and mints the equivalent qToken to the caller. Requires a valid vault proof hash match.",
                    link: { text: "Shield tokens guide", href: "/shield-tokens" },
                },
                {
                    img: "https://images.unsplash.com/photo-1503551723145-6c040742065b?w=800&auto=format",
                    color: "#00D4FF",
                    title: "commitTransfer + revealTransfer",
                    body: "Two-phase transfer function. Commit submits a hash. Reveal submits proof and details. The contract verifies and moves qTokens only on a hash match.",
                    link: { text: "Commit-reveal scheme", href: "/commit-reveal-scheme" },
                },
                {
                    img: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&auto=format",
                    color: "#5B21B6",
                    title: "unshield(token, amount, proof)",
                    body: "Burns qTokens and returns the original ERC-20 tokens to the caller. Requires vault proof. Atomic: burn and transfer in one transaction.",
                    link: { text: "Burn qTokens", href: "/burn-qtokens" },
                },
                {
                    img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format",
                    color: "#0099BB",
                    title: "emergencyWithdraw()",
                    body: "Callable after 180 days of inactivity. Returns all tokens without requiring a vault proof. For lost vault proof recovery only.",
                    link: { text: "180-day inactivity rule", href: "/180-day-inactivity" },
                },
            ]}
            techNote={{
                label: "Contract: PersonalQrypt-Safe interface",
                lines: [
                    "interface IPersonalQrypt-Safe {",
                    "    function shield(address token, uint256 amount, bytes32 proof) external;",
                    "    function commitTransfer(bytes32 commitment) external;",
                    "    function revealTransfer(bytes32 proof, address to, uint256 amount, uint256 nonce) external;",
                    "    function unshield(address token, uint256 amount, bytes32 proof) external;",
                    "    function emergencyWithdraw() external; // after 180 days inactivity",
                    "}",
                ],
            }}
            relatedLinks={[
                { label: "ShieldFactory", href: "/shield-factory", color: "#7C3AED" },
                { label: "ShieldToken (qToken)", href: "/shield-token", color: "#00D4FF" },
                { label: "ABI and Addresses", href: "/abi-and-addresses", color: "#5B21B6" },
            ]}
        />
    );
}

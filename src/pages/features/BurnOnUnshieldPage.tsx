import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function BurnOnUnshieldPage() {
    return (
        <FeatureBentoPage
            pageTitle="Burn on Unshield"
            badge="QTOKEN SYSTEM"
            heroTitle="qTokens Destroyed"
            heroHighlight="On Every Exit"
            heroSubtitle="When you unshield, your qTokens are atomically burned in the same transaction that returns your original ERC-20 tokens. No surplus qTokens can ever remain."
            primaryColor="#EF4444"
            secondaryColor="#F97316"
            heroButtons={[
                { label: "Exiting Qrypt-Safe", href: "/exiting-qrypt-safe", primary: true },
                { label: "1:1 Backing", href: "/one-to-one-backing" },
            ]}
            stats={[
                { value: "1 tx", label: "To unshield", note: "Burn and return in one call" },
                { value: "Atomic", label: "Burn and return", note: "Both or neither" },
                { value: "0", label: "Surplus qTokens", note: "Mathematically impossible" },
                { value: "Same block", label: "Token return", note: "No claim step" },
            ]}
            sectionBadge="BURN MECHANISM"
            sectionHeading="Why qTokens Cannot Outlive Their Collateral"
            sectionBody="The burn happens inside unshield() before the ERC-20 tokens are transferred out. If the burn fails, the whole transaction reverts. There is no way to receive tokens without destroying the corresponding qTokens."
            sectionColor="#EF4444"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format",
                    color: "#EF4444",
                    title: "Atomic Burn Before Return",
                    body: "The ERC-20 token transfer only proceeds if the qToken burn succeeds. Both operations occur in the same atomic transaction with no gap.",
                    link: { text: "How exiting works", href: "/burn-qtokens" },
                },
                {
                    img: "https://images.unsplash.com/photo-1509869175650-a1d97972541a?w=800&auto=format",
                    color: "#F97316",
                    title: "Zero Surplus Invariant",
                    body: "Total qToken supply always equals total ERC-20 locked. No mechanism exists to remove ERC-20 tokens without burning the matching qTokens.",
                },
                {
                    img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format",
                    color: "#DC2626",
                    title: "Standard ERC-20 Burn",
                    body: "The burn call uses the standard ERC-20 burn interface. The qToken contract permanently destroys the tokens by reducing totalSupply.",
                },
                {
                    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format",
                    color: "#B91C1C",
                    title: "Vault Proof Required",
                    body: "Unshield requires a valid vault proof. Only the Qrypt-Safe owner with the correct proof can trigger the burn and receive their tokens back.",
                    link: { text: "Vault proof security", href: "/vault-proof-security" },
                },
            ]}
            techNote={{
                label: "Contract: burn on unshield",
                lines: [
                    "function unshield(address token, uint256 amount, bytes32 proof) external {",
                    "    require(keccak256(proof) == vaultProofHash, 'invalid proof');",
                    "    IShieldToken(qTokenOf[token]).burnFrom(msg.sender, amount);",
                    "    IERC20(token).transfer(msg.sender, amount);",
                    "}",
                    "// burn before transfer: revert on failure restores both",
                ],
            }}
            relatedLinks={[
                { label: "Exiting Qrypt-Safe", href: "/exiting-qrypt-safe", color: "#EF4444" },
                { label: "Receive Original Tokens", href: "/receive-original-tokens", color: "#F97316" },
                { label: "1:1 Backing", href: "/one-to-one-backing", color: "#DC2626" },
            ]}
        />
    );
}

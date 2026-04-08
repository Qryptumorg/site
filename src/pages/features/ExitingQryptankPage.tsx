import FeatureBentoPage from "../FeatureBentoPage";

export default function ExitingQryptankPage() {
    return (
        <FeatureBentoPage
            pageTitle="Exiting Your QRYPTANK"
            badge="Exit Process"
            heroTitle="Unshield and"
            heroHighlight="Reclaim Anytime"
            heroSubtitle="Exit your QRYPTANK whenever you choose. Burn your qTokens, verify your vault proof, and receive your original ERC-20 tokens back to your wallet in one transaction."
            primaryColor="#10b981"
            secondaryColor="#f59e0b"
            heroButtons={[
                { label: "Open App", href: "/app", primary: true },
            ]}
            stats={[
                { value: "1 tx", label: "To unshield", note: "Single on-chain call" },
                { value: "Instant", label: "Token return", note: "Same block as unshield" },
                { value: "Burned", label: "qTokens fate", note: "Destroyed on exit" },
                { value: "180 days", label: "Recovery unlock", note: "Emergency fallback" },
            ]}
            sectionBadge="How Exiting Works"
            sectionColor="#10b981"
            sectionHeading="Your Tokens, On Your Terms"
            sectionBody="Unshielding is as simple as shielding. Provide your vault proof, specify the amount, and the QRYPTANK burns your qTokens and returns the originals."
            cards={[
                {
                    img: "/images/exit-burn.png",
                    color: "#10b981",
                    title: "Burn qTokens",
                    body: "Call unshield() with your vault proof and amount. The QRYPTANK burns exactly that amount of qTokens from your wallet in the same transaction.",
                    link: { text: "Unshield flow", href: "/docs/introduction/how-it-works" },
                },
                {
                    img: "/images/exit-receive.png",
                    color: "#06b6d4",
                    title: "Receive Original Tokens",
                    body: "Within the same transaction, the original ERC-20 tokens are transferred from the vault directly to your wallet. No waiting. No intermediary.",
                },
                {
                    img: "/images/card-dual-factor.png",
                    color: "#7c3aed",
                    title: "Dual-Factor on Exit Too",
                    body: "Unshielding requires both your private key (wallet signature) and your vault proof. An attacker who holds your qTokens cannot drain your vault.",
                },
                {
                    img: "/images/exit-recovery.png",
                    color: "#f59e0b",
                    title: "Emergency Recovery After 180 Days",
                    body: "If your QRYPTANK has had no activity for 180 days, an emergency recovery path unlocks. This protects against lost vault proofs in extreme edge cases.",
                    link: { text: "Recovery details", href: "/docs/introduction/overview" },
                },
            ]}
            techNote={{
                label: "Unshield transaction call",
                lines: [
                    "// Single transaction unshield",
                    "personalVault.unshield(tokenAddress, amount, vaultProof)",
                    "",
                    "// Contract burns qTokens and returns originals atomically",
                    "qToken.burn(msg.sender, amount);           // qToken destroyed",
                    "token.transfer(msg.sender, amount);        // Original returned",
                    "",
                    "// Emergency path (180 days inactivity only)",
                    "personalVault.emergencyWithdraw(tokenAddress)",
                ],
            }}
            relatedLinks={[
                { label: "Shield ERC-20 Tokens", href: "/shield-erc20-tokens", color: "#10b981" },
                { label: "qToken System", href: "/qtoken-system", color: "#06b6d4" },
                { label: "Vault Proof Security", href: "/vault-proof-security", color: "#f59e0b" },
            ]}
        />
    );
}

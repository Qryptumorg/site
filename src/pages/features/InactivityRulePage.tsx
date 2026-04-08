import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function InactivityRulePage() {
    return (
        <FeatureBentoPage
            pageTitle="180-Day Inactivity Rule"
            badge="EMERGENCY RECOVERY"
            heroTitle="Emergency Unlock"
            heroHighlight="After 180 Days"
            heroSubtitle="A QRYPTANK that has had zero on-chain activity for 180 consecutive days can trigger an emergency withdrawal. Designed for worst-case vault proof loss: no admin required."
            primaryColor="#EF4444"
            secondaryColor="#F97316"
            heroButtons={[
                { label: "Emergency Recovery", href: "/emergency-recovery", primary: false },
                { label: "No Admin Keys", href: "/no-admin-keys", primary: false },
            ]}
            stats={[
                { value: "180 days", label: "Inactivity required", note: "15,552,000 seconds on-chain" },
                { value: "0", label: "Admin access needed", note: "Permissionless function" },
                { value: "Block timestamp", label: "Source of truth", note: "No oracle required" },
                { value: "Full balance", label: "Recoverable", note: "All shielded tokens" },
            ]}
            sectionBadge="INACTIVITY RULE"
            sectionHeading="How the 180-Day Clock Works"
            sectionBody="Every shield(), transfer(), and unshield() call updates the lastActivity timestamp in the QRYPTANK contract. If 180 days pass without any of these calls, the emergencyWithdraw() function becomes callable by the wallet owner."
            sectionColor="#EF4444"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format",
                    color: "#EF4444",
                    title: "Activity Timestamp Tracking",
                    body: "Every contract interaction updates lastActivity to block.timestamp. The 180-day clock resets on each shield, transfer, or unshield. Dormant vaults accumulate inactivity.",
                },
                {
                    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format",
                    color: "#F97316",
                    title: "No Vault Proof Required",
                    body: "emergencyWithdraw() is specifically for situations where the vault proof has been lost. It does not require hash verification: only proof of wallet ownership via msg.sender.",
                    link: { text: "Emergency recovery", href: "/emergency-recovery" },
                },
                {
                    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format",
                    color: "#DC2626",
                    title: "Permissionless Function",
                    body: "emergencyWithdraw() is publicly callable by the QRYPTANK owner after the inactivity period. No whitelist, no admin approval, no Qryptum team involvement.",
                    link: { text: "No admin keys", href: "/no-admin-keys" },
                },
                {
                    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format",
                    color: "#B45309",
                    title: "Full Token Recovery",
                    body: "The emergency function transfers all ERC-20 tokens held by the QRYPTANK to the owner address and burns all remaining qTokens in one transaction.",
                },
            ]}
            techNote={{
                label: "Contract: inactivity rule",
                lines: [
                    "uint256 public lastActivity;",
                    "uint256 public constant INACTIVITY_PERIOD = 180 days;",
                    "",
                    "function emergencyWithdraw() external onlyOwner {",
                    "    require(block.timestamp >= lastActivity + INACTIVITY_PERIOD, 'not yet');",
                    "    _withdrawAll();",
                    "}",
                ],
            }}
            relatedLinks={[
                { label: "Emergency Recovery", href: "/emergency-recovery", color: "#EF4444" },
                { label: "No Admin Keys", href: "/no-admin-keys", color: "#F97316" },
                { label: "Exiting QRYPTANK", href: "/exiting-qryptank", color: "#DC2626" },
            ]}
        />
    );
}

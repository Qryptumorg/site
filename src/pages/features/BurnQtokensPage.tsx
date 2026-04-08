import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function BurnQtokensPage() {
    return (
        <FeatureBentoPage
            pageTitle="Burn qTokens"
            badge="EXITING"
            heroTitle="Initiate the"
            heroHighlight="Unshield Process"
            heroSubtitle="To reclaim your tokens, call unshield() with your vault proof. Your qTokens are burned and the original ERC-20 tokens are returned to your wallet in one atomic transaction."
            primaryColor="#F97316"
            secondaryColor="#EF4444"
            heroButtons={[
                { label: "Exit QRYPTANK", href: "/app", primary: true },
                { label: "Receive Original Tokens", href: "/receive-original-tokens" },
            ]}
            stats={[
                { value: "1 tx", label: "To unshield", note: "Burn and return in one call" },
                { value: "Atomic", label: "Burn and receive", note: "No gap between steps" },
                { value: "Instant", label: "Token return", note: "Same block as burn" },
                { value: "Vault proof", label: "Required", note: "Proves QRYPTANK ownership" },
            ]}
            sectionBadge="BURN PROCESS"
            sectionHeading="What Happens When You Call unshield()"
            sectionBody="The unshield() function verifies your vault proof, burns the specified qToken amount, and transfers the matching ERC-20 tokens back to your wallet. All three steps happen atomically in one Ethereum transaction."
            sectionColor="#F97316"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1509869175650-a1d97972541a?w=800&auto=format",
                    color: "#F97316",
                    title: "Vault Proof Verification",
                    body: "unshield() first verifies your vault proof hash matches the stored keccak256 hash. Wrong proof causes an immediate revert with no token movement.",
                    link: { text: "Vault proof security", href: "/vault-proof-security" },
                },
                {
                    img: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&auto=format",
                    color: "#EF4444",
                    title: "qToken Burn",
                    body: "After proof verification, the qTokens are burned from your wallet using the standard ERC-20 burn interface. Total qToken supply decreases by the burned amount.",
                    link: { text: "Burn on Unshield", href: "/burn-on-unshield" },
                },
                {
                    img: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&auto=format",
                    color: "#DC2626",
                    title: "ERC-20 Transfer Out",
                    body: "After the burn succeeds, the original ERC-20 tokens are transferred from the QRYPTANK to your wallet address. If the burn failed, the transfer does not happen.",
                },
                {
                    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format",
                    color: "#B45309",
                    title: "Partial Unshield Supported",
                    body: "You can unshield any amount up to your total balance. You do not have to exit the full position at once.",
                    link: { text: "Exiting QRYPTANK", href: "/exiting-qryptank" },
                },
            ]}
            techNote={{
                label: "Contract: unshield call",
                lines: [
                    "function unshield(address token, uint256 amount, bytes32 vaultProof) external {",
                    "    require(keccak256(vaultProof) == vaultProofHash, 'invalid proof');",
                    "    IShieldToken(qTokenOf[token]).burnFrom(msg.sender, amount);",
                    "    IERC20(token).transfer(msg.sender, amount);",
                    "}",
                ],
            }}
            relatedLinks={[
                { label: "Exiting QRYPTANK", href: "/exiting-qryptank", color: "#F97316" },
                { label: "Receive Original Tokens", href: "/receive-original-tokens", color: "#EF4444" },
                { label: "Burn on Unshield", href: "/burn-on-unshield", color: "#DC2626" },
            ]}
        />
    );
}

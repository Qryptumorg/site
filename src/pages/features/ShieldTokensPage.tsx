import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function ShieldTokensPage() {
    return (
        <FeatureBentoPage
            pageTitle="Shield Tokens"
            badge="HOW IT WORKS"
            heroTitle="Deposit ERC-20,"
            heroHighlight="Receive qTokens"
            heroSubtitle="Call shield() with any supported ERC-20 token. Your Qrypt-Safe locks the tokens and mints the exact equivalent in qTokens to your wallet address, 1:1, atomically."
            primaryColor="#00C896"
            secondaryColor="#00D4FF"
            heroButtons={[
                { label: "Shield Now", href: "/app", primary: true },
                { label: "Supported Tokens", href: "/supported-tokens" },
            ]}
            stats={[
                { value: "Any ERC-20", label: "Token support", note: "Standard interface required" },
                { value: "1:1", label: "qToken mint", note: "No fractional reserve" },
                { value: "~$0.45", label: "Gas cost", note: "ERC-20 approve + shield()" },
                { value: "Instant", label: "qToken receipt", note: "Same block as deposit" },
            ]}
            sectionBadge="SHIELDING PROCESS"
            sectionHeading="Two Transactions to Shield"
            sectionBody="First approve the Qrypt-Safe to spend your ERC-20 tokens, then call shield(). The approval is a standard ERC-20 step. The shield() call locks the tokens and mints your qTokens in one transaction."
            sectionColor="#00C896"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&auto=format",
                    color: "#00C896",
                    title: "ERC-20 Approve First",
                    body: "Before shielding, you approve your Qrypt-Safe contract to transfer the tokens on your behalf. This is a standard ERC-20 allowance call.",
                    link: { text: "Shield ERC-20 tokens", href: "/shield-erc20-tokens" },
                },
                {
                    img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format",
                    color: "#00D4FF",
                    title: "Vault Proof Required",
                    body: "shield() requires your vault proof to verify you are the Qrypt-Safe owner. The plaintext is hashed client-side before submission.",
                    link: { text: "Enter vault proof", href: "/enter-vault-proof" },
                },
                {
                    img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format",
                    color: "#00A876",
                    title: "Atomic Lock and Mint",
                    body: "The shield() call atomically locks your ERC-20 tokens inside the Qrypt-Safe and mints the exact qToken amount to your wallet in one transaction.",
                },
                {
                    img: "https://images.unsplash.com/photo-1503551723145-6c040742065b?w=800&auto=format",
                    color: "#0099BB",
                    title: "qTokens Visible in MetaMask",
                    body: "After shielding, the qTokens appear in your MetaMask with the q prefix: qETH, qUSDT, qUSDC. They track your shielded position exactly.",
                    link: { text: "qToken system", href: "/qtoken-system" },
                },
            ]}
            techNote={{
                label: "Contract: shield tokens",
                lines: [
                    "function shield(address token, uint256 amount, bytes32 vaultProof) external {",
                    "    require(keccak256(vaultProof) == vaultProofHash, 'invalid proof');",
                    "    IERC20(token).transferFrom(msg.sender, address(this), amount);",
                    "    IShieldToken(qTokenOf[token]).mint(msg.sender, amount);",
                    "}",
                ],
            }}
            relatedLinks={[
                { label: "Shield ERC-20 Tokens", href: "/shield-erc20-tokens", color: "#00C896" },
                { label: "1:1 Backing", href: "/one-to-one-backing", color: "#00D4FF" },
                { label: "Create Qrypt-Safe", href: "/create-qrypt-safe", color: "#00A876" },
            ]}
        />
    );
}

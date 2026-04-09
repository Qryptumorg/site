import FeatureBentoPage from "../FeatureBentoPage";

export default function ShieldErc20Page() {
    return (
        <FeatureBentoPage
            pageTitle="Shield ERC-20 Tokens"
            badge="Shield Protocol"
            heroTitle="Shield Any ERC-20"
            heroHighlight="Token Instantly"
            heroSubtitle="Deposit any ERC-20 token into your Qrypt-Safe in one transaction. Receive qTokens immediately. Your assets stay on-chain, fully collateralized."
            primaryColor="#06b6d4"
            secondaryColor="#7c3aed"
            heroButtons={[
                { label: "Open App", href: "/app", primary: true },
                { label: "Read Docs", href: "/docs/introduction/overview" },
            ]}
            stats={[
                { value: "Any ERC-20", label: "Token support", note: "ETH, USDT, USDC, DAI..." },
                { value: "1 tx", label: "Shield cost", note: "Single approval + deposit" },
                { value: "1:1", label: "qToken ratio", note: "Fully backed always" },
                { value: "Instant", label: "qToken mint", note: "Same block as deposit" },
            ]}
            sectionBadge="How Shielding Works"
            sectionColor="#06b6d4"
            sectionHeading="From Token to qToken in One Click"
            sectionBody="Shielding converts your ERC-20 into a cryptographically protected qToken. The original token stays locked inside your Qrypt-Safe until you choose to unshield."
            cards={[
                {
                    img: "/images/shield-approve.png",
                    color: "#06b6d4",
                    title: "Approve Once",
                    body: "Grant your Qrypt-Safe permission to pull the token. This is a standard ERC-20 approve() call. You set the exact amount you want to shield.",
                    link: { text: "ERC-20 approval flow", href: "/docs/introduction/overview" },
                },
                {
                    img: "/images/shield-lock.png",
                    color: "#7c3aed",
                    title: "Token Locked In Vault",
                    body: "Your ERC-20 transfers from your wallet to the Qrypt-Safe contract. The contract holds it exclusively. No pool. No shared custody.",
                },
                {
                    img: "/images/shield-qtoken.png",
                    color: "#10b981",
                    title: "qToken Minted Immediately",
                    body: "The Qrypt-Safe mints an equal amount of qTokens to your wallet in the same transaction. 100 USDT shielded returns 100 qUSDT.",
                },
                {
                    img: "/images/card-erc20-shield.png",
                    color: "#f59e0b",
                    title: "Full Collateralization Always",
                    body: "Every qToken in circulation is backed 1:1 by the original asset locked in your Qrypt-Safe. There is no fractional reserve. No lending. No yield.",
                    link: { text: "qToken system", href: "/qtoken-system" },
                },
            ]}
            techNote={{
                label: "Shield transaction calls",
                lines: [
                    "// Step 1: Standard ERC-20 approval",
                    "token.approve(vaultAddress, amount)",
                    "",
                    "// Step 2: Shield with vault proof",
                    "personalVault.shield(tokenAddress, amount, vaultProof)",
                    "",
                    "// Emitted on success",
                    "event Shielded(address indexed token, uint256 amount, address indexed owner)",
                ],
            }}
            relatedLinks={[
                { label: "qToken System", href: "/qtoken-system", color: "#7c3aed" },
                { label: "Vault Proof Security", href: "/vault-proof-security", color: "#06b6d4" },
                { label: "Exiting Qrypt-Safe", href: "/exiting-qrypt-safe", color: "#10b981" },
            ]}
        />
    );
}

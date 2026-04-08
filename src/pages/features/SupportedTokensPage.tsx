import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function SupportedTokensPage() {
    return (
        <FeatureBentoPage
            pageTitle="Supported Tokens"
            badge="DOCS"
            heroTitle="Any Standard"
            heroHighlight="ERC-20 Supported"
            heroSubtitle="Qryptum is compatible with any ERC-20 token that implements the standard interface. ETH (as WETH), USDT, USDC, DAI, and thousands of other ERC-20 tokens can be shielded."
            primaryColor="#10B981"
            secondaryColor="#00D4FF"
            heroButtons={[
                { label: "Shield Tokens", href: "/shield-tokens", primary: true },
                { label: "Shield ERC-20 Tokens", href: "/shield-erc20-tokens" },
            ]}
            stats={[
                { value: "Any ERC-20", label: "Token standard", note: "Full interface required" },
                { value: "WETH", label: "Wrapped ETH", note: "ETH shielded as WETH" },
                { value: "USDT / USDC", label: "Stablecoins", note: "Both supported natively" },
                { value: "1:1", label: "qToken peg", note: "Always fully backed" },
            ]}
            sectionBadge="TOKEN COMPATIBILITY"
            sectionHeading="What Makes a Token Compatible"
            sectionBody="Any token that implements the ERC-20 standard (transfer, transferFrom, approve, balanceOf, totalSupply) is compatible. Tokens with non-standard fee-on-transfer logic may behave differently and should be tested on Sepolia first."
            sectionColor="#10B981"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format",
                    color: "#10B981",
                    title: "ETH via WETH",
                    body: "Ether is shielded as Wrapped ETH (WETH). The app handles the wrap automatically. Unshielding returns WETH, which can be unwrapped in one additional step.",
                },
                {
                    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format",
                    color: "#00D4FF",
                    title: "USDT and USDC",
                    body: "Tether and USDC are fully compatible. Their fee-on-transfer behavior is standard-compliant. qUSDT and qUSDC are minted at 1:1.",
                },
                {
                    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format",
                    color: "#059669",
                    title: "DAI and Other DeFi Tokens",
                    body: "DAI, LINK, UNI, AAVE, and all standard ERC-20 tokens can be shielded. Any token listed on Coingecko with a standard ERC-20 interface should work.",
                },
                {
                    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format",
                    color: "#0099BB",
                    title: "Test on Sepolia First",
                    body: "For non-standard tokens or first-time use, shield a small amount on Sepolia testnet before shielding on Ethereum mainnet.",
                    link: { text: "Network support", href: "/network-support" },
                },
            ]}
            relatedLinks={[
                { label: "Shield ERC-20 Tokens", href: "/shield-erc20-tokens", color: "#10B981" },
                { label: "Shield Tokens (How-To)", href: "/shield-tokens", color: "#00D4FF" },
                { label: "qToken System", href: "/qtoken-system", color: "#059669" },
            ]}
        />
    );
}

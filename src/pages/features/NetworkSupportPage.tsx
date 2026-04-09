import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function NetworkSupportPage() {
    return (
        <FeatureBentoPage
            pageTitle="Network Support"
            badge="DOCS"
            heroTitle="Ethereum L1"
            heroHighlight="and Sepolia Testnet"
            heroSubtitle="Qryptum is deployed on Ethereum Mainnet for production use and Sepolia testnet for safe experimentation. Developers can also use a local Hardhat fork for integration testing."
            primaryColor="#6366F1"
            secondaryColor="#8B5CF6"
            heroButtons={[
                { label: "ABI and Addresses", href: "/abi-and-addresses", primary: false },
                { label: "REST API Reference", href: "/rest-api-reference", primary: false },
            ]}
            stats={[
                { value: "Chain ID 1", label: "Ethereum Mainnet", note: "Production deployment" },
                { value: "Chain ID 11155111", label: "Sepolia", note: "Testnet deployment" },
                { value: "Hardhat", label: "Local fork", note: "For developer testing" },
                { value: "EIP-1559", label: "Transaction type", note: "Gas fee model" },
            ]}
            sectionBadge="NETWORK DETAILS"
            sectionHeading="Supported Networks and Their Use Cases"
            sectionBody="Mainnet is for real assets. Sepolia is free and safe for testing any token, vault proof, or transfer flow before committing to mainnet. The Qryptum app auto-detects your connected network and routes accordingly."
            sectionColor="#6366F1"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format",
                    color: "#6366F1",
                    title: "Ethereum Mainnet",
                    body: "All production Qrypt-Safe deployments and shielding operations run on Ethereum Mainnet (Chain ID 1). Real ETH is required for gas. Contracts are verified on Etherscan.",
                    link: { text: "ABI and addresses", href: "/abi-and-addresses" },
                },
                {
                    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format",
                    color: "#8B5CF6",
                    title: "Sepolia Testnet",
                    body: "Sepolia (Chain ID 11155111) uses free test ETH from Sepolia faucets. All Qryptum contracts are deployed on Sepolia for safe experimentation before mainnet use.",
                },
                {
                    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format",
                    color: "#4F46E5",
                    title: "Local Hardhat Fork",
                    body: "Developers can fork Ethereum Mainnet locally with Hardhat and point the Qryptum app at localhost:8545. This is recommended for integration testing and contract development.",
                    link: { text: "REST API reference", href: "/rest-api-reference" },
                },
                {
                    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format",
                    color: "#7C3AED",
                    title: "Auto Network Detection",
                    body: "The Qryptum app reads your wallet's connected chain ID and adjusts contract addresses and the API endpoint automatically. Switching networks in MetaMask updates the app state.",
                },
            ]}
            relatedLinks={[
                { label: "ABI and Addresses", href: "/abi-and-addresses", color: "#6366F1" },
                { label: "REST API Reference", href: "/rest-api-reference", color: "#8B5CF6" },
                { label: "ShieldFactory", href: "/shield-factory", color: "#4F46E5" },
            ]}
        />
    );
}

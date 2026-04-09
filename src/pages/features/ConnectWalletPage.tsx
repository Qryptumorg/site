import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function ConnectWalletPage() {
    return (
        <FeatureBentoPage
            pageTitle="Connect Wallet"
            badge="GETTING STARTED"
            heroTitle="Connect Your"
            heroHighlight="Ethereum Wallet"
            heroSubtitle="Qryptum works with MetaMask, WalletConnect, and any EIP-1193 compatible wallet. No account creation, no email, no KYC: just your wallet."
            primaryColor="#F59E0B"
            secondaryColor="#EF4444"
            heroButtons={[
                { label: "Launch App", href: "/app", primary: true },
                { label: "Create Qrypt-Safe", href: "/create-qrypt-safe" },
            ]}
            stats={[
                { value: "MetaMask", label: "Native support", note: "No extension config needed" },
                { value: "WalletConnect", label: "Mobile support", note: "QR code pairing" },
                { value: "0", label: "Accounts created", note: "Wallet is your identity" },
                { value: "EIP-1193", label: "Provider standard", note: "Any compliant wallet works" },
            ]}
            sectionBadge="WALLET CONNECTION"
            sectionHeading="Your Wallet Is Your Account"
            sectionBody="There is no Qryptum account. No password. No username. Your Ethereum wallet address is your identity on the protocol. Connect once and your Qrypt-Safe is immediately accessible."
            sectionColor="#F59E0B"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format",
                    color: "#F59E0B",
                    title: "No Signup Required",
                    body: "Connecting your wallet is the only step before using Qryptum. No account creation form, no email verification, no waiting period.",
                    link: { text: "Launch the app", href: "/app" },
                },
                {
                    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format",
                    color: "#EF4444",
                    title: "MetaMask Native",
                    body: "MetaMask is supported out of the box. The app detects the injected provider automatically and requests connection with a single click.",
                },
                {
                    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format",
                    color: "#D97706",
                    title: "WalletConnect Support",
                    body: "Mobile wallet users can connect via WalletConnect QR code pairing. Any WalletConnect v2 compatible wallet works on mainnet and Sepolia.",
                },
                {
                    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format",
                    color: "#B45309",
                    title: "Mainnet and Testnet",
                    body: "The app supports Ethereum Mainnet (chain ID 1) and Sepolia testnet (chain ID 11155111). Network switching is handled automatically.",
                    link: { text: "Network support", href: "/network-support" },
                },
            ]}
            relatedLinks={[
                { label: "Create Qrypt-Safe", href: "/create-qrypt-safe", color: "#F59E0B" },
                { label: "Quick Start Guide", href: "/quick-start-guide", color: "#EF4444" },
                { label: "Getting Shielded", href: "/getting-shielded", color: "#D97706" },
            ]}
        />
    );
}

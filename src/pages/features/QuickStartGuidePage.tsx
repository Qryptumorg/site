import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function QuickStartGuidePage() {
    return (
        <FeatureBentoPage
            pageTitle="Quick Start Guide"
            badge="GETTING STARTED"
            heroTitle="From Zero to"
            heroHighlight="Shielded in 5 Minutes"
            heroSubtitle="Connect your wallet, deploy your QRYPTANK, and shield your first ERC-20 token. Three steps, one browser, no account needed. Approximately $1.65 in total gas."
            primaryColor="#00D4FF"
            secondaryColor="#00C896"
            heroButtons={[
                { label: "Launch App", href: "/app", primary: true },
                { label: "Supported Tokens", href: "/supported-tokens" },
            ]}
            stats={[
                { value: "3 steps", label: "To get shielded", note: "Connect, deploy, shield" },
                { value: "5 min", label: "Total setup time", note: "Including deployment" },
                { value: "~$1.65", label: "Total cost", note: "Deploy + first shield" },
                { value: "Forever", label: "Your vault persists", note: "On Ethereum L1" },
            ]}
            sectionBadge="THREE STEPS"
            sectionHeading="The Full Process in Order"
            sectionBody="You need a funded Ethereum wallet, a supported ERC-20 token to shield, and approximately 5 minutes. The rest is handled by the app and the Ethereum network."
            sectionColor="#00D4FF"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format",
                    color: "#00D4FF",
                    title: "Step 1: Connect Wallet",
                    body: "Open the app and connect your MetaMask or WalletConnect wallet. No account creation. Your wallet address is your identity.",
                    link: { text: "Connect wallet", href: "/connect-wallet" },
                },
                {
                    img: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&auto=format",
                    color: "#00C896",
                    title: "Step 2: Deploy QRYPTANK",
                    body: "Click Deploy and confirm one Ethereum transaction. ShieldFactory creates your personal vault contract. Cost: approximately $1.20.",
                    link: { text: "Create QRYPTANK", href: "/create-qryptank" },
                },
                {
                    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format",
                    color: "#00AACC",
                    title: "Step 3: Shield Tokens",
                    body: "Approve and shield any ERC-20 token. Your QRYPTANK locks the tokens and mints qTokens to your wallet. Cost: approximately $0.45.",
                    link: { text: "Shield tokens", href: "/shield-tokens" },
                },
                {
                    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format",
                    color: "#00B080",
                    title: "What You Have After",
                    body: "A deployed QRYPTANK on Ethereum L1 holding your ERC-20 tokens, with qTokens visible in MetaMask, and a vault proof only you know.",
                    link: { text: "qToken system", href: "/qtoken-system" },
                },
            ]}
            steps={[
                { n: "01", color: "#00D4FF", title: "Connect Wallet", desc: "Use MetaMask or WalletConnect. No signup required.", detail: "eth_requestAccounts: standard EIP-1193 request" },
                { n: "02", color: "#00C896", title: "Set Vault Proof and Deploy", desc: "Choose a vault proof phrase. It is hashed client-side. One transaction deploys your QRYPTANK.", detail: "ShieldFactory.deployVault(keccak256(vaultProof))" },
                { n: "03", color: "#00D4FF", title: "Approve and Shield", desc: "Approve the QRYPTANK to spend your tokens, then call shield(). qTokens arrive in the same block.", detail: "IERC20.approve(qryptank, amount) + qryptank.shield(token, amount, proof)" },
            ]}
            cta={{ title: "Ready to Get Shielded?", body: "Deploy your QRYPTANK and shield your first token in under 5 minutes.", button: "Launch App", href: "/app" }}
            relatedLinks={[
                { label: "Connect Wallet", href: "/connect-wallet", color: "#00D4FF" },
                { label: "Create QRYPTANK", href: "/create-qryptank", color: "#00C896" },
                { label: "Shield Tokens", href: "/shield-tokens", color: "#00AACC" },
            ]}
        />
    );
}

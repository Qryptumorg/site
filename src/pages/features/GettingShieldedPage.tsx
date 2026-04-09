import FeatureBentoPage from "../FeatureBentoPage";

export default function GettingShieldedPage() {
    return (
        <FeatureBentoPage
            pageTitle="Getting Shielded"
            badge="Quick Start"
            heroTitle="Connect, Deploy,"
            heroHighlight="Shield in 3 Steps"
            heroSubtitle="From a fresh wallet to a fully operational Qrypt-Safe with shielded tokens in under 5 minutes. No technical knowledge required."
            primaryColor="#06b6d4"
            secondaryColor="#10b981"
            heroButtons={[
                { label: "Start Now", href: "/app", primary: true },
                { label: "View Guide", href: "/docs/introduction/overview" },
            ]}
            stats={[
                { value: "3", label: "Steps to get shielded", note: "Connect, deploy, shield" },
                { value: "5 min", label: "Total setup time", note: "Including deployment" },
                { value: "~$1.65", label: "Total cost", note: "Deploy + first shield" },
                { value: "Forever", label: "Your vault persists", note: "Permanent on Ethereum L1" },
            ]}
            sectionBadge="The Three Steps"
            sectionColor="#06b6d4"
            sectionHeading="From Zero to Shielded"
            sectionBody="Three on-chain actions and you have a fully operational personal vault protecting your ERC-20 assets on Ethereum L1."
            cards={[
                {
                    img: "/images/getting-connect.png",
                    color: "#06b6d4",
                    title: "Connect Your Wallet",
                    body: "Use MetaMask or any WalletConnect-compatible wallet. Your wallet address becomes the permanent owner of your Qrypt-Safe. No account creation required.",
                    link: { text: "Supported wallets", href: "/docs/introduction/overview" },
                },
                {
                    img: "/images/getting-deploy.png",
                    color: "#7c3aed",
                    title: "Deploy Your Qrypt-Safe",
                    body: "One transaction deploys your PersonalVault contract via ShieldFactory. Choose your 6-character vault proof. Cost: ~$1.20 at 0.5 gwei.",
                },
                {
                    img: "/images/getting-shield.png",
                    color: "#10b981",
                    title: "Shield Your First Token",
                    body: "Approve the token spend, enter your vault proof, call shield(). Your ERC-20 enters the vault and qTokens appear in your wallet instantly.",
                },
                {
                    img: "/images/card-smart-contract.png",
                    color: "#f59e0b",
                    title: "Your Vault Is Active",
                    body: "Once shielded, your assets are protected by dual-factor security. No one, including Qryptum, can access them. Your Qrypt-Safe is permanent on Ethereum L1.",
                    link: { text: "What happens next", href: "/making-transfers" },
                },
            ]}
            steps={[
                { n: "01", color: "#06b6d4", title: "Connect Wallet", desc: "Click Connect Wallet in the app. Select MetaMask or WalletConnect. Approve the connection.", detail: "No signature required at this step. Just a connection authorization." },
                { n: "02", color: "#7c3aed", title: "Deploy Qrypt-Safe", desc: "Choose your 6-character vault proof (3 lowercase letters + 3 digits). Submit the deployment transaction.", detail: "ShieldFactory.deployVault(passwordHash): gas: ~150,000 units." },
                { n: "03", color: "#10b981", title: "Approve Token", desc: "Select the ERC-20 you want to shield. Click Approve to allow your Qrypt-Safe to pull funds.", detail: "token.approve(vaultAddress, amount): standard ERC-20 approval." },
                { n: "04", color: "#f59e0b", title: "Shield and Receive qTokens", desc: "Enter your vault proof, set the amount, submit. qTokens arrive in your wallet in the same block.", detail: "personalVault.shield(tokenAddress, amount, vaultProof)" },
            ]}
            cta={{
                title: "Ready to Get Shielded?",
                body: "Try it on Sepolia testnet first. No real funds required.",
                button: "Open App",
                href: "/app",
            }}
            relatedLinks={[
                { label: "Shield ERC-20 Tokens", href: "/shield-erc20-tokens", color: "#06b6d4" },
                { label: "Making Transfers", href: "/making-transfers", color: "#7c3aed" },
                { label: "Vault Proof Security", href: "/vault-proof-security", color: "#10b981" },
            ]}
        />
    );
}

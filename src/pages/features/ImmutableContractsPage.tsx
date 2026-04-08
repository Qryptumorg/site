import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function ImmutableContractsPage() {
    return (
        <FeatureBentoPage
            pageTitle="Immutable Contracts"
            badge="EMERGENCY RECOVERY"
            heroTitle="Bytecode is Final."
            heroHighlight="No Upgrades Ever."
            heroSubtitle="Qryptum smart contracts are deployed without proxy patterns or upgrade mechanisms. The code running on Ethereum today is the exact code that will run forever. Nothing can change it."
            primaryColor="#8B5CF6"
            secondaryColor="#EC4899"
            heroButtons={[
                { label: "No Admin Keys", href: "/no-admin-keys", primary: false },
                { label: "Onchain Verification", href: "/onchain-verification", primary: false },
            ]}
            stats={[
                { value: "0", label: "Upgrade mechanisms", note: "No proxy, no beacon" },
                { value: "0", label: "Proxy admin keys", note: "No upgrade role exists" },
                { value: "Bytecode final", label: "On deployment", note: "Immutable from block 1" },
                { value: "Ethereum L1", label: "Enforcement", note: "Protocol-level guarantee" },
            ]}
            sectionBadge="IMMUTABILITY DESIGN"
            sectionHeading="Why No Upgrade Mechanism Is a Feature"
            sectionBody="Upgradeable proxy contracts introduce a trust assumption: whoever holds the proxy admin key can push any new implementation. Qryptum removes this attack surface entirely by deploying non-upgradeable contracts with no proxy pattern."
            sectionColor="#8B5CF6"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&auto=format",
                    color: "#8B5CF6",
                    title: "No Proxy Pattern",
                    body: "ShieldFactory and PersonalQRYPTANK are not deployed behind a transparent proxy, UUPS proxy, or beacon proxy. The address you interact with is the implementation address.",
                    link: { text: "ShieldFactory", href: "/shield-factory" },
                },
                {
                    img: "https://images.unsplash.com/photo-1503551723145-6c040742065b?w=800&auto=format",
                    color: "#EC4899",
                    title: "No Upgrade Admin Role",
                    body: "There is no address in the system with permission to push a new contract implementation. Once deployed, the contract logic is sealed by Ethereum itself.",
                    link: { text: "No admin keys", href: "/no-admin-keys" },
                },
                {
                    img: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&auto=format",
                    color: "#7C3AED",
                    title: "Verification on Etherscan",
                    body: "The source code is verified on Etherscan for all supported networks. Anyone can inspect the contract and confirm the absence of upgrade logic.",
                    link: { text: "ABI and addresses", href: "/abi-and-addresses" },
                },
                {
                    img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format",
                    color: "#DB2777",
                    title: "Future-Proof Security",
                    body: "Immutability means the security properties of your QRYPTANK cannot be degraded by a future protocol update. What you audit today is what protects you forever.",
                    link: { text: "Vault proof security", href: "/vault-proof-security" },
                },
            ]}
            relatedLinks={[
                { label: "No Admin Keys", href: "/no-admin-keys", color: "#8B5CF6" },
                { label: "Onchain Verification", href: "/onchain-verification", color: "#EC4899" },
                { label: "Vault Proof Security", href: "/vault-proof-security", color: "#7C3AED" },
            ]}
        />
    );
}

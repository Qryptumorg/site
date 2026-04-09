import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function CreateQryptSafeGuidePage() {
    return (
        <FeatureBentoPage
            pageTitle="Create Qrypt-Safe"
            badge="HOW IT WORKS"
            heroTitle="Deploy Your"
            heroHighlight="Personal Vault"
            heroSubtitle="One transaction deploys your Qrypt-Safe directly on Ethereum L1 via the ShieldFactory. It is permanently bound to your wallet address: no one else can deploy one for you."
            primaryColor="#00D4FF"
            secondaryColor="#7C3AED"
            heroButtons={[
                { label: "Deploy Now", href: "/app", primary: true },
                { label: "ShieldFactory", href: "/shield-factory" },
            ]}
            stats={[
                { value: "1 tx", label: "To deploy", note: "Single on-chain call" },
                { value: "~$1.20", label: "Deployment cost", note: "At 0.5 gwei avg" },
                { value: "Permanent", label: "Your vault", note: "Exists forever on L1" },
                { value: "1 per wallet", label: "One Qrypt-Safe", note: "Address-bound contract" },
            ]}
            sectionBadge="DEPLOYMENT PROCESS"
            sectionHeading="How ShieldFactory Deploys Your Qrypt-Safe"
            sectionBody="The ShieldFactory uses EIP-1167 minimal proxy cloning to deploy a gas-efficient PersonalQrypt-Safe contract tied to your wallet address. The factory records the mapping permanently on-chain."
            sectionColor="#00D4FF"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format",
                    color: "#00D4FF",
                    title: "EIP-1167 Clone Deployment",
                    body: "ShieldFactory deploys a minimal proxy clone of the PersonalQrypt-Safe implementation. This reduces deployment gas significantly compared to a full contract deploy.",
                    link: { text: "ShieldFactory contract", href: "/shield-factory" },
                },
                {
                    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format",
                    color: "#7C3AED",
                    title: "Wallet-Bound Address",
                    body: "The factory stores a mapping from your wallet address to your Qrypt-Safe address. No other wallet can claim your Qrypt-Safe or deploy a second one.",
                },
                {
                    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format",
                    color: "#0099BB",
                    title: "Vault Proof Set on Deploy",
                    body: "During deployment, you set your vault proof hash. This keccak256 hash is the only key that authorizes shielding, transferring, and unshielding from your Qrypt-Safe.",
                    link: { text: "Vault proof hashing", href: "/vault-proof-hashing" },
                },
                {
                    img: "https://images.unsplash.com/photo-1509869175650-a1d97972541a?w=800&auto=format",
                    color: "#5B21B6",
                    title: "Immediately Operational",
                    body: "Your Qrypt-Safe is ready to accept tokens the moment the deployment transaction confirms. No initialization step, no waiting period.",
                },
            ]}
            techNote={{
                label: "Contract: deploy via ShieldFactory",
                lines: [
                    "function deployVault(bytes32 vaultProofHash) external returns (address vault) {",
                    "    require(vaults[msg.sender] == address(0), 'already deployed');",
                    "    vault = Clones.clone(implementation);",
                    "    PersonalQrypt-Safe(vault).initialize(msg.sender, vaultProofHash);",
                    "    vaults[msg.sender] = vault;",
                    "}",
                ],
            }}
            relatedLinks={[
                { label: "Connect Wallet", href: "/connect-wallet", color: "#00D4FF" },
                { label: "Shield Tokens", href: "/shield-tokens", color: "#7C3AED" },
                { label: "Create Personal Qrypt-Safe", href: "/create-personal-qrypt-safe", color: "#0099BB" },
            ]}
        />
    );
}

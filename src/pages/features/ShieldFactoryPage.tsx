import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function ShieldFactoryPage() {
    return (
        <FeatureBentoPage
            pageTitle="ShieldFactory"
            badge="SMART CONTRACTS"
            heroTitle="Factory Contract"
            heroHighlight="Deploys Your Vault"
            heroSubtitle="ShieldFactory uses EIP-1167 minimal proxy cloning to deploy a gas-efficient PersonalQRYPTANK contract for every wallet that calls deployVault(). One per wallet, stored permanently on-chain."
            primaryColor="#00D4FF"
            secondaryColor="#6366F1"
            heroButtons={[
                { label: "PersonalQRYPTANK", href: "/personal-qryptank", primary: false },
                { label: "ABI and Addresses", href: "/abi-and-addresses", primary: false },
            ]}
            stats={[
                { value: "EIP-1167", label: "Clone pattern", note: "Minimal proxy standard" },
                { value: "1 per wallet", label: "QRYPTANK limit", note: "Factory enforces this" },
                { value: "~$1.20", label: "Deployment cost", note: "Clone is cheaper than full deploy" },
                { value: "On-chain map", label: "Wallet to vault", note: "Permanent address registry" },
            ]}
            sectionBadge="CONTRACT ARCHITECTURE"
            sectionHeading="How ShieldFactory Works"
            sectionBody="ShieldFactory stores a reference PersonalQRYPTANK implementation. When deployVault() is called, it creates a minimal proxy clone of that implementation, initializes it with the caller's address and vault proof hash, and records the mapping."
            sectionColor="#00D4FF"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1509869175650-a1d97972541a?w=800&auto=format",
                    color: "#00D4FF",
                    title: "EIP-1167 Minimal Proxy",
                    body: "Clone contracts are ~45-byte delegatecall proxies pointing to the implementation address. They cost a fraction of a full deployment but have identical function signatures.",
                    link: { text: "PersonalQRYPTANK contract", href: "/personal-qryptank" },
                },
                {
                    img: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&auto=format",
                    color: "#6366F1",
                    title: "One QRYPTANK Per Wallet",
                    body: "deployVault() requires that vaults[msg.sender] == address(0). A second call from the same wallet reverts. Each wallet gets exactly one QRYPTANK.",
                },
                {
                    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format",
                    color: "#0099BB",
                    title: "Wallet-to-Vault Registry",
                    body: "The mapping vaults[address] => address is publicly readable. Any contract or user can look up anyone's QRYPTANK address by wallet address.",
                },
                {
                    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format",
                    color: "#4338CA",
                    title: "Vault Proof Hash on Init",
                    body: "The clone is initialized with the caller's wallet address and vault proof hash in the same transaction. No separate initialization call is required.",
                    link: { text: "Vault proof hashing", href: "/vault-proof-hashing" },
                },
            ]}
            techNote={{
                label: "Contract: ShieldFactory.deployVault()",
                lines: [
                    "address public implementation;",
                    "mapping(address => address) public vaults;",
                    "",
                    "function deployVault(bytes32 vaultProofHash) external returns (address vault) {",
                    "    require(vaults[msg.sender] == address(0), 'already deployed');",
                    "    vault = Clones.clone(implementation);",
                    "    IPersonalQRYPTANK(vault).initialize(msg.sender, vaultProofHash);",
                    "    vaults[msg.sender] = vault;",
                    "}",
                ],
            }}
            relatedLinks={[
                { label: "PersonalQRYPTANK", href: "/personal-qryptank", color: "#00D4FF" },
                { label: "ABI and Addresses", href: "/abi-and-addresses", color: "#6366F1" },
                { label: "Create QRYPTANK", href: "/create-qryptank", color: "#0099BB" },
            ]}
        />
    );
}

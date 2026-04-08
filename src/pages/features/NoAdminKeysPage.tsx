import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function NoAdminKeysPage() {
    return (
        <FeatureBentoPage
            pageTitle="No Admin Keys"
            badge="EMERGENCY RECOVERY"
            heroTitle="No Multisig,"
            heroHighlight="No Admin Override"
            heroSubtitle="No key holder, multisig, DAO, or protocol team can access your QRYPTANK. This is enforced at the bytecode level: there is no admin function in the contract to call."
            primaryColor="#22C55E"
            secondaryColor="#10B981"
            heroButtons={[
                { label: "Immutable Contracts", href: "/immutable-contracts", primary: false },
                { label: "Vault Proof Security", href: "/vault-proof-security", primary: false },
            ]}
            stats={[
                { value: "0", label: "Admin keys", note: "No privileged role in contract" },
                { value: "0", label: "Multisig signers", note: "No governance control" },
                { value: "0", label: "Upgrade paths", note: "No proxy, no admin call" },
                { value: "Bytecode", label: "Enforcement level", note: "Not just a policy claim" },
            ]}
            sectionBadge="NON-CUSTODIAL DESIGN"
            sectionHeading="How the Contract Enforces Non-Custody"
            sectionBody="The PersonalQRYPTANK contract contains no onlyOwner admin function with privileged access to user funds. The only address that can trigger shield, transfer, or unshield is the wallet that deployed the vault."
            sectionColor="#22C55E"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1509869175650-a1d97972541a?w=800&auto=format",
                    color: "#22C55E",
                    title: "No Admin Function",
                    body: "The contract bytecode contains no function with a privileged role that could drain user funds, pause operations, or alter vault proof hashes.",
                    link: { text: "Immutable contracts", href: "/immutable-contracts" },
                },
                {
                    img: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&auto=format",
                    color: "#10B981",
                    title: "No Proxy Admin",
                    body: "There is no upgrade proxy and no proxy admin key. The contract at deployment is the final contract. Qryptum cannot push a new implementation that could include admin access.",
                    link: { text: "Immutable contracts", href: "/immutable-contracts" },
                },
                {
                    img: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&auto=format",
                    color: "#16A34A",
                    title: "Wallet Owner is the Only Authority",
                    body: "Every function on PersonalQRYPTANK that moves tokens requires msg.sender to be the owner wallet and the vault proof to be valid. No override path exists.",
                },
                {
                    img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format",
                    color: "#059669",
                    title: "Verifiable On Etherscan",
                    body: "Anyone can read the deployed contract bytecode on Etherscan and verify the absence of admin functions. This is a technical guarantee, not a promise.",
                    link: { text: "ABI and addresses", href: "/abi-and-addresses" },
                },
            ]}
            relatedLinks={[
                { label: "Immutable Contracts", href: "/immutable-contracts", color: "#22C55E" },
                { label: "Vault Proof Security", href: "/vault-proof-security", color: "#10B981" },
                { label: "No Server Storage", href: "/no-server-storage", color: "#16A34A" },
            ]}
        />
    );
}

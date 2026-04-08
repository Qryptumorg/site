import FeatureBentoPage from "../FeatureBentoPage";

export default function TransferShieldPage() {
    return (
        <FeatureBentoPage
            pageTitle="Transfer Shield"
            badge="Shield Protocol"
            heroTitle="qTokens Cannot"
            heroHighlight="Leave Without You"
            heroSubtitle="The Transfer Shield is a bytecode-level restriction built into every qToken contract. Direct wallet-to-wallet transfers are permanently disabled. Movement requires your vault proof."
            primaryColor="#f59e0b"
            secondaryColor="#7c3aed"
            heroButtons={[
                { label: "qToken System", href: "/qtoken-system" },
            ]}
            stats={[
                { value: "Disabled", label: "Direct transfers", note: "transfer() always reverts" },
                { value: "Bytecode", label: "Enforcement level", note: "Not just UI restriction" },
                { value: "Vault only", label: "Movement path", note: "Must go through QRYPTANK" },
                { value: "Zero", label: "Admin override", note: "No emergency bypass exists" },
            ]}
            sectionBadge="How Transfer Shield Works"
            sectionColor="#f59e0b"
            sectionHeading="Unauthorized Movement Is Impossible"
            sectionBody="Standard ERC-20 tokens can be sent by anyone who holds them. qTokens cannot. The contract overrides the transfer function at the bytecode level and rejects all calls that do not originate from the QRYPTANK vault."
            cards={[
                {
                    img: "/images/card-erc20-shield.png",
                    color: "#f59e0b",
                    title: "transfer() Always Reverts",
                    body: "Calling token.transfer() or token.transferFrom() from any address other than the PersonalVault contract triggers an immediate revert. No amount. No destination. Just a revert.",
                    link: { text: "qToken architecture", href: "/qtoken-system" },
                },
                {
                    img: "/images/shield-lock.png",
                    color: "#7c3aed",
                    title: "Only Vault Can Move Tokens",
                    body: "The qToken contract stores the vault address at deployment. The onlyVault modifier checks msg.sender on every mint, burn, and transfer. It cannot be changed after deployment.",
                },
                {
                    img: "/images/sec-onchain.png",
                    color: "#06b6d4",
                    title: "Theft Requires Your Vault Proof",
                    body: "Even if an attacker gains access to your wallet private key, they still cannot drain your shielded assets without knowing your vault proof. The second factor is never stored anywhere.",
                },
                {
                    img: "/images/card-smart-contract.png",
                    color: "#10b981",
                    title: "Immutable After Deployment",
                    body: "The transfer restriction is part of the deployed bytecode. There is no owner function, no proxy upgrade path, and no admin key that can disable it after deployment.",
                    link: { text: "Vault proof security", href: "/vault-proof-security" },
                },
            ]}
            techNote={{
                label: "Transfer block implementation",
                lines: [
                    "// qToken ERC-20 override",
                    "function transfer(address to, uint256 amount)",
                    "    public override returns (bool) {",
                    "    require(",
                    "        msg.sender == address(vault),",
                    "        'TransferShield: only vault can transfer'",
                    "    );",
                    "    return super.transfer(to, amount);",
                    "}",
                ],
            }}
            relatedLinks={[
                { label: "qToken System", href: "/qtoken-system", color: "#f59e0b" },
                { label: "Vault Proof Security", href: "/vault-proof-security", color: "#7c3aed" },
                { label: "Create QRYPTANK", href: "/create-personal-qryptank", color: "#06b6d4" },
            ]}
        />
    );
}

import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function ShieldTokenContractPage() {
    return (
        <FeatureBentoPage
            pageTitle="ShieldToken (qToken)"
            badge="SMART CONTRACTS"
            heroTitle="qToken ERC-20,"
            heroHighlight="Transfers Disabled"
            heroSubtitle="ShieldToken is an ERC-20 contract where transfer() and transferFrom() permanently revert. Movement is only possible through the PersonalQrypt-Safe contract using a valid vault proof."
            primaryColor="#EC4899"
            secondaryColor="#8B5CF6"
            heroButtons={[
                { label: "Transfer Shield", href: "/transfer-shield", primary: false },
                { label: "qToken System", href: "/qtoken-system", primary: false },
            ]}
            stats={[
                { value: "ERC-20", label: "Token standard", note: "Full interface implemented" },
                { value: "Disabled", label: "Direct transfers", note: "transfer() always reverts" },
                { value: "1:1", label: "Peg to original", note: "Backed by locked ERC-20" },
                { value: "Qrypt-Safe only", label: "Movement path", note: "Via vault proof only" },
            ]}
            sectionBadge="CONTRACT DESIGN"
            sectionHeading="Why qTokens Cannot Be Transferred Directly"
            sectionBody="ShieldToken overrides the standard ERC-20 transfer() and transferFrom() to permanently revert. This is a bytecode-level restriction: it cannot be bypassed by any UI or external contract. Movement requires a vault proof submitted through PersonalQrypt-Safe."
            sectionColor="#EC4899"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format",
                    color: "#EC4899",
                    title: "Overridden transfer()",
                    body: "ShieldToken overrides ERC-20 transfer() to always revert with 'use Qrypt-Safe'. No wallet-to-wallet send is possible through any path.",
                    link: { text: "Transfer shield", href: "/transfer-shield" },
                },
                {
                    img: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&auto=format",
                    color: "#8B5CF6",
                    title: "Only Qrypt-Safe Can Move Tokens",
                    body: "The ShieldToken contract whitelists the associated PersonalQrypt-Safe address. Only calls from this address are permitted to call the internal _transfer function.",
                },
                {
                    img: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&auto=format",
                    color: "#DB2777",
                    title: "Mint and Burn Interface",
                    body: "PersonalQrypt-Safe calls mint() on shield and burnFrom() on unshield. Both functions are restricted to the whitelisted Qrypt-Safe address.",
                    link: { text: "1:1 backing", href: "/one-to-one-backing" },
                },
                {
                    img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format",
                    color: "#6D28D9",
                    title: "Visible in MetaMask",
                    body: "Despite transfer restrictions, qTokens appear in MetaMask and any ERC-20 wallet viewer because they implement the full balanceOf() and decimals() interface.",
                    link: { text: "qToken system", href: "/qtoken-system" },
                },
            ]}
            techNote={{
                label: "Contract: ShieldToken transfer override",
                lines: [
                    "contract ShieldToken is ERC20 {",
                    "    address public immutable vault;",
                    "    constructor(address _vault) { vault = _vault; }",
                    "",
                    "    function transfer(address, uint256) public override returns (bool) {",
                    "        revert('use Qrypt-Safe to transfer');",
                    "    }",
                    "    // transferFrom also overridden to revert",
                    "}",
                ],
            }}
            relatedLinks={[
                { label: "Transfer Shield", href: "/transfer-shield", color: "#EC4899" },
                { label: "qToken System", href: "/qtoken-system", color: "#8B5CF6" },
                { label: "1:1 Backing", href: "/one-to-one-backing", color: "#DB2777" },
            ]}
        />
    );
}

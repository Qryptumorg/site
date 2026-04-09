import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function OneToOneBackingPage() {
    return (
        <FeatureBentoPage
            pageTitle="1:1 Backing"
            badge="QTOKEN SYSTEM"
            heroTitle="Every qToken"
            heroHighlight="Fully Backed Always"
            heroSubtitle="No fractional reserve. Every qToken minted is backed 1:1 by the original ERC-20 asset locked inside your Qrypt-Safe. No exceptions, no partial collateral."
            primaryColor="#7C3AED"
            secondaryColor="#4F46E5"
            heroButtons={[
                { label: "qToken System", href: "/qtoken-system", primary: true },
                { label: "Shield Tokens", href: "/shield-erc20-tokens" },
            ]}
            stats={[
                { value: "1:1", label: "Peg ratio", note: "No fractional reserve" },
                { value: "100%", label: "Collateralized", note: "Always, by design" },
                { value: "Atomic", label: "Mint and lock", note: "Same transaction" },
                { value: "Verified", label: "By contract", note: "Not by the UI" },
            ]}
            sectionBadge="BACKING MECHANISM"
            sectionHeading="Why qTokens Cannot Be Undercollateralized"
            sectionBody="The smart contract mints exactly one qToken unit per one ERC-20 unit deposited. The mint and the lock happen in the same transaction. There is no path to mint without locking."
            sectionColor="#7C3AED"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&auto=format",
                    color: "#7C3AED",
                    title: "Atomic Mint and Lock",
                    body: "shield() deposits the ERC-20 token and mints the corresponding qToken in one atomic call. If either step fails, the entire transaction reverts.",
                    link: { text: "See shield()", href: "/shield-tokens" },
                },
                {
                    img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format",
                    color: "#4F46E5",
                    title: "No Surplus Minting",
                    body: "The contract tracks exact balances per token per Qrypt-Safe. It is not possible to mint qTokens above the deposited amount under any condition.",
                },
                {
                    img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format",
                    color: "#8B5CF6",
                    title: "Collateral Always On-Chain",
                    body: "The original ERC-20 tokens are held inside your PersonalQrypt-Safe contract on Ethereum L1. No off-chain custodian holds your collateral.",
                },
                {
                    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format",
                    color: "#6D28D9",
                    title: "Burn Symmetry",
                    body: "On unshield, exactly one qToken is burned per one ERC-20 unit returned. The contract enforces this symmetry: no partial burns, no remainder.",
                    link: { text: "Burn on Unshield", href: "/burn-on-unshield" },
                },
            ]}
            techNote={{
                label: "Contract: backing verification",
                lines: [
                    "// shield() atomically locks and mints",
                    "function shield(address token, uint256 amount) external {",
                    "    IERC20(token).transferFrom(msg.sender, address(this), amount);",
                    "    IShieldToken(qTokenOf[token]).mint(msg.sender, amount);",
                    "}",
                    "// 1:1 enforced: amount locked == amount minted",
                ],
            }}
            relatedLinks={[
                { label: "qToken System", href: "/qtoken-system", color: "#7C3AED" },
                { label: "Shield ERC-20 Tokens", href: "/shield-erc20-tokens", color: "#4F46E5" },
                { label: "Burn on Unshield", href: "/burn-on-unshield", color: "#8B5CF6" },
            ]}
        />
    );
}

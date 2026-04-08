import FeatureBentoPage from "../FeatureBentoPage";

export default function QTokenSystemPage() {
    return (
        <FeatureBentoPage
            pageTitle="qToken System"
            badge="qToken System"
            heroTitle="Shielded Tokens,"
            heroHighlight="Visible in MetaMask"
            heroSubtitle="Every shielded asset gets a corresponding qToken. It appears in your wallet, tracks your position 1:1, and is burned automatically when you exit."
            primaryColor="#7c3aed"
            secondaryColor="#06b6d4"
            heroButtons={[
                { label: "Shield a Token", href: "/app", primary: true },
            ]}
            stats={[
                { value: "q prefix", label: "Naming convention", note: "qETH, qUSDT, qUSDC..." },
                { value: "1:1", label: "Peg ratio", note: "Always fully backed" },
                { value: "Non-transferable", label: "Between wallets", note: "Only movable via vault" },
                { value: "Auto-burned", label: "On unshield", note: "Same tx as token return" },
            ]}
            sectionBadge="Token Architecture"
            sectionColor="#7c3aed"
            sectionHeading="How qTokens Track Your Position"
            sectionBody="qTokens are ERC-20 tokens with a critical restriction: direct wallet-to-wallet transfers are disabled. They can only move through your QRYPTANK, making theft impossible without your vault proof."
            cards={[
                {
                    img: "/images/qtoken-mint.png",
                    color: "#7c3aed",
                    title: "Minted on Shield",
                    body: "The moment you shield an ERC-20, the QRYPTANK calls mint() on the corresponding qToken contract. You receive the exact same amount in your wallet.",
                    link: { text: "Shield flow", href: "/shield-erc20-tokens" },
                },
                {
                    img: "/images/qtoken-metamask.png",
                    color: "#06b6d4",
                    title: "Visible in MetaMask",
                    body: "qTokens are standard ERC-20 tokens. They appear in MetaMask and any wallet that shows token balances. Add the contract address to see them.",
                },
                {
                    img: "/images/qtoken-nontransfer.png",
                    color: "#10b981",
                    title: "Transfer Locked at Bytecode",
                    body: "The qToken contract overrides ERC-20 transfer() and transferFrom(). Any call from outside the QRYPTANK reverts. Your balance cannot be moved by anyone else.",
                },
                {
                    img: "/images/qtoken-burn.png",
                    color: "#f59e0b",
                    title: "Burned on Unshield",
                    body: "When you call unshield(), the QRYPTANK burns your qTokens and releases the original ERC-20 back to your wallet. Mint and burn happen in the same atomic transaction.",
                    link: { text: "Exiting your QRYPTANK", href: "/exiting-qryptank" },
                },
            ]}
            techNote={{
                label: "qToken contract restrictions",
                lines: [
                    "// Transfer blocked for external callers",
                    "function transfer(address to, uint256 amount) public override returns (bool) {",
                    "    require(msg.sender == vault, 'Only vault can transfer');",
                    "    return super.transfer(to, amount);",
                    "}",
                    "",
                    "// Only QRYPTANK can mint or burn",
                    "modifier onlyVault() { require(msg.sender == vault); _; }",
                ],
            }}
            relatedLinks={[
                { label: "Shield ERC-20 Tokens", href: "/shield-erc20-tokens", color: "#06b6d4" },
                { label: "Transfer Shield", href: "/transfer-shield", color: "#7c3aed" },
                { label: "Exiting QRYPTANK", href: "/exiting-qryptank", color: "#10b981" },
            ]}
        />
    );
}

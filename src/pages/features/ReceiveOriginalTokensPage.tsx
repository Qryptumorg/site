import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function ReceiveOriginalTokensPage() {
    return (
        <FeatureBentoPage
            pageTitle="Receive Original Tokens"
            badge="EXITING"
            heroTitle="Tokens Return"
            heroHighlight="to Your Wallet"
            heroSubtitle="The same transaction that burns your qTokens transfers your original ERC-20 tokens directly to your wallet address. There is no manual claim step, no delay, no custodian."
            primaryColor="#22C55E"
            secondaryColor="#10B981"
            heroButtons={[
                { label: "Burn qTokens", href: "/burn-qtokens", primary: false },
                { label: "Exiting Qrypt-Safe", href: "/exiting-qrypt-safe", primary: false },
            ]}
            stats={[
                { value: "Same tx", label: "As burn", note: "No separate claim needed" },
                { value: "No delay", label: "Waiting period", note: "Instant within block" },
                { value: "Original asset", label: "Returned", note: "Not a wrapped version" },
                { value: "Wallet direct", label: "Destination", note: "Your address only" },
            ]}
            sectionBadge="TOKEN RETURN"
            sectionHeading="Direct to Your Wallet, No Intermediary"
            sectionBody="unshield() transfers the original ERC-20 tokens from your Qrypt-Safe contract directly to msg.sender: your wallet address. No escrow, no delay, no third-party step."
            sectionColor="#22C55E"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&auto=format",
                    color: "#22C55E",
                    title: "Atomic Return",
                    body: "The ERC-20 transfer out happens in the same atomic transaction as the qToken burn. There is no intermediate state where tokens are in transit.",
                    link: { text: "Burn on unshield", href: "/burn-on-unshield" },
                },
                {
                    img: "https://images.unsplash.com/photo-1503551723145-6c040742065b?w=800&auto=format",
                    color: "#10B981",
                    title: "No Custody Gap",
                    body: "The Qrypt-Safe holds the tokens until unshield() is called. The moment unshield() runs, the tokens move directly to your wallet. No intermediate custodian.",
                },
                {
                    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format",
                    color: "#16A34A",
                    title: "Exact Balance Returned",
                    body: "You receive exactly the amount you specified in the unshield() call: no fee deducted by the protocol, no spread. The 1:1 peg is maintained to the unit.",
                    link: { text: "1:1 backing", href: "/one-to-one-backing" },
                },
                {
                    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format",
                    color: "#059669",
                    title: "Your Address Only",
                    body: "Tokens can only be returned to the wallet address that owns the Qrypt-Safe (msg.sender). There is no mechanism to redirect the return to another address.",
                },
            ]}
            relatedLinks={[
                { label: "Burn qTokens", href: "/burn-qtokens", color: "#22C55E" },
                { label: "Exiting Qrypt-Safe", href: "/exiting-qrypt-safe", color: "#10B981" },
                { label: "1:1 Backing", href: "/one-to-one-backing", color: "#16A34A" },
            ]}
        />
    );
}

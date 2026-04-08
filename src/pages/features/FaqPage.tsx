import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function FaqPage() {
    return (
        <FeatureBentoPage
            pageTitle="FAQ"
            badge="DOCS"
            heroTitle="Common Questions"
            heroHighlight="Answered"
            heroSubtitle="Answers to frequently asked questions about QRYPTANKs, vault proofs, qTokens, gas costs, and how to use Qryptum safely and effectively on Ethereum L1."
            primaryColor="#0EA5E9"
            secondaryColor="#6366F1"
            heroButtons={[
                { label: "Quick Start Guide", href: "/quick-start-guide", primary: true },
            ]}
            stats={[
                { value: "Non-custodial", label: "Protocol type", note: "You keep your keys" },
                { value: "0", label: "Qryptum servers", note: "Storing your vault proof" },
                { value: "~$1.65", label: "Total setup cost", note: "Deploy + first shield" },
                { value: "Ethereum L1", label: "Where it runs", note: "No L2, no sidechain" },
            ]}
            sectionBadge="FREQUENTLY ASKED"
            sectionHeading="What People Ask Most"
            sectionBody="These are the most common questions from new and experienced users. If your question is not answered here, check the related pages below or read the contract source code on Etherscan."
            sectionColor="#0EA5E9"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1509869175650-a1d97972541a?w=800&auto=format",
                    color: "#0EA5E9",
                    title: "What if I forget my vault proof?",
                    body: "If you lose your vault proof and your QRYPTANK has been inactive for 180 days, you can use the emergency withdrawal function to recover your tokens without the proof.",
                    link: { text: "180-day inactivity rule", href: "/180-day-inactivity" },
                },
                {
                    img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format",
                    color: "#6366F1",
                    title: "Can Qryptum access my tokens?",
                    body: "No. The PersonalQRYPTANK contract has no admin function. Qryptum cannot freeze, pause, redirect, or withdraw your tokens under any circumstance.",
                    link: { text: "No admin keys", href: "/no-admin-keys" },
                },
                {
                    img: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&auto=format",
                    color: "#0284C7",
                    title: "Why do I need two transactions to transfer?",
                    body: "The commit-reveal scheme requires two transactions to prevent MEV front-running. The commit hides the transfer details. The reveal executes it after the commitment is anchored.",
                    link: { text: "Commit-reveal scheme", href: "/commit-reveal-scheme" },
                },
                {
                    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format",
                    color: "#4338CA",
                    title: "What tokens can I shield?",
                    body: "Any standard ERC-20 token. ETH must be wrapped as WETH first. Tokens with non-standard transfer logic (like fee-on-transfer) should be tested on Sepolia before mainnet use.",
                    link: { text: "Supported tokens", href: "/supported-tokens" },
                },
            ]}
            relatedLinks={[
                { label: "Quick Start Guide", href: "/quick-start-guide", color: "#0EA5E9" },
                { label: "Supported Tokens", href: "/supported-tokens", color: "#6366F1" },
                { label: "Getting Shielded", href: "/getting-shielded", color: "#0284C7" },
            ]}
        />
    );
}

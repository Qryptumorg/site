import FeatureBentoPage from "@/pages/FeatureBentoPage";
import { useLanguage } from "@/lib/LanguageContext";

const _B = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function ShieldErc20Page() {
    const { t } = useLanguage();
    const p = t.featurePages.shieldErc20;
    return (
        <FeatureBentoPage
            pageTitle={p.pageTitle}
            badge={p.badge}
            heroTitle={p.heroTitle}
            heroHighlight={p.heroHighlight}
            heroSubtitle={p.heroSubtitle}
            primaryColor="#06b6d4"
            secondaryColor="#7c3aed"
            heroImg="/images/qryptum-feat-shield-tokens.jpg"
            heroButtons={[
                { label: p.heroButtons[0].label, href: "https://qryptum.eth.limo/app", primary: true },
                { label: p.heroButtons[1].label, href: "https://qryptumorg.github.io/docs/introduction/overview" },
            ]}
            stats={[
                { value: "Any ERC-20", label: p.stats[0].label, note: p.stats[0].note },
                { value: "1 tx", label: p.stats[1].label, note: p.stats[1].note },
                { value: "1:1", label: p.stats[2].label, note: p.stats[2].note },
                { value: "Instant", label: p.stats[3].label, note: p.stats[3].note },
            ]}
            sectionBadge={p.sectionBadge}
            sectionColor="#06b6d4"
            sectionHeading={p.sectionHeading}
            sectionBody={p.sectionBody}
            cards={[
                {
                    img: "/images/qryptum-shield-erc20-deposit.jpg",
                    color: "#06b6d4",
                    title: p.cards[0].title,
                    body: p.cards[0].body,
                    link: { text: p.cards[0].linkText!, href: "https://qryptumorg.github.io/docs/introduction/overview" },
                },
                {
                    img: "/images/qryptum-shield-erc20-instant.jpg",
                    color: "#7c3aed",
                    title: p.cards[1].title,
                    body: p.cards[1].body,
                },
                {
                    img: "/images/qryptum-shield-erc20-tokens.jpg",
                    color: "#10b981",
                    title: p.cards[2].title,
                    body: p.cards[2].body,
                },
                {
                    img: "/images/qryptum-getting-shield.jpg",
                    color: "#f59e0b",
                    title: p.cards[3].title,
                    body: p.cards[3].body,
                    link: { text: p.cards[3].linkText!, href: _B + "/qtoken-system" },
                },
            ]}
            techNote={{
                label: p.techNoteLabel!,
                lines: [
                    "// Step 1: Standard ERC-20 approval",
                    "token.approve(vaultAddress, amount)",
                    "",
                    "// Step 2: Shield with vault proof",
                    "personalVault.shield(tokenAddress, amount, vaultProof)",
                    "",
                    "// Emitted on success",
                    "event Shielded(address indexed token, uint256 amount, address indexed owner)",
                ],
            }}
            relatedLinks={[
                { label: p.relatedLinks[0].label, href: _B + "/qtoken-system", color: "#7c3aed" },
                { label: p.relatedLinks[1].label, href: _B + "/vault-proof-security", color: "#06b6d4" },
                { label: p.relatedLinks[2].label, href: _B + "/exiting-qrypt-safe", color: "#10b981" },
            ]}
        />
    );
}

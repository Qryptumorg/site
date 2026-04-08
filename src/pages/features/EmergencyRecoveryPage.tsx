import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function EmergencyRecoveryPage() {
    return (
        <FeatureBentoPage
            pageTitle="Emergency Recovery"
            badge="EMERGENCY"
            heroTitle="Recovery After"
            heroHighlight="180 Days Inactive"
            heroSubtitle="If your QRYPTANK has had zero activity for 180 consecutive days and vault proof access is lost, an emergency withdrawal path unlocks to let you recover your underlying assets."
            primaryColor="#EF4444"
            secondaryColor="#F97316"
            heroButtons={[
                { label: "180-Day Inactivity Rule", href: "/180-day-inactivity", primary: false },
                { label: "No Admin Keys", href: "/no-admin-keys", primary: false },
            ]}
            stats={[
                { value: "180 days", label: "Inactivity required", note: "From last on-chain action" },
                { value: "On-chain", label: "Trigger verification", note: "Timestamp checked by contract" },
                { value: "0 Admin", label: "Access needed", note: "Fully self-sovereign" },
                { value: "Full balance", label: "Recoverable", note: "All shielded tokens" },
            ]}
            sectionBadge="RECOVERY MECHANISM"
            sectionHeading="A Last Resort With No Third-Party Involvement"
            sectionBody="The emergency path is a trustless, permissionless function on the PersonalQRYPTANK contract. It checks on-chain timestamps only. No admin, no multisig, and no Qryptum team action is required to trigger it."
            sectionColor="#EF4444"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format",
                    color: "#EF4444",
                    title: "180-Day On-Chain Clock",
                    body: "The contract records a timestamp for every vault interaction. If 180 days pass without any transaction, the emergency function becomes callable.",
                    link: { text: "180-day inactivity rule", href: "/180-day-inactivity" },
                },
                {
                    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format",
                    color: "#F97316",
                    title: "No Vault Proof Required",
                    body: "The emergency withdrawal does not require the vault proof: it is specifically designed for situations where the vault proof has been lost or is inaccessible.",
                },
                {
                    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format",
                    color: "#DC2626",
                    title: "No Admin Involvement",
                    body: "Qryptum, the protocol team, or any multisig is not part of the emergency process. The wallet owner calls the function directly.",
                    link: { text: "No admin keys", href: "/no-admin-keys" },
                },
                {
                    img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format",
                    color: "#B45309",
                    title: "Full Token Retrieval",
                    body: "The emergency withdrawal returns all shielded ERC-20 tokens across all token types held by the QRYPTANK to the owner wallet address.",
                },
            ]}
            relatedLinks={[
                { label: "180-Day Inactivity Rule", href: "/180-day-inactivity", color: "#EF4444" },
                { label: "No Admin Keys", href: "/no-admin-keys", color: "#F97316" },
                { label: "Exiting QRYPTANK", href: "/exiting-qryptank", color: "#DC2626" },
            ]}
        />
    );
}

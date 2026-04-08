import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function TimeLockedRevealsPage() {
    return (
        <FeatureBentoPage
            pageTitle="Time-Locked Reveals"
            badge="PROTOCOL ARCHITECTURE"
            heroTitle="10 Minutes to"
            heroHighlight="Complete the Reveal"
            heroSubtitle="After committing, you have exactly 10 minutes to submit the reveal. Expired commitments are voided on-chain. This tight reveal window prevents timing-based attack strategies."
            primaryColor="#F59E0B"
            secondaryColor="#EF4444"
            heroButtons={[
                { label: "Commit Phase", href: "/commit-phase", primary: false },
                { label: "Nonce Protection", href: "/nonce-protection", primary: false },
            ]}
            stats={[
                { value: "10 min", label: "Reveal window", note: "Enforced by block timestamp" },
                { value: "~600", label: "Blocks to reveal", note: "At 1-second block time" },
                { value: "Void", label: "Expired commitments", note: "Automatically rejected" },
                { value: "Nonce consumed", label: "On expiry", note: "Cannot be reused" },
            ]}
            sectionBadge="TIME-LOCK DESIGN"
            sectionHeading="Why a Strict Reveal Window Improves Security"
            sectionBody="A commitment with no expiry could be revealed at any future point: potentially in a more favorable block environment for an attacker. The 10-minute window closes this. If you miss the window, the commitment is voided and the nonce consumed."
            sectionColor="#F59E0B"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format",
                    color: "#F59E0B",
                    title: "Block Timestamp Enforced",
                    body: "The contract stores block.timestamp at commitment time plus 600 seconds. The reveal transaction checks that the current timestamp is still within this window.",
                },
                {
                    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format",
                    color: "#EF4444",
                    title: "Expired Commitments Voided",
                    body: "Attempting to reveal after the window results in an immediate revert. The commitment is deleted from storage and the nonce remains consumed.",
                    link: { text: "Nonce protection", href: "/nonce-protection" },
                },
                {
                    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format",
                    color: "#D97706",
                    title: "No Attack Surface in the Gap",
                    body: "The 10-minute window is short enough that block producers cannot meaningfully manipulate timestamps to gain advantage. Block timestamp manipulation is bounded by ~15 seconds.",
                },
                {
                    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format",
                    color: "#B45309",
                    title: "Live Countdown in the UI",
                    body: "The Qryptum app shows a live countdown from the moment the commit confirms. You see exactly how much time remains to submit the reveal transaction.",
                    link: { text: "Making transfers", href: "/making-transfers" },
                },
            ]}
            techNote={{
                label: "Contract: time-lock enforcement",
                lines: [
                    "struct Commitment { bytes32 hash; uint256 expiry; }",
                    "mapping(address => Commitment) public commitments;",
                    "",
                    "// On commit: set expiry to 10 minutes from now",
                    "commitments[msg.sender] = Commitment(hash, block.timestamp + 600);",
                    "",
                    "// On reveal: check expiry",
                    "require(block.timestamp <= commitments[msg.sender].expiry, 'expired');",
                ],
            }}
            relatedLinks={[
                { label: "Commit Phase", href: "/commit-phase", color: "#F59E0B" },
                { label: "Nonce Protection", href: "/nonce-protection", color: "#EF4444" },
                { label: "Commit-Reveal Scheme", href: "/commit-reveal-scheme", color: "#D97706" },
            ]}
        />
    );
}

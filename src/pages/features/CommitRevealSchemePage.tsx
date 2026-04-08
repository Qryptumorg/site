import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function CommitRevealSchemePage() {
    return (
        <FeatureBentoPage
            pageTitle="Commit-Reveal Scheme"
            badge="PROTOCOL ARCHITECTURE"
            heroTitle="Two-Phase Transfer"
            heroHighlight="Closes the MEV Window"
            heroSubtitle="Commit first, reveal later. The two-phase design makes transfer details invisible to mempool observers until execution is already guaranteed. Front-running becomes structurally impossible."
            primaryColor="#EC4899"
            secondaryColor="#8B5CF6"
            heroButtons={[
                { label: "Commit Phase", href: "/commit-phase", primary: false },
                { label: "Reveal Phase", href: "/reveal-phase", primary: false },
            ]}
            stats={[
                { value: "2 phases", label: "Per transfer", note: "Commit then reveal" },
                { value: "0", label: "MEV window", note: "Details hidden until execution" },
                { value: "10 min", label: "Reveal deadline", note: "600 blocks on Ethereum" },
                { value: "keccak256", label: "Commitment hash", note: "256-bit commitment" },
            ]}
            sectionBadge="SCHEME DESIGN"
            sectionHeading="How Commit-Reveal Eliminates Front-Running"
            sectionBody="In a standard ERC-20 transfer, the recipient and amount are visible in the mempool before the transaction confirms. The commit-reveal scheme replaces this with a hash that reveals nothing, then confirms the execution before the details appear."
            sectionColor="#EC4899"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&auto=format",
                    color: "#EC4899",
                    title: "Phase 1: Blind Commitment",
                    body: "keccak256(vaultProof, recipient, amount, nonce) is submitted on-chain. A bot scanning the mempool sees 32 bytes of hash: nothing actionable.",
                    link: { text: "Commit phase", href: "/commit-phase" },
                },
                {
                    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format",
                    color: "#8B5CF6",
                    title: "Phase 2: Anchored Reveal",
                    body: "The reveal submits the plaintext details, but the commit is already confirmed. A front-runner who sees the reveal calldata cannot do anything useful: the transfer is already guaranteed.",
                    link: { text: "Reveal phase", href: "/reveal-phase" },
                },
                {
                    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format",
                    color: "#DB2777",
                    title: "MEV Bots See Nothing Useful",
                    body: "Between commit and reveal, the details are invisible. After reveal, the execution is already locked in. There is no window for bot intervention.",
                    link: { text: "MEV protection", href: "/mev-protection" },
                },
                {
                    img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format",
                    color: "#6D28D9",
                    title: "Nonce Makes Replay Impossible",
                    body: "Each commitment includes a unique nonce stored on-chain after use. The same commitment cannot be replayed in a later transaction.",
                    link: { text: "Nonce protection", href: "/nonce-protection" },
                },
            ]}
            techNote={{
                label: "Protocol: commit-reveal flow",
                lines: [
                    "// Phase 1: submit hash, reveal nothing",
                    "commitments[msg.sender] = keccak256(abi.encode(proof, to, amt, nonce));",
                    "",
                    "// Phase 2: reveal details, contract verifies commitment",
                    "require(keccak256(abi.encode(proof, to, amt, nonce)) == commitments[msg.sender]);",
                    "_executeTransfer(to, amt);",
                ],
            }}
            relatedLinks={[
                { label: "Commit Phase", href: "/commit-phase", color: "#EC4899" },
                { label: "Reveal Phase", href: "/reveal-phase", color: "#8B5CF6" },
                { label: "MEV Protection", href: "/mev-protection", color: "#DB2777" },
            ]}
        />
    );
}

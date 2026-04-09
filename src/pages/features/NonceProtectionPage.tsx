import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function NonceProtectionPage() {
    return (
        <FeatureBentoPage
            pageTitle="Nonce Protection"
            badge="PROTOCOL ARCHITECTURE"
            heroTitle="Each Transfer"
            heroHighlight="Gets a Unique Nonce"
            heroSubtitle="Every commitment includes a unique nonce embedded in the hash. Used nonces are permanently stored on-chain and rejected on any future submission. Replay attacks are blocked at the contract level."
            primaryColor="#7C3AED"
            secondaryColor="#6366F1"
            heroButtons={[
                { label: "Commit-Reveal Scheme", href: "/commit-reveal-scheme", primary: false },
                { label: "Time-Locked Reveals", href: "/time-locked-reveals", primary: false },
            ]}
            stats={[
                { value: "1 nonce", label: "Per commitment", note: "Unique per transfer" },
                { value: "Permanent", label: "Used nonce record", note: "Never deleted on-chain" },
                { value: "0", label: "Replay attacks possible", note: "Contract rejects all replays" },
                { value: "On-chain", label: "Nonce registry", note: "Ethereum state storage" },
            ]}
            sectionBadge="NONCE DESIGN"
            sectionHeading="How the Nonce Registry Prevents Replay Attacks"
            sectionBody="A replay attack submits a previously valid commitment again. The nonce registry prevents this: every used nonce is stored permanently in the contract state and checked on every new commitment. An already-used nonce causes an immediate revert."
            sectionColor="#7C3AED"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format",
                    color: "#7C3AED",
                    title: "Nonce in the Commitment Hash",
                    body: "The nonce is one of the four fields hashed into the commitment: keccak256(vaultProof, recipient, amount, nonce). Changing the nonce produces a completely different hash.",
                    link: { text: "Commit-reveal scheme", href: "/commit-reveal-scheme" },
                },
                {
                    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format",
                    color: "#6366F1",
                    title: "On-Chain Registry",
                    body: "Every nonce used in a successful commitment is stored in a mapping on the PersonalQrypt-Safe contract. This mapping is permanent and never cleared.",
                },
                {
                    img: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&auto=format",
                    color: "#5B21B6",
                    title: "Checked Before Every Commit",
                    body: "commitTransfer() begins by checking whether the submitted nonce is in the used registry. If it is, the transaction reverts before any state changes occur.",
                },
                {
                    img: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&auto=format",
                    color: "#4338CA",
                    title: "User Generates the Nonce",
                    body: "The nonce is generated client-side, typically as a random uint256. The app ensures uniqueness before submitting. There is no server-side nonce coordinator.",
                },
            ]}
            techNote={{
                label: "Contract: nonce registry check",
                lines: [
                    "mapping(uint256 => bool) public usedNonces;",
                    "",
                    "function commitTransfer(bytes32 commitment, uint256 nonce) external {",
                    "    require(!usedNonces[nonce], 'nonce already used');",
                    "    usedNonces[nonce] = true;",
                    "    commitments[msg.sender] = commitment;",
                    "}",
                ],
            }}
            relatedLinks={[
                { label: "Commit-Reveal Scheme", href: "/commit-reveal-scheme", color: "#7C3AED" },
                { label: "Time-Locked Reveals", href: "/time-locked-reveals", color: "#6366F1" },
                { label: "MEV Protection", href: "/mev-protection", color: "#5B21B6" },
            ]}
        />
    );
}

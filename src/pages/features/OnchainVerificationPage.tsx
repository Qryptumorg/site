import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function OnchainVerificationPage() {
    return (
        <FeatureBentoPage
            pageTitle="Onchain Verification"
            badge="CRYPTOGRAPHIC DESIGN"
            heroTitle="The Contract"
            heroHighlight="Verifies Everything"
            heroSubtitle="The Ethereum smart contract performs all hash matching and transfer authorization. No UI server, no backend, and no API is involved in the verification logic. The contract is the only authority."
            primaryColor="#F59E0B"
            secondaryColor="#EF4444"
            heroButtons={[
                { label: "Vault Proof Hashing", href: "/vault-proof-hashing", primary: false },
                { label: "Immutable Contracts", href: "/immutable-contracts", primary: false },
            ]}
            stats={[
                { value: "100%", label: "Onchain verification", note: "No API call required" },
                { value: "0", label: "Backend authority", note: "Contract is the only check" },
                { value: "Deterministic", label: "Hash matching", note: "Same input, same result" },
                { value: "Immutable", label: "Verification logic", note: "Cannot be changed after deploy" },
            ]}
            sectionBadge="VERIFICATION DESIGN"
            sectionHeading="Why On-Chain Verification Cannot Be Tampered With"
            sectionBody="The PersonalQRYPTANK contract contains the full verification logic in bytecode. It is deployed without an upgrade proxy. The verification cannot be modified by anyone including the Qryptum team: not now, not ever."
            sectionColor="#F59E0B"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1509869175650-a1d97972541a?w=800&auto=format",
                    color: "#F59E0B",
                    title: "Hash Matching in Bytecode",
                    body: "The contract recomputes keccak256 from the submitted proof and compares it to the stored hash. This comparison runs entirely in the EVM: no external call needed.",
                    link: { text: "Vault proof hashing", href: "/vault-proof-hashing" },
                },
                {
                    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format",
                    color: "#EF4444",
                    title: "No API Verification Step",
                    body: "The Qryptum backend is not called during shield(), transfer(), or unshield(). The Ethereum contract accepts or rejects the transaction entirely on its own.",
                },
                {
                    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format",
                    color: "#D97706",
                    title: "Ethereum as Arbiter",
                    body: "If the contract accepts the transaction, the operation is valid. If it reverts, the operation fails. Ethereum is the final arbiter: not Qryptum, not any API.",
                    link: { text: "Immutable contracts", href: "/immutable-contracts" },
                },
                {
                    img: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&auto=format",
                    color: "#B45309",
                    title: "Verification Logic Is Immutable",
                    body: "Because the contracts have no upgrade mechanism, the verification logic running today is exactly the logic that will run in 10 years.",
                    link: { text: "Immutable contracts", href: "/immutable-contracts" },
                },
            ]}
            techNote={{
                label: "Contract: onchain verification pattern",
                lines: [
                    "// All verification happens inside the contract: no oracle, no API",
                    "function shield(address token, uint256 amount, bytes32 proof) external {",
                    "    // Contract checks the hash: nothing else is trusted",
                    "    require(keccak256(abi.encode(proof)) == vaultProofHash, 'fail');",
                    "    // Only after passing verification does state change",
                    "    _doShield(token, amount);",
                    "}",
                ],
            }}
            relatedLinks={[
                { label: "Vault Proof Hashing", href: "/vault-proof-hashing", color: "#F59E0B" },
                { label: "No Server Storage", href: "/no-server-storage", color: "#EF4444" },
                { label: "Immutable Contracts", href: "/immutable-contracts", color: "#D97706" },
            ]}
        />
    );
}

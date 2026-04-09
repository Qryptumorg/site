import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function EnterVaultProofPage() {
    return (
        <FeatureBentoPage
            pageTitle="Enter Vault Proof"
            badge="HOW IT WORKS"
            heroTitle="Your Secret"
            heroHighlight="Never Leaves Your Browser"
            heroSubtitle="The vault proof is hashed with keccak256 entirely in your browser before any transaction is sent. The plaintext never appears in any network call, contract storage, or server log."
            primaryColor="#8B5CF6"
            secondaryColor="#EC4899"
            heroButtons={[
                { label: "Vault Proof Security", href: "/vault-proof-security", primary: false },
                { label: "No Server Storage", href: "/no-server-storage", primary: false },
            ]}
            stats={[
                { value: "Browser only", label: "Where hashing happens", note: "No server involved" },
                { value: "keccak256", label: "Hash function", note: "Onchain-compatible" },
                { value: "0", label: "Servers receiving it", note: "No API call with plaintext" },
                { value: "Never stored", label: "Vault proof plaintext", note: "Not in any database" },
            ]}
            sectionBadge="VAULT PROOF SECURITY"
            sectionHeading="How the Vault Proof Is Handled"
            sectionBody="You type your vault proof into the browser. The app computes keccak256(vaultProof) locally using the Web Crypto API. Only the hash is passed to the Ethereum transaction. The plaintext is discarded from memory after hashing."
            sectionColor="#8B5CF6"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format",
                    color: "#8B5CF6",
                    title: "Client-Side Hashing",
                    body: "keccak256 is computed in the browser using the ethers.js utils. The plaintext vault proof is never sent over the network in any form.",
                    link: { text: "Vault proof hashing", href: "/vault-proof-hashing" },
                },
                {
                    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format",
                    color: "#EC4899",
                    title: "Hash Passed to MetaMask",
                    body: "The computed hash is the only field included in the transaction calldata. MetaMask signs and submits a transaction containing no sensitive data.",
                },
                {
                    img: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&auto=format",
                    color: "#7C3AED",
                    title: "No API Call with Plaintext",
                    body: "The Qryptum frontend makes no server call that includes the vault proof. The backend API receives no vault proof data at any point.",
                    link: { text: "No server storage", href: "/no-server-storage" },
                },
                {
                    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format",
                    color: "#DB2777",
                    title: "Onchain Hash Only",
                    body: "The Ethereum contract stores only the keccak256 hash set during Qrypt-Safe deployment. No plaintext is ever written to contract storage.",
                    link: { text: "Onchain verification", href: "/onchain-verification" },
                },
            ]}
            techNote={{
                label: "Browser: vault proof hashing",
                lines: [
                    "// Computed entirely client-side in JavaScript",
                    "import { ethers } from 'ethers';",
                    "const hash = ethers.keccak256(ethers.toUtf8Bytes(vaultProof));",
                    "// Only 'hash' is passed to the contract: plaintext is discarded",
                    "await qrypt-safe.shield(token, amount, hash);",
                ],
            }}
            relatedLinks={[
                { label: "Vault Proof Hashing", href: "/vault-proof-hashing", color: "#8B5CF6" },
                { label: "No Server Storage", href: "/no-server-storage", color: "#EC4899" },
                { label: "Commit Transfer", href: "/commit-transfer", color: "#7C3AED" },
            ]}
        />
    );
}

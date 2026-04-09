import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function NoServerStoragePage() {
    return (
        <FeatureBentoPage
            pageTitle="No Server Storage"
            badge="CRYPTOGRAPHIC DESIGN"
            heroTitle="Zero Backend"
            heroHighlight="Storage of Secrets"
            heroSubtitle="Qryptum operates no database of vault proofs, private keys, or user secrets. Every sensitive operation happens client-side in your browser or on the Ethereum L1 smart contract."
            primaryColor="#0EA5E9"
            secondaryColor="#6366F1"
            heroButtons={[
                { label: "Vault Proof Hashing", href: "/vault-proof-hashing", primary: false },
                { label: "Onchain Verification", href: "/onchain-verification", primary: false },
            ]}
            stats={[
                { value: "0", label: "Servers storing secrets", note: "No backend key database" },
                { value: "0", label: "API calls with plaintext", note: "Hashing is client-side only" },
                { value: "100%", label: "Client-side hashing", note: "Browser computes the hash" },
                { value: "L1 only", label: "Hash storage", note: "Ethereum contract storage" },
            ]}
            sectionBadge="ZERO-SERVER DESIGN"
            sectionHeading="How the Backend Is Involved (and What It Never Sees)"
            sectionBody="The Qryptum API server handles Qrypt-Safe indexing, transaction history, and price feeds. It never receives a vault proof, private key, or any secret. Vault proof hashing happens entirely in the browser before any network call is made."
            sectionColor="#0EA5E9"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format",
                    color: "#0EA5E9",
                    title: "No Server Vault Database",
                    body: "Qryptum runs no database table of vault proofs. There is no backend data store that an attacker could target to extract user secrets.",
                },
                {
                    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format",
                    color: "#6366F1",
                    title: "Client-Side Hash Only",
                    body: "The browser computes keccak256(vaultProof) using ethers.js. The hash: not the plaintext: is what gets included in the Ethereum transaction calldata.",
                    link: { text: "Vault proof hashing", href: "/vault-proof-hashing" },
                },
                {
                    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format",
                    color: "#0284C7",
                    title: "No User Accounts",
                    body: "Qryptum has no user registration system. There is no server-side user table, session, or credential store. Your wallet address is your identity.",
                    link: { text: "Connect wallet", href: "/connect-wallet" },
                },
                {
                    img: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&auto=format",
                    color: "#4338CA",
                    title: "On-Chain Is the Source of Truth",
                    body: "The only vault proof hash that matters is the one stored in your PersonalQrypt-Safe contract on Ethereum. The backend has no authority over it.",
                    link: { text: "Onchain verification", href: "/onchain-verification" },
                },
            ]}
            relatedLinks={[
                { label: "Vault Proof Hashing", href: "/vault-proof-hashing", color: "#0EA5E9" },
                { label: "Onchain Verification", href: "/onchain-verification", color: "#6366F1" },
                { label: "Vault Proof Security", href: "/vault-proof-security", color: "#0284C7" },
            ]}
        />
    );
}

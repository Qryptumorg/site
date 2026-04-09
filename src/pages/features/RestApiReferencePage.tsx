import FeatureBentoPage from "@/pages/FeatureBentoPage";

export default function RestApiReferencePage() {
    return (
        <FeatureBentoPage
            pageTitle="REST API Reference"
            badge="INTEGRATION GUIDE"
            heroTitle="Backend API"
            heroHighlight="for Developers"
            heroSubtitle="The Qryptum REST API provides endpoints for indexing Qrypt-Safe events, querying vault states, and retrieving transaction history: without requiring direct Ethereum RPC calls."
            primaryColor="#F59E0B"
            secondaryColor="#EF4444"
            heroButtons={[
                { label: "ABI and Addresses", href: "/abi-and-addresses", primary: false },
                { label: "Network Support", href: "/network-support", primary: false },
            ]}
            stats={[
                { value: "REST", label: "API style", note: "Standard HTTP endpoints" },
                { value: "JSON", label: "Response format", note: "All responses" },
                { value: "No auth", label: "For read endpoints", note: "Public read access" },
                { value: "Websocket", label: "Event streams", note: "Real-time vault events" },
            ]}
            sectionBadge="API ENDPOINTS"
            sectionHeading="What the API Provides and What It Does Not"
            sectionBody="The API indexes Ethereum events from ShieldFactory and PersonalQrypt-Safe contracts. It provides read-only data for the UI: Qrypt-Safe addresses, token balances, and transaction history. It never holds vault proofs or private data."
            sectionColor="#F59E0B"
            cards={[
                {
                    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format",
                    color: "#F59E0B",
                    title: "GET /vault/:address",
                    body: "Returns the Qrypt-Safe contract address for a given wallet, along with shielded token balances indexed from on-chain events.",
                },
                {
                    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format",
                    color: "#EF4444",
                    title: "GET /transactions/:vault",
                    body: "Returns paginated transaction history for a Qrypt-Safe: shield events, transfer commits, reveals, and unshield events indexed from Ethereum logs.",
                },
                {
                    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format",
                    color: "#D97706",
                    title: "WebSocket /events",
                    body: "Subscribe to real-time vault events. The server pushes new shield, commit, reveal, and unshield events as they are confirmed on Ethereum.",
                },
                {
                    img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format",
                    color: "#B45309",
                    title: "No Secret Data in API",
                    body: "The API never stores or returns vault proofs, private keys, or any sensitive data. It only indexes publicly visible Ethereum event data.",
                    link: { text: "No server storage", href: "/no-server-storage" },
                },
            ]}
            techNote={{
                label: "API: example requests",
                lines: [
                    "// Get Qrypt-Safe for a wallet",
                    "GET /api/vault/0xYourWalletAddress",
                    "",
                    "// Get transaction history",
                    "GET /api/transactions/0xYourVaultAddress?page=1&limit=20",
                    "",
                    "// WebSocket event stream",
                    "WS wss://api.qryptum.io/events?vault=0xYourVaultAddress",
                ],
            }}
            relatedLinks={[
                { label: "ABI and Addresses", href: "/abi-and-addresses", color: "#F59E0B" },
                { label: "Network Support", href: "/network-support", color: "#EF4444" },
                { label: "ShieldFactory", href: "/shield-factory", color: "#D97706" },
            ]}
        />
    );
}

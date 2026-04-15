export default function PageLoader() {
    return (
        <div style={{
            position: "fixed",
            inset: 0,
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
        }}>
            <div style={{
                position: "relative",
                width: 120,
                height: 120,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                {/* spinning arc */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: "conic-gradient(from 0deg, transparent 0%, transparent 60%, rgba(56,189,248,0.15) 75%, rgba(56,189,248,0.6) 88%, #38bdf8 95%, #fff 100%)",
                    animation: "pl-spin 1.1s linear infinite",
                }} />

                {/* inner mask */}
                <div style={{
                    position: "absolute",
                    inset: 10,
                    borderRadius: "50%",
                    background: "#000",
                }} />

                {/* glow */}
                <div style={{
                    position: "absolute",
                    inset: -8,
                    borderRadius: "50%",
                    background: "conic-gradient(from 0deg, transparent 0%, transparent 70%, rgba(56,189,248,0.05) 85%, rgba(56,189,248,0.25) 100%)",
                    animation: "pl-spin 1.1s linear infinite",
                    filter: "blur(6px)",
                }} />

                {/* logo center */}
                <img
                    src="/qryptum-logo-new.png"
                    alt=""
                    width={48}
                    height={48}
                    style={{ position: "relative", zIndex: 1, objectFit: "contain" }}
                />
            </div>

            <style>{`
                @keyframes pl-spin {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}

import { useState, useRef, useEffect } from "react";
import type { Language } from "@/lib/translations";
import { useLanguage } from "@/lib/LanguageContext";

/* ─── Nav data ───────────────────────────────────────────────────────── */

export const NAV_MENUS = [
    {
        label: "Features",
        categories: [
            {
                title: "Shield Protocol",
                desc: "Personal Qrypt-Safe infrastructure on Ethereum L1",
                items: [
                    { title: "Create Personal Qrypt-Safe", desc: "One Qrypt-Safe per wallet, deployed directly on-chain in one click", href: "/create-personal-qrypt-safe" },
                    { title: "Shield ERC-20 Tokens", desc: "Any ERC-20 token can be shielded inside your Qrypt-Safe instantly", href: "/shield-erc20-tokens" },
                    { title: "Transfer Shield", desc: "Contract blocks all unauthorized token moves at bytecode level", href: "/transfer-shield" },
                ],
            },
            {
                title: "qToken System",
                desc: "Wrapped tokens that mirror your shielded assets",
                items: [
                    { title: "qETH and qUSDT", desc: "Shielded tokens appear in MetaMask with the q prefix", href: "/qtoken-system" },
                    { title: "1:1 Backing", desc: "Every qToken is fully backed by the original shielded asset", href: "/one-to-one-backing" },
                    { title: "Burn on Unshield", desc: "qTokens are burned automatically when you exit your Qrypt-Safe", href: "/burn-on-unshield" },
                ],
            },
            {
                title: "Transfer Engine",
                desc: "Protocol-level transfer verification system",
                items: [
                    { title: "Commit Phase", desc: "Submit a hashed commitment before revealing transfer details", href: "/commit-phase" },
                    { title: "Reveal Phase", desc: "Complete the transfer by revealing vault proof and amount onchain", href: "/reveal-phase" },
                    { title: "MEV Protection", desc: "Two-phase design prevents front-running from mempool bots", href: "/mev-protection" },
                ],
            },
        ],
    },
    {
        label: "How It Works",
        categories: [
            {
                title: "Getting Shielded",
                desc: "From wallet connect to first shielded token",
                items: [
                    { title: "Connect Wallet", desc: "Use MetaMask or WalletConnect to connect your Ethereum wallet", href: "/connect-wallet" },
                    { title: "Create Qrypt-Safe", desc: "Deploy your personal Qrypt-Safe contract on Ethereum L1", href: "/create-qrypt-safe" },
                    { title: "Shield Tokens", desc: "Deposit ERC-20 tokens and receive qTokens in return", href: "/shield-tokens" },
                ],
            },
            {
                title: "Making Transfers",
                desc: "Secure two-step onchain transfer flow",
                items: [
                    { title: "Enter Vault Proof", desc: "Your vault proof is hashed locally and never sent in plaintext", href: "/enter-vault-proof" },
                    { title: "Commit Transfer", desc: "Submit the hashed commitment transaction to Ethereum", href: "/commit-transfer" },
                    { title: "Reveal and Execute", desc: "Finalize the transfer within the 10-minute reveal window", href: "/reveal-and-execute" },
                ],
            },
            {
                title: "Exiting the Qrypt-Safe",
                desc: "How to unshield tokens back to your wallet",
                items: [
                    { title: "Burn qTokens", desc: "Initiate an unshield to burn your qTokens from your Qrypt-Safe", href: "/burn-qtokens" },
                    { title: "Receive Original Tokens", desc: "Original ERC-20 tokens are returned to your wallet address", href: "/receive-original-tokens" },
                    { title: "Emergency Recovery", desc: "Recover funds after 180 days of verified inactivity", href: "/emergency-recovery" },
                ],
            },
        ],
    },
    {
        label: "Security",
        categories: [
            {
                title: "Cryptographic Design",
                desc: "How vault proofs and hashes keep you safe",
                items: [
                    { title: "Quantum-Resistant Design", desc: "keccak256 vault proofs stay secure even against quantum computing attacks", href: "/quantum-design" },
                    { title: "Vault Proof Hashing", desc: "keccak256 hash stored on-chain, plaintext never leaves your browser", href: "/vault-proof-hashing" },
                    { title: "No Server Storage", desc: "Qryptum never stores vault proofs or private keys on any server", href: "/no-server-storage" },
                    { title: "Onchain Verification", desc: "Every transfer is verified by the smart contract, not the UI", href: "/onchain-verification" },
                ],
            },
            {
                title: "Protocol Architecture",
                desc: "Commit-reveal and anti-frontrun design",
                items: [
                    { title: "Commit-Reveal Scheme", desc: "Two-phase design closes the window for mempool interception", href: "/commit-reveal-scheme" },
                    { title: "Nonce Protection", desc: "Unique nonces prevent replay attacks on committed transactions", href: "/nonce-protection" },
                    { title: "Time-Locked Reveals", desc: "Reveal window expires after 10 minutes for added safety", href: "/time-locked-reveals" },
                ],
            },
            {
                title: "Emergency Recovery",
                desc: "How to recover funds in edge cases",
                items: [
                    { title: "180-Day Inactivity Rule", desc: "Emergency withdrawal unlocks after prolonged Qrypt-Safe inactivity", href: "/180-day-inactivity" },
                    { title: "No Admin Keys", desc: "No multisig or admin can touch your Qrypt-Safe funds at any time", href: "/no-admin-keys" },
                    { title: "Immutable Contracts", desc: "No upgrade proxy, no admin role: bytecode is final on deployment", href: "/immutable-contracts" },
                ],
            },
        ],
    },
    {
        label: "Docs",
        categories: [
            {
                title: "Getting Started",
                desc: "First steps with Qryptum",
                items: [
                    { title: "Quick Start Guide", desc: "Create your Qrypt-Safe and shield your first token in under 5 minutes", href: "/quick-start-guide" },
                    { title: "Supported Tokens", desc: "Full list of ERC-20 tokens compatible with Qryptum Qrypt-Safes", href: "/supported-tokens" },
                    { title: "Network Support", desc: "Ethereum L1, Sepolia testnet, and local Hardhat for developers", href: "/network-support" },
                ],
            },
            {
                title: "Smart Contracts",
                desc: "Technical contract documentation",
                items: [
                    { title: "ShieldFactory", desc: "Factory contract that deploys PersonalVault clones via EIP-1167", href: "/shield-factory" },
                    { title: "PersonalQrypt-Safe", desc: "Per-user Qrypt-Safe with shield, transfer, and unshield functions", href: "/personal-qrypt-safe" },
                    { title: "ShieldToken (qToken)", desc: "ERC-20 token with transfers disabled except through the Qrypt-Safe", href: "/shield-token" },
                ],
            },
            {
                title: "Integration Guide",
                desc: "APIs and references for developers",
                items: [
                    { title: "REST API Reference", desc: "Backend endpoints for Qrypt-Safe creation and transaction indexing", href: "/rest-api-reference" },
                    { title: "ABI and Addresses", desc: "Contract ABIs and deployed addresses for all networks", href: "/abi-and-addresses" },
                    { title: "FAQ", desc: "Common questions about qTokens, vault proofs, and onchain transfers", href: "/faq" },
                ],
            },
        ],
    },
];

const LANGS: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
    { code: "zh", label: "ZH" },
];

/* ─── Nav label translations ─────────────────────────────────────────── */

const NAV_LABEL_MAP: Record<Language, Record<string, string>> = {
    en: { Features: "Features", "How It Works": "How It Works", Security: "Security", Docs: "Docs" },
    ru: { Features: "Функции", "How It Works": "Как это работает", Security: "Безопасность", Docs: "Документация" },
    zh: { Features: "功能特性", "How It Works": "工作原理", Security: "安全机制", Docs: "文档" },
};

/* ─── SharedNavBar ───────────────────────────────────────────────────── */

interface SharedNavBarProps {
    onConnect?: () => void;
    isConnecting?: boolean;
}

export default function SharedNavBar({ onConnect, isConnecting = false }: SharedNavBarProps) {
    const { lang, setLang, t } = useLanguage();

    const [activeMenu, setActiveMenu] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState<number>(0);
    const [langOpen, setLangOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== "undefined" ? window.innerWidth < 768 : false
    );
    const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    useEffect(() => {
        if (!isMobile) setMobileOpen(false);
    }, [isMobile]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    const openMenu = (i: number) => {
        if (hoverTimer.current) clearTimeout(hoverTimer.current);
        hoverTimer.current = setTimeout(() => {
            setActiveMenu(i);
            setActiveCategory(0);
        }, 220);
    };

    const closeAll = () => {
        if (hoverTimer.current) clearTimeout(hoverTimer.current);
        hoverTimer.current = setTimeout(() => {
            setActiveMenu(null);
            setActiveCategory(0);
        }, 180);
    };

    const cancelClose = () => {
        if (hoverTimer.current) clearTimeout(hoverTimer.current);
    };

    const handleLaunch = () => {
        if (onConnect) onConnect();
    };

    return (
        <header
            style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}
            onMouseLeave={!isMobile ? closeAll : undefined}
        >
            {/* Main bar */}
            <div style={{
                background: "rgba(0,0,0,0.88)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}>
                <div style={{
                    padding: isMobile ? "0 20px" : "0 48px",
                    height: 64,
                    display: "flex",
                    alignItems: "center",
                    gap: 0,
                }}>
                    {/* Logo */}
                    <a href={import.meta.env.BASE_URL} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 0, marginRight: 32 }}>
                        <img src={import.meta.env.BASE_URL + 'qryptum-logo.png'} alt="Qryptum" style={{ height: 38, width: 38, objectFit: "contain", display: "block" }} />
                        <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: "0.12em", color: "#fff", marginLeft: -4 }}>
                            QRYPTUM
                        </span>
                    </a>

                    {isMobile ? (
                        <>
                            <div style={{ flex: 1 }} />
                            <button
                                onClick={() => setMobileOpen((v) => !v)}
                                style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5, alignItems: "center", justifyContent: "center" }}
                                aria-label="Open menu"
                            >
                                <span style={{ display: "block", width: 22, height: 2, background: "#fff", borderRadius: 2, transition: "all 0.25s", transform: mobileOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
                                <span style={{ display: "block", width: 22, height: 2, background: "#fff", borderRadius: 2, transition: "opacity 0.2s", opacity: mobileOpen ? 0 : 1 }} />
                                <span style={{ display: "block", width: 22, height: 2, background: "#fff", borderRadius: 2, transition: "all 0.25s", transform: mobileOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
                            </button>
                        </>
                    ) : (
                        <>
                            <nav style={{ display: "flex", alignItems: "center", gap: 2, flex: 1 }}>
                                {NAV_MENUS.map((menu, i) => (
                                    <button
                                        key={menu.label}
                                        onMouseEnter={() => openMenu(i)}
                                        onClick={() => { cancelClose(); setActiveMenu(activeMenu === i ? null : i); setActiveCategory(0); }}
                                        style={{
                                            fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 14,
                                            color: activeMenu === i ? "#fff" : "rgba(255,255,255,0.68)",
                                            background: activeMenu === i ? "rgba(255,255,255,0.07)" : "transparent",
                                            border: "none", borderRadius: 8, padding: "7px 14px",
                                            cursor: "pointer", display: "flex", alignItems: "center", gap: 5,
                                            transition: "color 0.15s, background 0.15s",
                                        }}
                                    >
                                        {NAV_LABEL_MAP[lang][menu.label] ?? menu.label}
                                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                                            style={{ transform: activeMenu === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </button>
                                ))}
                            </nav>

                            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                <div style={{ position: "relative" }}>
                                    <button
                                        onClick={() => setLangOpen((v) => !v)}
                                        style={{
                                            display: "flex", alignItems: "center", gap: 6,
                                            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)",
                                            borderRadius: 8, padding: "6px 12px", color: "rgba(255,255,255,0.72)",
                                            fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "'Inter',sans-serif",
                                        }}
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                        </svg>
                                        {lang.toUpperCase()}
                                    </button>
                                    {langOpen && (
                                        <div style={{
                                            position: "absolute", top: "calc(100% + 8px)", right: 0,
                                            background: "#111", border: "1px solid rgba(255,255,255,0.12)",
                                            borderRadius: 10, overflow: "hidden", minWidth: 80,
                                            boxShadow: "0 8px 32px rgba(0,0,0,0.5)", zIndex: 300,
                                        }}>
                                            {LANGS.map((l) => (
                                                <button key={l.code} onClick={() => { setLang(l.code); setLangOpen(false); }}
                                                    style={{
                                                        display: "block", width: "100%", padding: "9px 16px", textAlign: "left",
                                                        background: lang === l.code ? "rgba(98,126,234,0.15)" : "transparent",
                                                        color: lang === l.code ? "#627EEA" : "rgba(255,255,255,0.7)",
                                                        fontSize: 13, fontWeight: 500, cursor: "pointer", border: "none",
                                                        fontFamily: "'Inter',sans-serif",
                                                    }}
                                                >{l.label}</button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {onConnect ? (
                                    <button onClick={handleLaunch} disabled={isConnecting}
                                        style={{
                                            display: "flex", alignItems: "center", gap: 8,
                                            background: "#fff", color: "#000", border: "none", borderRadius: 10,
                                            padding: "8px 18px", fontFamily: "'Inter',sans-serif",
                                            fontWeight: 600, fontSize: 13,
                                            cursor: isConnecting ? "not-allowed" : "pointer",
                                            opacity: isConnecting ? 0.6 : 1, whiteSpace: "nowrap",
                                        }}
                                        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#ddd"; }}
                                        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#fff"; }}
                                    >
                                        {isConnecting ? "Connecting..." : t.nav.launchApp}
                                        {!isConnecting && (
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        )}
                                    </button>
                                ) : (
                                    <a href="/app" style={{
                                        display: "flex", alignItems: "center", gap: 8,
                                        background: "#fff", color: "#000", textDecoration: "none",
                                        borderRadius: 10, padding: "8px 18px",
                                        fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: 13,
                                        whiteSpace: "nowrap",
                                    }}
                                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#ddd"; }}
                                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#fff"; }}
                                    >
                                        {t.nav.launchApp}
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Mobile fullscreen overlay */}
            {isMobile && mobileOpen && (
                <div style={{
                    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
                    background: "#000000", zIndex: 999,
                    display: "flex", flexDirection: "column",
                    overflowY: "auto", overflowX: "hidden",
                }}>
                    <div style={{
                        display: "flex", alignItems: "center",
                        padding: "0 20px", height: 64, flexShrink: 0,
                        borderBottom: "1px solid rgba(255,255,255,0.07)",
                    }}>
                        <a href={import.meta.env.BASE_URL} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 0, flex: 1 }}>
                            <img src={import.meta.env.BASE_URL + 'qryptum-logo.png'} alt="Qryptum" style={{ height: 36, width: 36, objectFit: "contain" }} />
                            <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: "0.12em", color: "#fff", marginLeft: -4 }}>QRYPTUM</span>
                        </a>
                        <button onClick={() => setMobileOpen(false)}
                            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, color: "#fff" }}
                            aria-label="Close menu">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div style={{ flex: 1 }}>
                        {NAV_MENUS.map((menu, i) => (
                            <div key={menu.label}>
                                <button
                                    onClick={() => setMobileExpanded(mobileExpanded === i ? null : i)}
                                    style={{
                                        width: "100%", display: "flex", alignItems: "center",
                                        justifyContent: "space-between", padding: "18px 24px",
                                        background: "none", border: "none", cursor: "pointer",
                                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                                    }}
                                >
                                    <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: 17, color: "#fff" }}>{NAV_LABEL_MAP[lang][menu.label] ?? menu.label}</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                        stroke="rgba(255,255,255,0.45)" strokeWidth="2"
                                        style={{ transform: mobileExpanded === i ? "rotate(180deg)" : "none", transition: "transform 0.2s", flexShrink: 0 }}>
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </button>

                                {mobileExpanded === i && (
                                    <div style={{ background: "rgba(255,255,255,0.02)", paddingBottom: 8 }}>
                                        {menu.categories.map((cat) => (
                                            <div key={cat.title} style={{ padding: "12px 24px 8px 32px" }}>
                                                <p style={{
                                                    margin: "0 0 8px", fontFamily: "'Inter',sans-serif",
                                                    fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
                                                    color: "#627EEA", textTransform: "uppercase",
                                                }}>{cat.title}</p>
                                                {cat.items.map((item) => (
                                                    <a key={item.title} href={import.meta.env.BASE_URL + item.href.slice(1)}
                                                        style={{ display: "block", textDecoration: "none", padding: "9px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                                                        <p style={{ margin: 0, fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.95)" }}>
                                                            {item.title}
                                                        </p>
                                                        <p style={{ margin: "2px 0 0", fontFamily: "'Inter',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)", lineHeight: 1.4 }}>
                                                            {item.desc}
                                                        </p>
                                                    </a>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <div style={{ padding: "20px 24px 40px", display: "flex", flexDirection: "column", gap: 12 }}>
                            <div style={{ display: "flex", gap: 8 }}>
                                {LANGS.map((l) => (
                                    <button key={l.code}
                                        onClick={() => setLang(l.code)}
                                        style={{
                                            flex: 1, padding: "10px 0",
                                            background: lang === l.code ? "rgba(98,126,234,0.15)" : "rgba(255,255,255,0.05)",
                                            border: lang === l.code ? "1px solid rgba(98,126,234,0.4)" : "1px solid rgba(255,255,255,0.08)",
                                            borderRadius: 10, cursor: "pointer",
                                            fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600,
                                            color: lang === l.code ? "#627EEA" : "rgba(255,255,255,0.55)",
                                        }}
                                    >{l.label}</button>
                                ))}
                            </div>
                            {onConnect ? (
                                <button onClick={() => { handleLaunch(); setMobileOpen(false); }} disabled={isConnecting}
                                    style={{
                                        width: "100%", padding: "15px", textAlign: "center",
                                        background: "#fff", color: "#000", border: "none",
                                        borderRadius: 14, fontFamily: "'Inter',sans-serif",
                                        fontWeight: 700, fontSize: 15,
                                        cursor: isConnecting ? "not-allowed" : "pointer",
                                        opacity: isConnecting ? 0.6 : 1,
                                    }}
                                >{isConnecting ? "Connecting..." : t.nav.launchApp}</button>
                            ) : (
                                <a href="/app" style={{
                                    display: "block", width: "100%", padding: "15px", textAlign: "center",
                                    background: "#fff", color: "#000", textDecoration: "none",
                                    borderRadius: 14, fontFamily: "'Inter',sans-serif",
                                    fontWeight: 700, fontSize: 15, boxSizing: "border-box",
                                }}>{t.nav.launchApp}</a>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Mega menu panel: desktop */}
            {!isMobile && activeMenu !== null && (
                <div
                    onMouseEnter={cancelClose}
                    onMouseLeave={closeAll}
                    style={{
                        background: "#0a0a0a",
                        borderBottom: "1px solid rgba(255,255,255,0.08)",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
                    }}>
                    <div style={{ padding: "0 48px", display: "flex", minHeight: 320 }}>
                        <div style={{
                            width: 280, borderRight: "1px solid rgba(255,255,255,0.07)",
                            padding: "24px 0", flexShrink: 0,
                        }}>
                            {NAV_MENUS[activeMenu].categories.map((cat, ci) => (
                                <button
                                    key={cat.title}
                                    onMouseEnter={() => setActiveCategory(ci)}
                                    style={{
                                        display: "block", width: "100%", textAlign: "left",
                                        padding: "14px 24px 14px 20px",
                                        background: activeCategory === ci ? "rgba(98,126,234,0.10)" : "transparent",
                                        borderLeft: activeCategory === ci ? "3px solid #627EEA" : "3px solid transparent",
                                        border: "none", cursor: "pointer", transition: "background 0.15s",
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                        <div>
                                            <p style={{
                                                margin: 0, fontFamily: "'Inter',sans-serif",
                                                fontWeight: 600, fontSize: 14,
                                                color: activeCategory === ci ? "#fff" : "rgba(255,255,255,0.75)",
                                            }}>{cat.title}</p>
                                            <p style={{
                                                margin: "3px 0 0", fontFamily: "'Inter',sans-serif",
                                                fontSize: 12, color: "rgba(255,255,255,0.38)", lineHeight: 1.4,
                                            }}>{cat.desc}</p>
                                        </div>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                            stroke={activeCategory === ci ? "#627EEA" : "rgba(255,255,255,0.3)"}
                                            strokeWidth="2" style={{ flexShrink: 0, marginLeft: 8 }}>
                                            <path d="M9 18l6-6-6-6" />
                                        </svg>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div style={{ flex: 1, padding: "28px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 40px", alignContent: "start" }}>
                            {NAV_MENUS[activeMenu].categories[activeCategory].items.map((item) => (
                                <a
                                    key={item.title}
                                    href={import.meta.env.BASE_URL + item.href.slice(1)}
                                    style={{ textDecoration: "none", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "rgba(98,126,234,0.3)"; }}
                                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "rgba(255,255,255,0.05)"; }}
                                >
                                    <p style={{ margin: 0, fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: 14, color: "#fff" }}>{item.title}</p>
                                    <p style={{ margin: "4px 0 0", fontFamily: "'Inter',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{item.desc}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

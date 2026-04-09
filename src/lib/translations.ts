export type Language = "en" | "ru" | "zh";

export const translations = {
    en: {
        nav: {
            features: "Features",
            howItWorks: "How It Works",
            security: "Security",
            docs: "Docs",
            launchApp: "Launch App",
        },
        common: {
            openApp: "Open App",
            readDocs: "Read Docs",
            howItWorks: "How It Works",
            stepByStep: "Step-by-Step",
            footerText: "Non-custodial. Open source. Ethereum L1.",
            verifiedBadge: "Verified",
            supersededBadge: "Superseded",
        },
        landing: {
            heroHeadline: "The second layer\nbeyond your private key.",
            heroHeadlineMobile: "The second layer\nbeyond your\nprivate key.",
            heroBody: "Your onchain wealth deserves more than a private key. Qryptum gives your ERC-20 tokens a second layer of protection built for the post-quantum era. Deploy your own personal shield directly on Ethereum L1 and take full control of every transfer.",
            heroEtherscanBtn: "View Contract on Etherscan",

            logosLabel: "Shield any ERC-20 token",

            statsHeading: "Deploy your own personal shield directly on Ethereum L1 and take full control of every transfer.",
            statsHeadingMobile: "Deploy your own personal shield.",
            statsBody: "Even a compromised private key cannot move your tokens. Qryptum requires a cryptographic vault proof on every transaction, independent of your wallet key.",
            statsCardTitle: "How it works",
            statsCardSteps: [
                { step: "Shield", desc: "Shield any ERC-20 token into your personal Qrypt-Safe on-chain" },
                { step: "Commit", desc: "Submit a cryptographic hash of your vault proof" },
                { step: "Transfer", desc: "Reveal your vault proof on-chain to authorize the transaction" },
            ],

            useCasesLabel: "Use Cases",
            useCasesHeading: "A new way to protect\nyour onchain wealth.",
            useCasesQuantumTitle: "Quantum-Resistant Design",
            useCasesQuantumDesc: "keccak256 vault proofs cannot be reversed by quantum computers. Your Qrypt-Safe holds even when ECDSA breaks.",
            useCasesQuantumCta: "Read the security model",
            useCasesCards: [
                { title: "SIM swap & phishing proof", desc: "Even if attackers have your private key, your Qrypt-Safe needs a second proof they'll never have. No tool, no script, no exploit bypasses the vault proof layer.", cta: "How shielding works" },
                { title: "Inheritance-safe transfers", desc: "Set Qrypt-Safe access terms for your loved ones. Your funds are shielded until the right vault proof is revealed. No lawyer, no intermediary needed.", cta: "Explore Qrypt-Safe access" },
                { title: "Software cold wallet", desc: "No hardware device required. Qryptum turns any browser into a cold-storage-grade Qrypt-Safe. Shield your tokens on-chain and access them anywhere.", cta: "Try it yourself" },
            ],

            howItWorksLabel: "How It Works",
            howItWorksHeading: "Three steps, one Qrypt-Safe.",
            howItWorksSteps: [
                { title: "Shield", desc: "Shield your ERC-20 tokens into the Qrypt-Safe. The contract anchors a cryptographic vault proof onchain. Without it, no transaction can ever leave." },
                { title: "Authorize", desc: "To send, you supply a cryptographic vault proof on every transfer. A stolen private key alone is not enough. No proof, no movement." },
                { title: "Transfer", desc: "The contract verifies the cryptographic vault proof onchain. Both the signer and the proof must match. Fail either, the transaction reverts instantly." },
            ],

            ctaLabel: "Get Started",
            ctaTitle: "Secure your tokens today.",
            ctaBody: "Qryptum is live on Ethereum mainnet. Non-custodial. Every transfer requires a cryptographic vault proof only you can generate.",
            ctaBtn: "Launch App",
            ctaEtherscanBtn: "View Contract on Etherscan",

            footerTagline: "The second layer of protection for your ERC-20 tokens. Built on Ethereum L1.",
            footerColProduct: "Product",
            footerColDevelopers: "Developers",
            footerColCommunity: "Community",
            footerLinkLaunchApp: "Launch App",
            footerLinkTestnet: "Testnet",
            footerLinkMainnet: "Mainnet",
            footerLinkDocumentation: "Documentation",
            footerLinkGitHub: "GitHub",
            footerLinkTwitter: "Twitter / X",
            footerLinkTelegram: "Telegram",
            footerCopy: "2026 Qryptum. All rights reserved.",
            footerPrivacy: "Privacy",
            footerTerms: "Terms",
        },
        privacy: {
            eyebrow: "Legal",
            title: "Privacy Policy",
            lastUpdated: "Last updated: April 2026",
            footerText: "Non-custodial. Open source. Ethereum L1.",
            sections: [
                {
                    title: "Overview",
                    body: [
                        "Qryptum is a non-custodial smart contract protocol deployed on Ethereum L1. This Privacy Policy explains what information we collect, how we use it, and what rights you have regarding your data.",
                        "Because Qryptum operates entirely on-chain and does not require account registration, email addresses, or personal identification, the amount of data we collect is minimal by design.",
                    ],
                },
                {
                    title: "Information We Do Not Collect",
                    intro: "Qryptum does not collect, store, or process:",
                    bullets: [
                        "Your name, email address, or any personal identifiers",
                        "Your vault proof or any cryptographic secrets",
                        "KYC or identity verification data",
                        "Payment information beyond on-chain transaction data",
                        "IP addresses tied to wallet addresses",
                    ],
                },
                {
                    title: "On-Chain Data",
                    intro: "All interactions with the Qryptum protocol occur on the Ethereum blockchain, which is a public ledger. This includes:",
                    bullets: [
                        "Wallet addresses used to interact with Qrypt-Safe contracts",
                        "Transaction hashes and amounts",
                        "Smart contract events (shield, transfer, unshield)",
                        "Block timestamps of interactions",
                    ],
                    post: [
                        "This data is permanently and publicly recorded on the Ethereum blockchain. Qryptum has no ability to modify or delete it. The blockchain is not under our control.",
                    ],
                },
                {
                    title: "Analytics and Website Data",
                    body: [
                        "The Qryptum website may collect anonymized, aggregated usage data including page views and feature interactions. This data does not identify individual users and is used solely to improve the interface.",
                        "We do not use tracking pixels, behavioral fingerprinting, or any third-party advertising analytics.",
                    ],
                },
                {
                    title: "Wallet Connections",
                    body: [
                        "When you connect a wallet (MetaMask, WalletConnect, or similar), we receive your Ethereum wallet address. This address is used only to interact with the Qryptum smart contracts. It is not stored in any database we control beyond what is recorded on-chain.",
                    ],
                },
                {
                    title: "Third-Party Services",
                    body: [
                        "Qryptum may link to or integrate with third-party services including Etherscan, WalletConnect, and Infura. These services operate under their own privacy policies. We are not responsible for their data practices.",
                    ],
                },
                {
                    title: "Your Vault Proof",
                    body: [
                        "Your vault proof is hashed in your browser before any data leaves your device. We never receive, transmit, or store your vault proof in plain form. Only a keccak256 hash fingerprint is submitted to the smart contract. Qryptum does not have any mechanism to recover or access your vault proof.",
                    ],
                },
                {
                    title: "Data Retention",
                    body: [
                        "Because we operate a non-custodial protocol, we retain no user account data. The only persistent data is what exists on the Ethereum blockchain, which we do not control.",
                    ],
                },
                {
                    title: "Changes to This Policy",
                    body: [
                        "We may update this Privacy Policy from time to time. Changes will be reflected by updating the date at the top of this page. Continued use of the protocol after changes constitutes acceptance of the revised policy.",
                    ],
                },
                {
                    title: "Contact",
                    contact: "For questions regarding this Privacy Policy, reach out via the community channels listed on this site or email",
                },
            ],
        },
        quantumDesign: {
            heroBadge: "Post-Quantum Security",
            heroTitle: "Designed for the Post-Quantum Era",
            heroSubtitle: "keccak256 vault proofs stay mathematically secure even when quantum computers break elliptic curve cryptography. Your Qrypt-Safe was built for what comes next.",
            heroStat1Value: "256-bit", heroStat1Label: "keccak256 output", heroStat1Note: "Quantum-safe hash size",
            heroStat2Value: "2\u00B9\u00B2\u2078", heroStat2Label: "Collision resistance", heroStat2Note: "Against Grover's algorithm",
            heroStat3Value: "0", heroStat3Label: "Elliptic curve dependency", heroStat3Note: "Vault proof is hash-only",
            heroStat4Value: "On-chain", heroStat4Label: "Verification", heroStat4Note: "No trusted third party",

            threatLabel: "The Quantum Threat",
            threatHeading: "Quantum computers can break your private key. They cannot break keccak256.",
            threatP1: "Shor's algorithm running on a sufficiently powerful quantum computer can factor large integers and solve discrete logarithm problems in polynomial time. This breaks RSA, ECDSA, and every elliptic curve scheme that secures Ethereum private keys today.",
            threatP2: "The good news: keccak256 is a hash function, not an asymmetric cryptography scheme. It has no algebraic structure to exploit. The best known quantum attack (Grover's algorithm) only achieves a quadratic speedup, reducing 256-bit security to 128-bit. That remains computationally infeasible.",
            threatPoints: [
                "Shor's algorithm factors elliptic curve math: your private key is exposed",
                "Hardware wallets, seed phrases, and MetaMask all rely on ECDSA",
                "Quantum advantage grows as qubit counts scale to fault-tolerant thresholds",
                "Ethereum's planned migration to post-quantum signatures may take years",
            ],

            keccakLabel: "Cryptographic Core",
            keccakHeading: "The Avalanche Effect Makes Your Vault Proof Unbreakable",
            keccakBody: "Every Qrypt-Safe stores a keccak256 hash of your vault proof on-chain. Even knowing the hash reveals nothing about the original input. Change a single character and the hash output changes completely, unpredictably, and irreversibly.",
            keccakPropTitle: "Why keccak256 Resists Quantum Attacks",
            keccakProps: [
                "Pre-image resistance: the hash output does not mathematically reveal its input",
                "Avalanche effect: one-bit input change flips approximately 50% of output bits",
                "Grover's speedup only: quantum best-case is 2\u00B9\u00B2\u2078 operations, still infeasible",
                "SHA-3 family: designed post-NIST competition with quantum adversaries in scope",
                "No hidden algebraic structure for Shor's algorithm to exploit",
            ],

            pillar1Label: "Layer 1",
            pillar1Title: "Brute Force is Computationally Impossible",
            pillar1Body: "An attacker who knows your wallet address, all on-chain data, and has unlimited compute cannot reverse a keccak256 hash to recover your vault proof. The search space is 2^256. Even a quantum computer running Grover's reduces this to 2^128, requiring more energy than exists in the observable universe to exhaust.",
            pillar1Highlight: "2^256 possible vault proofs. No shortcut exists.",

            pillar2Label: "Layer 2",
            pillar2Title: "Your Vault Proof is Independent of Your Private Key",
            pillar2Body: "Traditional Ethereum security means one factor: your private key. Whoever has it, owns everything. Qrypt-Safe adds a second independent factor. Even a complete compromise of your Ethereum private key, seed phrase, and hardware device does not grant access to your shielded tokens without the separate vault proof.",
            pillar2Highlight: "Two factors. Two independent cryptographic layers.",

            pillar3Label: "Layer 3",
            pillar3Title: "Every Transaction Requires a Fresh Proof on Ethereum",
            pillar3Body: "Unlike session tokens or cached credentials, every single Qrypt-Safe operation requires the vault proof to be re-supplied and re-verified on-chain. There is no session to hijack, no cookie to steal, no intermediary to compromise. The Ethereum virtual machine itself is the verifier.",
            pillar3Highlight: "No session. No cache. On-chain verification, every time.",

            simLabel: "Attack Simulation",
            simHeading: "When a Quantum Computer Targets Your Wallet",
            simBody: "Trace the exact attack path a quantum-capable adversary would follow, and see where the Qrypt-Safe vault proof layer stops them cold.",
            simSteps: [
                { n: "01", color: "#ef4444", title: "Quantum Factoring Attack", desc: "Attacker runs Shor's algorithm on public Ethereum address. ECDSA private key is recovered from the public key in polynomial time." },
                { n: "02", color: "#f97316", title: "Private Key Exposed", desc: "Attacker now controls the wallet. Can sign any standard Ethereum transaction. All unshielded tokens are immediately at risk." },
                { n: "03", color: "#f59e0b", title: "Attempts to Access Qrypt-Safe", desc: "Attacker tries to call shield(), unshield(), or commitTransfer() on the victim's Qrypt-Safe. Wallet signature passes because they have the private key." },
                { n: "04", color: "#22c55e", title: "Vault Proof Required", desc: "Smart contract checks keccak256(vaultProof) against the stored hash. The attacker does not have the vault proof. The hash cannot be reversed. Quantum compute cannot brute-force 2^128." },
                { n: "05", color: "#06b6d4", title: "Transaction Reverts", desc: "EVM rejects the call. Gas is spent by the attacker. Shielded assets remain locked. The vault proof layer has successfully stopped a quantum-grade attack." },
            ],

            ctaLabel: "Protect Your Tokens Now",
            ctaHeading: "Quantum computers are coming. Your vault proof is already ready.",
            ctaBody: "Deploy your Qrypt-Safe today. Your assets get a second cryptographic layer that elliptic curve attacks cannot touch, today or when large-scale quantum compute arrives.",
            ctaPrimary: "Launch App",
            ctaSecondary: "Read the Security Model",
        },
        terms: {
            eyebrow: "Legal",
            title: "Terms of Service",
            lastUpdated: "Last updated: April 2026",
            footerText: "Non-custodial. Open source. Ethereum L1.",
            sections: [
                {
                    title: "Acceptance of Terms",
                    body: [
                        "By accessing or using the Qryptum protocol, website, or any associated interfaces, you agree to be bound by these Terms of Service. If you do not agree, do not use the protocol.",
                        "These terms apply to all users of the Qryptum interface, including individuals interacting with smart contracts deployed on Ethereum L1.",
                    ],
                },
                {
                    title: "Nature of the Protocol",
                    body: [
                        "Qryptum is a non-custodial, open-source smart contract protocol deployed on Ethereum L1. Qryptum does not hold, manage, control, or have access to your assets at any time.",
                        "All interactions occur directly between your wallet and the smart contracts. Qryptum has no ability to pause, upgrade, or override transactions once they are submitted to the blockchain.",
                    ],
                },
                {
                    title: "Eligibility",
                    body: [
                        "You may use the Qryptum protocol only if you are legally permitted to do so in your jurisdiction. You represent that you are of legal age and that your use does not violate any applicable laws or regulations, including those related to digital assets, securities, or financial instruments.",
                        "Users from jurisdictions where the use of decentralized finance protocols is restricted or prohibited are not permitted to use Qryptum.",
                    ],
                },
                {
                    title: "Vault Proof Responsibility",
                    body: [
                        "Your vault proof is your sole authentication credential for the Qrypt-Safe smart contract. Qryptum cannot recover, reset, or bypass your vault proof under any circumstances.",
                        "You are entirely responsible for maintaining the security and confidentiality of your vault proof. Loss of your vault proof may result in permanent loss of access to shielded assets, subject only to the emergency withdrawal mechanism available after 180 days of inactivity.",
                    ],
                },
                {
                    title: "No Custodial Relationship",
                    body: [
                        "Qryptum does not act as a custodian, trustee, fiduciary, or counterparty to any transaction. All assets remain under the sole control of smart contract logic and your wallet credentials.",
                    ],
                },
                {
                    title: "Risks",
                    intro: "Use of Qryptum involves inherent risks, including:",
                    bullets: [
                        "Smart contract bugs or vulnerabilities despite audits and testing",
                        "Loss of vault proof leading to inaccessible assets",
                        "Network congestion, gas price volatility, and transaction failures",
                        "Regulatory changes affecting the legality of protocol use",
                        "Ethereum network forks or infrastructure failures",
                    ],
                    post: [
                        "You acknowledge and accept these risks before using the protocol. Qryptum is provided as-is without warranty of any kind.",
                    ],
                },
                {
                    title: "No Financial Advice",
                    body: [
                        "Nothing on the Qryptum website or in the protocol documentation constitutes financial, investment, legal, or tax advice. You should consult qualified professionals before making any financial decisions involving digital assets.",
                    ],
                },
                {
                    title: "Prohibited Use",
                    intro: "You may not use Qryptum to:",
                    bullets: [
                        "Circumvent applicable laws or regulations",
                        "Launder proceeds of criminal activity",
                        "Engage in market manipulation or fraudulent transactions",
                        "Interfere with the integrity of the Ethereum network",
                    ],
                },
                {
                    title: "Intellectual Property",
                    body: [
                        "The Qryptum smart contracts are open-source software. The Qryptum name, logo, and brand assets are proprietary and may not be used without permission. The documentation and website content are owned by the Qryptum project.",
                    ],
                },
                {
                    title: "Limitation of Liability",
                    body: [
                        "To the maximum extent permitted by applicable law, Qryptum and its contributors shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the protocol, including loss of assets, data, or profits.",
                    ],
                },
                {
                    title: "Changes to Terms",
                    body: [
                        "We reserve the right to update these Terms at any time. Updated terms will be posted on this page with a revised date. Continued use of the protocol after changes are posted constitutes acceptance of the revised Terms.",
                    ],
                },
                {
                    title: "Governing Law",
                    body: [
                        "These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions. Any disputes shall be resolved through binding arbitration where permitted.",
                    ],
                },
                {
                    title: "Contact",
                    contact: "For questions or legal inquiries regarding these Terms, contact the Qryptum project through the community channels listed on this site or email",
                },
            ],
        },
    },

    ru: {
        nav: {
            features: "Функции",
            howItWorks: "Как это работает",
            security: "Безопасность",
            docs: "Документация",
            launchApp: "Открыть",
        },
        common: {
            openApp: "Открыть приложение",
            readDocs: "Документация",
            howItWorks: "Как это работает",
            stepByStep: "Пошагово",
            footerText: "Некастодиальный. Открытый исходный код. Ethereum L1.",
            verifiedBadge: "Верифицирован",
            supersededBadge: "Устарел",
        },
        landing: {
            heroHeadline: "Второй уровень защиты\nза вашим приватным ключом.",
            heroHeadlineMobile: "Второй уровень\nзащиты за вашим\nприватным ключом.",
            heroBody: "Ваше on-chain состояние заслуживает большего, чем просто приватный ключ. Qryptum добавляет второй уровень защиты для ваших ERC-20 токенов, созданный для постквантовой эпохи. Разверните личный щит прямо на Ethereum L1 и возьмите полный контроль над каждым переводом.",
            heroEtherscanBtn: "Смотреть контракт на Etherscan",

            logosLabel: "Защитите любой ERC-20 токен",

            statsHeading: "Разверните личный щит прямо на Ethereum L1 и возьмите полный контроль над каждым переводом.",
            statsHeadingMobile: "Разверните личный щит.",
            statsBody: "Даже скомпрометированный приватный ключ не может переместить ваши токены. Qryptum требует криптографическое доказательство хранилища на каждую транзакцию, независимо от вашего кошелька.",
            statsCardTitle: "Как это работает",
            statsCardSteps: [
                { step: "Защита", desc: "Заблокируйте любой ERC-20 токен в личном Qrypt-Safe on-chain" },
                { step: "Коммит", desc: "Отправьте криптографический хеш вашего доказательства хранилища" },
                { step: "Перевод", desc: "Раскройте доказательство on-chain для авторизации транзакции" },
            ],

            useCasesLabel: "Применение",
            useCasesHeading: "Новый способ защиты\nвашего on-chain состояния.",
            useCasesQuantumTitle: "Квантово-устойчивый дизайн",
            useCasesQuantumDesc: "Хеши keccak256 нельзя обратить даже квантовыми компьютерами. Ваш Qrypt-Safe защищён даже при взломе ECDSA.",
            useCasesQuantumCta: "Читать модель безопасности",
            useCasesCards: [
                { title: "Защита от SIM-свопа и фишинга", desc: "Даже при наличии приватного ключа злоумышленнику нужно второе доказательство, которого у него нет. Никакой инструмент не обойдёт слой vault proof.", cta: "Как работает защита" },
                { title: "Безопасные переводы для наследников", desc: "Установите условия доступа к Qrypt-Safe для близких. Средства заблокированы, пока не будет раскрыто нужное доказательство. Никаких юристов, никаких посредников.", cta: "Узнать о доступе к Qrypt-Safe" },
                { title: "Программный холодный кошелёк", desc: "Аппаратное устройство не нужно. Qryptum превращает любой браузер в Qrypt-Safe уровня холодного хранилища. Защищайте токены on-chain и получайте доступ везде.", cta: "Попробуйте сами" },
            ],

            howItWorksLabel: "Как это работает",
            howItWorksHeading: "Три шага, один Qrypt-Safe.",
            howItWorksSteps: [
                { title: "Защита", desc: "Заблокируйте ERC-20 токены в Qrypt-Safe. Контракт фиксирует криптографическое доказательство on-chain. Без него ни одна транзакция не покинет хранилище." },
                { title: "Авторизация", desc: "Для отправки нужно доказательство хранилища при каждом переводе. Украденного приватного ключа недостаточно. Нет доказательства — нет движения средств." },
                { title: "Перевод", desc: "Контракт верифицирует доказательство on-chain. Подписант и доказательство должны совпасть. Несоответствие — транзакция мгновенно отклоняется." },
            ],

            ctaLabel: "Начать",
            ctaTitle: "Защитите токены прямо сейчас.",
            ctaBody: "Qryptum работает в основной сети Ethereum. Некастодиальный. Каждый перевод требует криптографического доказательства хранилища, которое можете сгенерировать только вы.",
            ctaBtn: "Открыть",
            ctaEtherscanBtn: "Смотреть контракт на Etherscan",

            footerTagline: "Второй уровень защиты для ваших ERC-20 токенов. Построено на Ethereum L1.",
            footerColProduct: "Продукт",
            footerColDevelopers: "Разработчикам",
            footerColCommunity: "Сообщество",
            footerLinkLaunchApp: "Открыть",
            footerLinkTestnet: "Тестнет",
            footerLinkMainnet: "Основная сеть",
            footerLinkDocumentation: "Документация",
            footerLinkGitHub: "GitHub",
            footerLinkTwitter: "Twitter / X",
            footerLinkTelegram: "Telegram",
            footerCopy: "2026 Qryptum. Все права защищены.",
            footerPrivacy: "Конфиденциальность",
            footerTerms: "Условия",
        },
        privacy: {
            eyebrow: "Правовая информация",
            title: "Политика конфиденциальности",
            lastUpdated: "Последнее обновление: апрель 2026",
            footerText: "Некастодиальный. Открытый исходный код. Ethereum L1.",
            sections: [
                {
                    title: "Обзор",
                    body: [
                        "Qryptum — некастодиальный протокол смарт-контрактов, развёрнутый на Ethereum L1. Данная Политика конфиденциальности объясняет, какие данные мы собираем, как используем и какие права у вас есть в отношении ваших данных.",
                        "Поскольку Qryptum работает полностью on-chain и не требует регистрации аккаунта, email-адресов или идентификации личности, объём собираемых данных минимален по своей природе.",
                    ],
                },
                {
                    title: "Данные, которые мы не собираем",
                    intro: "Qryptum не собирает, не хранит и не обрабатывает:",
                    bullets: [
                        "Ваше имя, email-адрес или любые личные идентификаторы",
                        "Ваше доказательство хранилища или любые криптографические секреты",
                        "Данные KYC или верификации личности",
                        "Платёжную информацию, помимо данных on-chain транзакций",
                        "IP-адреса, привязанные к адресам кошельков",
                    ],
                },
                {
                    title: "On-Chain данные",
                    intro: "Все взаимодействия с протоколом Qryptum происходят в блокчейне Ethereum, который является публичным реестром. Это включает:",
                    bullets: [
                        "Адреса кошельков, используемые для взаимодействия с контрактами Qrypt-Safe",
                        "Хеши транзакций и суммы",
                        "События смарт-контрактов (shield, transfer, unshield)",
                        "Временные метки блоков взаимодействий",
                    ],
                    post: [
                        "Эти данные навсегда и публично записываются в блокчейн Ethereum. Qryptum не имеет возможности изменить или удалить их. Блокчейн не находится под нашим контролем.",
                    ],
                },
                {
                    title: "Аналитика и данные сайта",
                    body: [
                        "Сайт Qryptum может собирать анонимизированные агрегированные данные об использовании, включая просмотры страниц и взаимодействия с функциями. Эти данные не идентифицируют отдельных пользователей и используются исключительно для улучшения интерфейса.",
                        "Мы не используем пиксели отслеживания, поведенческие отпечатки или аналитику сторонних рекламных сетей.",
                    ],
                },
                {
                    title: "Подключение кошелька",
                    body: [
                        "При подключении кошелька (MetaMask, WalletConnect или аналогичного) мы получаем ваш адрес кошелька Ethereum. Этот адрес используется только для взаимодействия со смарт-контрактами Qryptum. Он не хранится в каких-либо базах данных под нашим контролем, кроме того, что записано on-chain.",
                    ],
                },
                {
                    title: "Сторонние сервисы",
                    body: [
                        "Qryptum может содержать ссылки или интеграции со сторонними сервисами, включая Etherscan, WalletConnect и Infura. Эти сервисы работают в соответствии со своими политиками конфиденциальности. Мы не несём ответственности за их практики обработки данных.",
                    ],
                },
                {
                    title: "Ваше доказательство хранилища",
                    body: [
                        "Ваше доказательство хранилища хешируется в браузере до того, как какие-либо данные покидают ваше устройство. Мы никогда не получаем, не передаём и не храним ваше доказательство хранилища в открытом виде. В смарт-контракт отправляется только хеш keccak256. У Qryptum нет механизма для восстановления или доступа к вашему доказательству хранилища.",
                    ],
                },
                {
                    title: "Хранение данных",
                    body: [
                        "Поскольку мы управляем некастодиальным протоколом, мы не храним данные пользовательских аккаунтов. Единственные постоянные данные — это то, что существует в блокчейне Ethereum, который мы не контролируем.",
                    ],
                },
                {
                    title: "Изменения в политике",
                    body: [
                        "Мы можем периодически обновлять данную Политику конфиденциальности. Изменения будут отражены путём обновления даты в верхней части этой страницы. Продолжение использования протокола после изменений означает принятие обновлённой политики.",
                    ],
                },
                {
                    title: "Контакты",
                    contact: "По вопросам, связанным с данной Политикой конфиденциальности, обращайтесь через каналы сообщества, указанные на этом сайте, или по email",
                },
            ],
        },
        quantumDesign: {
            heroBadge: "Постквантовая безопасность",
            heroTitle: "Создан для постквантовой эпохи",
            heroSubtitle: "Доказательства хранилища keccak256 остаются математически защищёнными даже тогда, когда квантовые компьютеры сломают криптографию эллиптических кривых. Ваш Qrypt-Safe создан для того, что придёт следующим.",
            heroStat1Value: "256 бит", heroStat1Label: "Выход keccak256", heroStat1Note: "Квантово-безопасный хеш",
            heroStat2Value: "2\u00B9\u00B2\u2078", heroStat2Label: "Стойкость к коллизиям", heroStat2Note: "Против алгоритма Гровера",
            heroStat3Value: "0", heroStat3Label: "Зависимость от эллиптических кривых", heroStat3Note: "Vault proof только хеш",
            heroStat4Value: "Onchain", heroStat4Label: "Верификация", heroStat4Note: "Без доверенных посредников",

            threatLabel: "Квантовая угроза",
            threatHeading: "Квантовые компьютеры могут взломать ваш приватный ключ. Они не могут взломать keccak256.",
            threatP1: "Алгоритм Шора, запущенный на достаточно мощном квантовом компьютере, может факторизовать большие числа и решать задачи дискретного логарифмирования за полиномиальное время. Это ломает RSA, ECDSA и все схемы на эллиптических кривых, которые сегодня защищают приватные ключи Ethereum.",
            threatP2: "Хорошая новость: keccak256 — хеш-функция, а не схема асимметричного шифрования. У неё нет алгебраической структуры для эксплуатации. Лучшая известная квантовая атака (алгоритм Гровера) даёт лишь квадратичное ускорение, снижая 256-битную защиту до 128 бит. Это по-прежнему вычислительно неосуществимо.",
            threatPoints: [
                "Алгоритм Шора факторизует математику эллиптических кривых: ваш приватный ключ раскрыт",
                "Аппаратные кошельки, seed-фразы и MetaMask используют ECDSA",
                "Квантовое преимущество растёт по мере масштабирования числа кубитов",
                "Запланированный переход Ethereum на постквантовые подписи займёт годы",
            ],

            keccakLabel: "Криптографическое ядро",
            keccakHeading: "Лавинный эффект делает ваше доказательство хранилища неуязвимым",
            keccakBody: "Каждый Qrypt-Safe хранит хеш keccak256 вашего доказательства хранилища onchain. Даже знание хеша ничего не раскрывает об исходных данных. Измените один символ — и выход хеша полностью, непредсказуемо и необратимо изменится.",
            keccakPropTitle: "Почему keccak256 устойчив к квантовым атакам",
            keccakProps: [
                "Стойкость к прообразу: выход хеша не раскрывает входные данные математически",
                "Лавинный эффект: изменение одного бита входа меняет около 50% выходных битов",
                "Только ускорение Гровера: квантовый минимум — 2\u00B9\u00B2\u2078 операций, всё равно неосуществимо",
                "Семейство SHA-3: разработано после конкурса NIST с учётом квантовых противников",
                "Нет скрытой алгебраической структуры для алгоритма Шора",
            ],

            pillar1Label: "Уровень 1",
            pillar1Title: "Перебор вычислительно невозможен",
            pillar1Body: "Злоумышленник, знающий ваш адрес кошелька, все данные onchain и имеющий неограниченные вычислительные ресурсы, не может обратить хеш keccak256 для восстановления вашего доказательства хранилища. Пространство поиска — 2^256. Даже квантовый компьютер с алгоритмом Гровера сокращает это до 2^128, требуя больше энергии, чем есть во Вселенной.",
            pillar1Highlight: "2^256 возможных vault proof. Ни одного ярлыка не существует.",

            pillar2Label: "Уровень 2",
            pillar2Title: "Ваш vault proof независим от приватного ключа",
            pillar2Body: "Традиционная безопасность Ethereum означает один фактор: ваш приватный ключ. Кто им владеет, тот владеет всем. Qrypt-Safe добавляет второй независимый фактор. Даже полная компрометация вашего приватного ключа, seed-фразы и аппаратного устройства не даёт доступа к защищённым токенам без отдельного vault proof.",
            pillar2Highlight: "Два фактора. Два независимых криптографических уровня.",

            pillar3Label: "Уровень 3",
            pillar3Title: "Каждая транзакция требует нового доказательства в Ethereum",
            pillar3Body: "В отличие от токенов сессии или кэшированных учётных данных, каждая операция Qrypt-Safe требует повторной подачи и верификации vault proof onchain. Нет сессии для перехвата, нет cookie для кражи, нет посредника для компрометации. Виртуальная машина Ethereum сама является верификатором.",
            pillar3Highlight: "Нет сессии. Нет кэша. Верификация onchain при каждой операции.",

            simLabel: "Симуляция атаки",
            simHeading: "Когда квантовый компьютер нацеливается на ваш кошелёк",
            simBody: "Проследите точный путь атаки квантового злоумышленника и посмотрите, где уровень vault proof Qrypt-Safe останавливает его.",
            simSteps: [
                { n: "01", color: "#ef4444", title: "Квантовая атака факторизации", desc: "Злоумышленник запускает алгоритм Шора на публичном адресе Ethereum. Приватный ключ ECDSA восстанавливается из открытого ключа за полиномиальное время." },
                { n: "02", color: "#f97316", title: "Приватный ключ раскрыт", desc: "Злоумышленник контролирует кошелёк. Может подписывать любые транзакции. Все незащищённые токены немедленно под угрозой." },
                { n: "03", color: "#f59e0b", title: "Попытка доступа к Qrypt-Safe", desc: "Злоумышленник пытается вызвать shield(), unshield() или commitTransfer(). Подпись кошелька проходит, так как у него есть приватный ключ." },
                { n: "04", color: "#22c55e", title: "Требуется vault proof", desc: "Смарт-контракт проверяет keccak256(vaultProof) против сохранённого хеша. У злоумышленника нет vault proof. Хеш необратим. Квантовые вычисления не могут перебрать 2^128." },
                { n: "05", color: "#06b6d4", title: "Транзакция отклоняется", desc: "EVM отклоняет вызов. Злоумышленник теряет газ. Защищённые активы остаются заблокированными. Уровень vault proof успешно остановил атаку квантового уровня." },
            ],

            ctaLabel: "Защитите токены прямо сейчас",
            ctaHeading: "Квантовые компьютеры придут. Ваш vault proof уже готов.",
            ctaBody: "Разверните Qrypt-Safe сегодня. Ваши активы получат второй криптографический уровень, недоступный для атак на эллиптические кривые — сегодня и когда появятся крупномасштабные квантовые компьютеры.",
            ctaPrimary: "Открыть приложение",
            ctaSecondary: "Читать модель безопасности",
        },
        terms: {
            eyebrow: "Правовая информация",
            title: "Условия использования",
            lastUpdated: "Последнее обновление: апрель 2026",
            footerText: "Некастодиальный. Открытый исходный код. Ethereum L1.",
            sections: [
                {
                    title: "Принятие условий",
                    body: [
                        "Получая доступ к протоколу Qryptum, сайту или любым связанным интерфейсам или используя их, вы соглашаетесь соблюдать настоящие Условия использования. Если вы не согласны, не используйте протокол.",
                        "Данные условия применяются ко всем пользователям интерфейса Qryptum, включая лиц, взаимодействующих со смарт-контрактами, развёрнутыми на Ethereum L1.",
                    ],
                },
                {
                    title: "Природа протокола",
                    body: [
                        "Qryptum — некастодиальный протокол смарт-контрактов с открытым исходным кодом, развёрнутый на Ethereum L1. Qryptum в любой момент времени не хранит, не управляет, не контролирует и не имеет доступа к вашим активам.",
                        "Все взаимодействия происходят напрямую между вашим кошельком и смарт-контрактами. Qryptum не имеет возможности приостановить, обновить или отменить транзакции после их отправки в блокчейн.",
                    ],
                },
                {
                    title: "Допустимость использования",
                    body: [
                        "Вы можете использовать протокол Qryptum только при условии, что это законно в вашей юрисдикции. Вы подтверждаете, что достигли совершеннолетия и что ваше использование не нарушает применимые законы или нормативные акты, в том числе связанные с цифровыми активами, ценными бумагами или финансовыми инструментами.",
                        "Пользователям из юрисдикций, где использование протоколов децентрализованных финансов ограничено или запрещено, запрещено использовать Qryptum.",
                    ],
                },
                {
                    title: "Ответственность за доказательство хранилища",
                    body: [
                        "Ваше доказательство хранилища является единственным аутентификационным реквизитом для смарт-контракта Qrypt-Safe. Qryptum не может восстановить, сбросить или обойти ваше доказательство хранилища ни при каких обстоятельствах.",
                        "Вы несёте полную ответственность за поддержание безопасности и конфиденциальности вашего доказательства хранилища. Утрата доказательства хранилища может привести к безвозвратной потере доступа к защищённым активам, кроме случаев использования механизма аварийного вывода, доступного после 180 дней бездействия.",
                    ],
                },
                {
                    title: "Отсутствие кастодиальных отношений",
                    body: [
                        "Qryptum не действует как хранитель, доверительный управляющий, фидуциар или контрагент в какой-либо транзакции. Все активы остаются под исключительным контролем логики смарт-контракта и учётных данных вашего кошелька.",
                    ],
                },
                {
                    title: "Риски",
                    intro: "Использование Qryptum сопряжено с неотъемлемыми рисками, включая:",
                    bullets: [
                        "Ошибки или уязвимости смарт-контрактов, несмотря на аудит и тестирование",
                        "Утрата доказательства хранилища, ведущая к недоступности активов",
                        "Перегрузка сети, волатильность цен на газ и сбои транзакций",
                        "Регуляторные изменения, влияющие на законность использования протокола",
                        "Хардфорки сети Ethereum или сбои инфраструктуры",
                    ],
                    post: [
                        "Вы признаёте и принимаете эти риски перед использованием протокола. Qryptum предоставляется «как есть» без каких-либо гарантий.",
                    ],
                },
                {
                    title: "Отсутствие финансовых рекомендаций",
                    body: [
                        "Ничто на сайте Qryptum или в документации протокола не является финансовым, инвестиционным, юридическим или налоговым советом. Перед принятием любых финансовых решений, связанных с цифровыми активами, проконсультируйтесь с квалифицированными специалистами.",
                    ],
                },
                {
                    title: "Запрещённое использование",
                    intro: "Вам запрещено использовать Qryptum для:",
                    bullets: [
                        "Обхода применимых законов или нормативных актов",
                        "Отмывания доходов от преступной деятельности",
                        "Манипулирования рынком или мошеннических транзакций",
                        "Нарушения целостности сети Ethereum",
                    ],
                },
                {
                    title: "Интеллектуальная собственность",
                    body: [
                        "Смарт-контракты Qryptum являются программным обеспечением с открытым исходным кодом. Название Qryptum, логотип и фирменные материалы являются собственностью и не могут использоваться без разрешения. Документация и контент сайта принадлежат проекту Qryptum.",
                    ],
                },
                {
                    title: "Ограничение ответственности",
                    body: [
                        "В максимально допустимой законом мере Qryptum и его участники не несут ответственности за любые прямые, косвенные, случайные, специальные или последующие убытки, возникшие в результате использования вами протокола, включая утрату активов, данных или прибыли.",
                    ],
                },
                {
                    title: "Изменения условий",
                    body: [
                        "Мы оставляем за собой право в любое время обновлять настоящие Условия. Обновлённые условия будут размещены на этой странице с указанием новой даты. Продолжение использования протокола после публикации изменений означает принятие обновлённых Условий.",
                    ],
                },
                {
                    title: "Применимое право",
                    body: [
                        "Настоящие Условия регулируются и толкуются в соответствии с применимым законодательством без учёта коллизионных норм. Любые споры разрешаются посредством обязательного арбитража там, где это допускается.",
                    ],
                },
                {
                    title: "Контакты",
                    contact: "По вопросам или юридическим запросам, касающимся настоящих Условий, обращайтесь к проекту Qryptum через каналы сообщества, указанные на этом сайте, или по email",
                },
            ],
        },
    },

    zh: {
        nav: {
            features: "功能特性",
            howItWorks: "工作原理",
            security: "安全机制",
            docs: "文档",
            launchApp: "启动应用",
        },
        common: {
            openApp: "启动应用",
            readDocs: "阅读文档",
            howItWorks: "工作原理",
            stepByStep: "分步说明",
            footerText: "非托管。开源。Ethereum L1。",
            verifiedBadge: "已验证",
            supersededBadge: "已废弃",
        },
        landing: {
            heroHeadline: "超越私钥的\n第二层防护。",
            heroHeadlineMobile: "超越私钥的\n第二层防护。",
            heroBody: "您的链上资产值得比私钥更多的保护。Qryptum 为您的 ERC-20 代币提供专为后量子时代设计的第二层防护。直接在 Ethereum L1 上部署您的个人屏障，完全掌控每一笔转账。",
            heroEtherscanBtn: "在 Etherscan 查看合约",

            logosLabel: "保护任意 ERC-20 代币",

            statsHeading: "直接在 Ethereum L1 上部署您的个人屏障，完全掌控每一笔转账。",
            statsHeadingMobile: "部署您自己的个人屏障。",
            statsBody: "即使私钥被泄露，也无法移动您的代币。Qryptum 在每笔交易中都需要独立于钱包密钥的加密金库证明。",
            statsCardTitle: "工作原理",
            statsCardSteps: [
                { step: "屏蔽", desc: "将任意 ERC-20 代币锁入您的个人 Qrypt-Safe 链上合约" },
                { step: "提交", desc: "提交您的金库证明的加密哈希" },
                { step: "转账", desc: "在链上揭示金库证明以授权交易" },
            ],

            useCasesLabel: "使用场景",
            useCasesHeading: "保护链上资产的\n全新方式。",
            useCasesQuantumTitle: "量子抗性设计",
            useCasesQuantumDesc: "keccak256 金库证明即使面对量子计算机也无法被逆向。即使 ECDSA 被破解，您的 Qrypt-Safe 依然安全。",
            useCasesQuantumCta: "阅读安全模型",
            useCasesCards: [
                { title: "防 SIM 卡劫持与网络钓鱼", desc: "即使攻击者拥有您的私钥，还需要第二层证明，而他们永远无法获得。任何工具、脚本或漏洞都无法绕过金库证明层。", cta: "了解屏蔽机制" },
                { title: "继承安全转账", desc: "为您的亲属设置 Qrypt-Safe 访问条件。资金被锁定，直到揭示正确的金库证明。无需律师，无需中间人。", cta: "探索 Qrypt-Safe 访问" },
                { title: "软件冷钱包", desc: "无需硬件设备。Qryptum 将任何浏览器变成冷存储级别的 Qrypt-Safe。在链上保护代币，随时随地访问。", cta: "立即体验" },
            ],

            howItWorksLabel: "工作原理",
            howItWorksHeading: "三个步骤，一个 Qrypt-Safe。",
            howItWorksSteps: [
                { title: "屏蔽", desc: "将 ERC-20 代币锁入 Qrypt-Safe。合约在链上锚定加密金库证明。没有它，任何交易都无法离开。" },
                { title: "授权", desc: "每次转账都需要提供加密金库证明。仅有被盗的私钥是不够的。没有证明，资产无法移动。" },
                { title: "转账", desc: "合约在链上验证加密金库证明。签名者和证明必须同时匹配。任一不符，交易立即回滚。" },
            ],

            ctaLabel: "立即开始",
            ctaTitle: "立即保护您的代币。",
            ctaBody: "Qryptum 已在以太坊主网上线。非托管。每笔转账都需要只有您才能生成的加密金库证明。",
            ctaBtn: "启动应用",
            ctaEtherscanBtn: "在 Etherscan 查看合约",

            footerTagline: "为您的 ERC-20 代币提供第二层防护。基于 Ethereum L1 构建。",
            footerColProduct: "产品",
            footerColDevelopers: "开发者",
            footerColCommunity: "社区",
            footerLinkLaunchApp: "启动应用",
            footerLinkTestnet: "测试网",
            footerLinkMainnet: "主网",
            footerLinkDocumentation: "文档",
            footerLinkGitHub: "GitHub",
            footerLinkTwitter: "Twitter / X",
            footerLinkTelegram: "Telegram",
            footerCopy: "2026 Qryptum. 保留所有权利。",
            footerPrivacy: "隐私政策",
            footerTerms: "服务条款",
        },
        privacy: {
            eyebrow: "法律信息",
            title: "隐私政策",
            lastUpdated: "最后更新：2026年4月",
            footerText: "非托管。开源。Ethereum L1。",
            sections: [
                {
                    title: "概述",
                    body: [
                        "Qryptum 是部署在 Ethereum L1 上的非托管智能合约协议。本隐私政策说明我们收集哪些信息、如何使用这些信息以及您对自己数据享有哪些权利。",
                        "由于 Qryptum 完全在链上运行，不需要账户注册、电子邮件地址或身份验证，我们收集的数据量在设计上就极为有限。",
                    ],
                },
                {
                    title: "我们不收集的信息",
                    intro: "Qryptum 不收集、存储或处理：",
                    bullets: [
                        "您的姓名、电子邮件地址或任何个人标识符",
                        "您的金库证明或任何加密秘密",
                        "KYC 或身份验证数据",
                        "除链上交易数据以外的支付信息",
                        "与钱包地址关联的 IP 地址",
                    ],
                },
                {
                    title: "链上数据",
                    intro: "与 Qryptum 协议的所有交互都发生在以太坊区块链上，这是一个公共账本。这包括：",
                    bullets: [
                        "用于与 Qrypt-Safe 合约交互的钱包地址",
                        "交易哈希和金额",
                        "智能合约事件（屏蔽、转账、解除屏蔽）",
                        "交互的区块时间戳",
                    ],
                    post: [
                        "这些数据被永久且公开地记录在以太坊区块链上。Qryptum 无法修改或删除它。区块链不在我们的控制范围内。",
                    ],
                },
                {
                    title: "分析与网站数据",
                    body: [
                        "Qryptum 网站可能收集匿名化的汇总使用数据，包括页面浏览量和功能交互。这些数据不识别个别用户，仅用于改进界面。",
                        "我们不使用跟踪像素、行为指纹识别或任何第三方广告分析。",
                    ],
                },
                {
                    title: "钱包连接",
                    body: [
                        "当您连接钱包（MetaMask、WalletConnect 或类似产品）时，我们会收到您的以太坊钱包地址。此地址仅用于与 Qryptum 智能合约交互。除链上记录外，它不会存储在我们控制的任何数据库中。",
                    ],
                },
                {
                    title: "第三方服务",
                    body: [
                        "Qryptum 可能链接到或集成第三方服务，包括 Etherscan、WalletConnect 和 Infura。这些服务依据各自的隐私政策运营。我们不对其数据处理行为负责。",
                    ],
                },
                {
                    title: "您的金库证明",
                    body: [
                        "您的金库证明在任何数据离开您的设备之前已在浏览器中进行哈希处理。我们从不接收、传输或以明文形式存储您的金库证明。只有 keccak256 哈希指纹被提交到智能合约。Qryptum 没有任何机制来恢复或访问您的金库证明。",
                    ],
                },
                {
                    title: "数据保留",
                    body: [
                        "由于我们运营的是非托管协议，我们不保留任何用户账户数据。唯一持久化的数据是以太坊区块链上存在的内容，而这不在我们的控制范围内。",
                    ],
                },
                {
                    title: "政策变更",
                    body: [
                        "我们可能会不时更新本隐私政策。变更将通过更新本页面顶部的日期来体现。变更后继续使用协议即表示接受修订后的政策。",
                    ],
                },
                {
                    title: "联系我们",
                    contact: "如有关于本隐私政策的问题，请通过本网站列出的社区渠道联系我们，或发送电子邮件至",
                },
            ],
        },
        quantumDesign: {
            heroBadge: "后量子安全",
            heroTitle: "为后量子时代而设计",
            heroSubtitle: "即使量子计算机破解了椭圆曲线密码学，keccak256 金库证明在数学上依然安全。您的 Qrypt-Safe 为未来而生。",
            heroStat1Value: "256位", heroStat1Label: "keccak256 输出", heroStat1Note: "量子安全哈希大小",
            heroStat2Value: "2\u00B9\u00B2\u2078", heroStat2Label: "抗碰撞性", heroStat2Note: "对抗 Grover 算法",
            heroStat3Value: "0", heroStat3Label: "椭圆曲线依赖", heroStat3Note: "金库证明仅使用哈希",
            heroStat4Value: "链上", heroStat4Label: "验证", heroStat4Note: "无需可信第三方",

            threatLabel: "量子威胁",
            threatHeading: "量子计算机可以破解您的私钥。它们无法破解 keccak256。",
            threatP1: "在足够强大的量子计算机上运行的 Shor 算法可以在多项式时间内分解大整数并解决离散对数问题。这破解了 RSA、ECDSA 以及今天保护 Ethereum 私钥的所有椭圆曲线方案。",
            threatP2: "好消息是：keccak256 是哈希函数，而非非对称密码方案。它没有可利用的代数结构。目前已知最好的量子攻击（Grover 算法）仅实现平方加速，将 256 位安全降至 128 位，这在计算上仍然不可行。",
            threatPoints: [
                "Shor 算法分解椭圆曲线数学：您的私钥暴露",
                "硬件钱包、助记词和 MetaMask 都依赖 ECDSA",
                "量子优势随量子比特数量扩展到容错阈值而增长",
                "以太坊计划迁移到后量子签名可能需要数年时间",
            ],

            keccakLabel: "密码学核心",
            keccakHeading: "雪崩效应使您的金库证明无懈可击",
            keccakBody: "每个 Qrypt-Safe 都在链上存储您金库证明的 keccak256 哈希。即使知道哈希也无法揭示原始输入。改变一个字符，哈希输出就会完全、不可预测且不可逆地改变。",
            keccakPropTitle: "为什么 keccak256 能抵抗量子攻击",
            keccakProps: [
                "原像抗性：哈希输出不会在数学上揭示其输入",
                "雪崩效应：1位输入变化翻转约50%的输出位",
                "仅 Grover 加速：量子最优情况为 2\u00B9\u00B2\u2078 次操作，仍然不可行",
                "SHA-3 家族：在 NIST 竞赛后设计，将量子对手纳入考量范围",
                "Shor 算法没有可利用的隐藏代数结构",
            ],

            pillar1Label: "第一层",
            pillar1Title: "暴力破解在计算上是不可能的",
            pillar1Body: "即使攻击者知道您的钱包地址、所有链上数据，并拥有无限算力，也无法逆向 keccak256 哈希来恢复您的金库证明。搜索空间为 2^256。即使量子计算机运行 Grover 算法将其减少到 2^128，也需要比可观测宇宙中存在的能量更多的能量才能穷举。",
            pillar1Highlight: "2^256 种可能的金库证明。不存在任何捷径。",

            pillar2Label: "第二层",
            pillar2Title: "您的金库证明独立于私钥",
            pillar2Body: "传统的 Ethereum 安全意味着单一因素：您的私钥。拥有它的人拥有一切。Qrypt-Safe 增加了第二个独立因素。即使您的 Ethereum 私钥、助记词和硬件设备全部被攻破，在没有单独金库证明的情况下也无法访问受保护的代币。",
            pillar2Highlight: "两个因素。两个独立的密码学层。",

            pillar3Label: "第三层",
            pillar3Title: "每笔交易都需要在以太坊上重新提供证明",
            pillar3Body: "与会话令牌或缓存凭据不同，每一次 Qrypt-Safe 操作都需要重新提供金库证明并在链上验证。没有会话可以劫持，没有 cookie 可以窃取，没有中间人可以攻破。以太坊虚拟机本身就是验证者。",
            pillar3Highlight: "无会话。无缓存。每次操作链上验证。",

            simLabel: "攻击模拟",
            simHeading: "当量子计算机瞄准您的钱包",
            simBody: "追踪量子级攻击者的完整攻击路径，看 Qrypt-Safe 金库证明层在哪里将其彻底阻止。",
            simSteps: [
                { n: "01", color: "#ef4444", title: "量子分解攻击", desc: "攻击者在公开的 Ethereum 地址上运行 Shor 算法。在多项式时间内从公钥恢复 ECDSA 私钥。" },
                { n: "02", color: "#f97316", title: "私钥暴露", desc: "攻击者现在控制了钱包。可以签署任何标准 Ethereum 交易。所有未受保护的代币立即面临风险。" },
                { n: "03", color: "#f59e0b", title: "尝试访问 Qrypt-Safe", desc: "攻击者尝试在受害者的 Qrypt-Safe 上调用 shield()、unshield() 或 commitTransfer()。因为拥有私钥，钱包签名通过。" },
                { n: "04", color: "#22c55e", title: "需要金库证明", desc: "智能合约将 keccak256(vaultProof) 与存储的哈希进行比较。攻击者没有金库证明。哈希无法逆转。量子计算无法暴力破解 2^128。" },
                { n: "05", color: "#06b6d4", title: "交易回滚", desc: "EVM 拒绝调用。攻击者损失 gas。受保护资产保持锁定。金库证明层成功阻止了量子级攻击。" },
            ],

            ctaLabel: "立即保护您的代币",
            ctaHeading: "量子计算机即将到来。您的金库证明已经准备好了。",
            ctaBody: "今天就部署您的 Qrypt-Safe。您的资产将获得第二个密码学层，椭圆曲线攻击无法触及，无论是今天还是大规模量子计算到来时。",
            ctaPrimary: "启动应用",
            ctaSecondary: "阅读安全模型",
        },
        terms: {
            eyebrow: "法律信息",
            title: "服务条款",
            lastUpdated: "最后更新：2026年4月",
            footerText: "非托管。开源。Ethereum L1。",
            sections: [
                {
                    title: "条款接受",
                    body: [
                        "通过访问或使用 Qryptum 协议、网站或任何相关界面，即表示您同意受本服务条款的约束。如果您不同意，请勿使用该协议。",
                        "本条款适用于 Qryptum 界面的所有用户，包括与部署在 Ethereum L1 上的智能合约交互的个人。",
                    ],
                },
                {
                    title: "协议性质",
                    body: [
                        "Qryptum 是部署在 Ethereum L1 上的非托管开源智能合约协议。Qryptum 在任何时候都不持有、管理、控制或访问您的资产。",
                        "所有交互直接在您的钱包和智能合约之间发生。一旦交易提交到区块链，Qryptum 就无法暂停、升级或覆盖交易。",
                    ],
                },
                {
                    title: "使用资格",
                    body: [
                        "只有在您所在司法管辖区法律允许的情况下，您才可以使用 Qryptum 协议。您声明您已达到法定年龄，且您的使用不违反任何适用的法律或法规，包括与数字资产、证券或金融工具相关的法律法规。",
                        "来自去中心化金融协议使用受限或被禁止的司法管辖区的用户不得使用 Qryptum。",
                    ],
                },
                {
                    title: "金库证明责任",
                    body: [
                        "您的金库证明是 Qrypt-Safe 智能合约的唯一身份验证凭据。在任何情况下，Qryptum 都无法恢复、重置或绕过您的金库证明。",
                        "您对维护金库证明的安全性和保密性承担全部责任。金库证明的丢失可能导致对受保护资产的永久性访问丧失，仅受180天不活动后可用的紧急提款机制约束。",
                    ],
                },
                {
                    title: "无托管关系",
                    body: [
                        "Qryptum 不充当任何交易的托管人、受托人、受信托人或对手方。所有资产均在智能合约逻辑和您的钱包凭据的独有控制下。",
                    ],
                },
                {
                    title: "风险",
                    intro: "使用 Qryptum 涉及固有风险，包括：",
                    bullets: [
                        "尽管经过审计和测试，智能合约仍可能存在错误或漏洞",
                        "金库证明丢失导致资产无法访问",
                        "网络拥堵、gas 价格波动和交易失败",
                        "影响协议使用合法性的监管变化",
                        "以太坊网络分叉或基础设施故障",
                    ],
                    post: [
                        "在使用协议之前，您承认并接受这些风险。Qryptum 按原样提供，不提供任何形式的保证。",
                    ],
                },
                {
                    title: "无财务建议",
                    body: [
                        "Qryptum 网站或协议文档中的任何内容均不构成财务、投资、法律或税务建议。在做出涉及数字资产的任何财务决策之前，您应咨询合格的专业人士。",
                    ],
                },
                {
                    title: "禁止使用",
                    intro: "您不得使用 Qryptum：",
                    bullets: [
                        "规避适用的法律或法规",
                        "洗白犯罪活动所得",
                        "从事市场操纵或欺诈性交易",
                        "干扰以太坊网络的完整性",
                    ],
                },
                {
                    title: "知识产权",
                    body: [
                        "Qryptum 智能合约是开源软件。Qryptum 名称、标志和品牌资产受到保护，未经许可不得使用。文档和网站内容归 Qryptum 项目所有。",
                    ],
                },
                {
                    title: "责任限制",
                    body: [
                        "在适用法律允许的最大范围内，Qryptum 及其贡献者对因您使用协议而产生的任何直接、间接、偶发、特殊或后果性损害不承担责任，包括资产、数据或利润的损失。",
                    ],
                },
                {
                    title: "条款变更",
                    body: [
                        "我们保留随时更新本条款的权利。更新后的条款将以修订日期发布在本页面。条款发布后继续使用协议即表示接受修订后的条款。",
                    ],
                },
                {
                    title: "管辖法律",
                    body: [
                        "本条款受适用法律管辖并据此解释，不考虑法律冲突条款。在法律允许的情况下，任何争议应通过具有约束力的仲裁解决。",
                    ],
                },
                {
                    title: "联系我们",
                    contact: "如有关于本条款的问题或法律查询，请通过本网站列出的社区渠道联系 Qryptum 项目，或发送电子邮件至",
                },
            ],
        },
    },
} as const;

export type TranslationSet = typeof translations.en;

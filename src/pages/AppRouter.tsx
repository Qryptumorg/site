import { Switch, Route } from "wouter";
import { LanguageProvider } from "@/lib/LanguageContext";
import LandingPage from "./LandingPage";
import DashboardPage from "./DashboardPage";
import CreateQryptSafePage from "./CreateQryptSafePage";
import NotFound from "./not-found";

// ─── Existing feature pages (kept at their slugs) ─────────────────────
import ShieldErc20Page from "./features/ShieldErc20Page";
import TransferShieldPage from "./features/TransferShieldPage";
import QTokenSystemPage from "./features/QTokenSystemPage";
import TransferEnginePage from "./features/TransferEnginePage";
import GettingShieldedPage from "./features/GettingShieldedPage";
import MakingTransfersPage from "./features/MakingTransfersPage";
import ExitingQryptSafePage from "./features/ExitingQryptSafePage";
import VaultProofSecurityPage from "./features/VaultProofSecurityPage";
import MevProtectionPage from "./features/MevProtectionPage";

// ─── Features: new pages ──────────────────────────────────────────────
import OneToOneBackingPage from "./features/OneToOneBackingPage";
import BurnOnUnshieldPage from "./features/BurnOnUnshieldPage";
import CommitPhasePage from "./features/CommitPhasePage";
import RevealPhasePage from "./features/RevealPhasePage";

// ─── How It Works: new pages ──────────────────────────────────────────
import ConnectWalletPage from "./features/ConnectWalletPage";
import CreateQryptSafeGuidePage from "./features/CreateQryptSafeGuidePage";
import ShieldTokensPage from "./features/ShieldTokensPage";
import EnterVaultProofPage from "./features/EnterVaultProofPage";
import CommitTransferPage from "./features/CommitTransferPage";
import RevealAndExecutePage from "./features/RevealAndExecutePage";
import BurnQtokensPage from "./features/BurnQtokensPage";
import ReceiveOriginalTokensPage from "./features/ReceiveOriginalTokensPage";
import EmergencyRecoveryPage from "./features/EmergencyRecoveryPage";

// ─── Quantum Design ───────────────────────────────────────────────────
import QuantumDesignPage from "./QuantumDesignPage";

// ─── Security: new pages ──────────────────────────────────────────────
import VaultProofHashingPage from "./features/VaultProofHashingPage";
import NoServerStoragePage from "./features/NoServerStoragePage";
import OnchainVerificationPage from "./features/OnchainVerificationPage";
import CommitRevealSchemePage from "./features/CommitRevealSchemePage";
import NonceProtectionPage from "./features/NonceProtectionPage";
import TimeLockedRevealsPage from "./features/TimeLockedRevealsPage";
import InactivityRulePage from "./features/InactivityRulePage";
import NoAdminKeysPage from "./features/NoAdminKeysPage";
import ImmutableContractsPage from "./features/ImmutableContractsPage";

// ─── Docs: new pages ──────────────────────────────────────────────────
import QuickStartGuidePage from "./features/QuickStartGuidePage";
import SupportedTokensPage from "./features/SupportedTokensPage";
import NetworkSupportPage from "./features/NetworkSupportPage";
import ShieldFactoryPage from "./features/ShieldFactoryPage";
import PersonalQryptSafeContractPage from "./features/PersonalQryptSafeContractPage";
import ShieldTokenContractPage from "./features/ShieldTokenContractPage";
import RestApiReferencePage from "./features/RestApiReferencePage";
import AbiAndAddressesPage from "./features/AbiAndAddressesPage";
import FaqPage from "./features/FaqPage";
import SepoliaVerifiedPage from "./SepoliaVerifiedPage";
  import SepoliaVerifiedV1Page from "./SepoliaVerifiedV1Page";
  import SepoliaVerifiedV2Page from "./SepoliaVerifiedV2Page";
import PrivacyPage from "./PrivacyPage";
import TermsPage from "./TermsPage";

export default function AppRouter() {
    return (
        <LanguageProvider>
        <Switch>
            {/* Core */}
            <Route path="/" component={LandingPage} />
            <Route path="/app" component={DashboardPage} />
            <Route path="/sepolia-verified" component={SepoliaVerifiedPage} />
              <Route path="/sepolia-verified-v1" component={SepoliaVerifiedV1Page} />
              <Route path="/sepolia-verified-v2" component={SepoliaVerifiedV2Page} />
            <Route path="/privacy" component={PrivacyPage} />
            <Route path="/terms" component={TermsPage} />

            {/* Features: Shield Protocol */}
            <Route path="/create-personal-qrypt-safe" component={CreateQryptSafePage} />
            <Route path="/shield-erc20-tokens" component={ShieldErc20Page} />
            <Route path="/transfer-shield" component={TransferShieldPage} />

            {/* Features: qToken System */}
            <Route path="/qtoken-system" component={QTokenSystemPage} />
            <Route path="/one-to-one-backing" component={OneToOneBackingPage} />
            <Route path="/burn-on-unshield" component={BurnOnUnshieldPage} />

            {/* Features: Transfer Engine */}
            <Route path="/transfer-engine" component={TransferEnginePage} />
            <Route path="/commit-phase" component={CommitPhasePage} />
            <Route path="/reveal-phase" component={RevealPhasePage} />
            <Route path="/mev-protection" component={MevProtectionPage} />

            {/* How It Works: Getting Shielded */}
            <Route path="/getting-shielded" component={GettingShieldedPage} />
            <Route path="/connect-wallet" component={ConnectWalletPage} />
            <Route path="/create-qrypt-safe" component={CreateQryptSafeGuidePage} />
            <Route path="/shield-tokens" component={ShieldTokensPage} />

            {/* How It Works: Making Transfers */}
            <Route path="/making-transfers" component={MakingTransfersPage} />
            <Route path="/enter-vault-proof" component={EnterVaultProofPage} />
            <Route path="/commit-transfer" component={CommitTransferPage} />
            <Route path="/reveal-and-execute" component={RevealAndExecutePage} />

            {/* How It Works: Exiting */}
            <Route path="/exiting-qrypt-safe" component={ExitingQryptSafePage} />
            <Route path="/burn-qtokens" component={BurnQtokensPage} />
            <Route path="/receive-original-tokens" component={ReceiveOriginalTokensPage} />
            <Route path="/emergency-recovery" component={EmergencyRecoveryPage} />

            {/* Quantum Design */}
            <Route path="/quantum-design" component={QuantumDesignPage} />

            {/* Security: Cryptographic Design */}
            <Route path="/vault-proof-security" component={VaultProofSecurityPage} />
            <Route path="/vault-proof-hashing" component={VaultProofHashingPage} />
            <Route path="/no-server-storage" component={NoServerStoragePage} />
            <Route path="/onchain-verification" component={OnchainVerificationPage} />

            {/* Security: Protocol Architecture */}
            <Route path="/commit-reveal-scheme" component={CommitRevealSchemePage} />
            <Route path="/nonce-protection" component={NonceProtectionPage} />
            <Route path="/time-locked-reveals" component={TimeLockedRevealsPage} />

            {/* Security: Emergency Recovery */}
            <Route path="/180-day-inactivity" component={InactivityRulePage} />
            <Route path="/no-admin-keys" component={NoAdminKeysPage} />
            <Route path="/immutable-contracts" component={ImmutableContractsPage} />

            {/* Docs: Getting Started */}
            <Route path="/quick-start-guide" component={QuickStartGuidePage} />
            <Route path="/supported-tokens" component={SupportedTokensPage} />
            <Route path="/network-support" component={NetworkSupportPage} />

            {/* Docs: Smart Contracts */}
            <Route path="/shield-factory" component={ShieldFactoryPage} />
            <Route path="/personal-qrypt-safe" component={PersonalQryptSafeContractPage} />
            <Route path="/shield-token" component={ShieldTokenContractPage} />

            {/* Docs: Integration Guide */}
            <Route path="/rest-api-reference" component={RestApiReferencePage} />
            <Route path="/abi-and-addresses" component={AbiAndAddressesPage} />
            <Route path="/faq" component={FaqPage} />

            <Route component={NotFound} />
        </Switch>
        </LanguageProvider>
    );
}

import { Switch, Route } from "wouter";
import LandingPage from "./LandingPage";
import DashboardPage from "./DashboardPage";
import CreateQryptankPage from "./CreateQryptankPage";
import NotFound from "./not-found";

// ─── Existing feature pages (kept at their slugs) ─────────────────────
import ShieldErc20Page from "./features/ShieldErc20Page";
import TransferShieldPage from "./features/TransferShieldPage";
import QTokenSystemPage from "./features/QTokenSystemPage";
import TransferEnginePage from "./features/TransferEnginePage";
import GettingShieldedPage from "./features/GettingShieldedPage";
import MakingTransfersPage from "./features/MakingTransfersPage";
import ExitingQryptankPage from "./features/ExitingQryptankPage";
import VaultProofSecurityPage from "./features/VaultProofSecurityPage";
import MevProtectionPage from "./features/MevProtectionPage";

// ─── Features: new pages ──────────────────────────────────────────────
import OneToOneBackingPage from "./features/OneToOneBackingPage";
import BurnOnUnshieldPage from "./features/BurnOnUnshieldPage";
import CommitPhasePage from "./features/CommitPhasePage";
import RevealPhasePage from "./features/RevealPhasePage";

// ─── How It Works: new pages ──────────────────────────────────────────
import ConnectWalletPage from "./features/ConnectWalletPage";
import CreateQryptankGuidePage from "./features/CreateQryptankGuidePage";
import ShieldTokensPage from "./features/ShieldTokensPage";
import EnterVaultProofPage from "./features/EnterVaultProofPage";
import CommitTransferPage from "./features/CommitTransferPage";
import RevealAndExecutePage from "./features/RevealAndExecutePage";
import BurnQtokensPage from "./features/BurnQtokensPage";
import ReceiveOriginalTokensPage from "./features/ReceiveOriginalTokensPage";
import EmergencyRecoveryPage from "./features/EmergencyRecoveryPage";

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
import PersonalQryptankContractPage from "./features/PersonalQryptankContractPage";
import ShieldTokenContractPage from "./features/ShieldTokenContractPage";
import RestApiReferencePage from "./features/RestApiReferencePage";
import AbiAndAddressesPage from "./features/AbiAndAddressesPage";
import FaqPage from "./features/FaqPage";

export default function AppRouter() {
    return (
        <Switch>
            {/* Core */}
            <Route path="/" component={LandingPage} />
            <Route path="/app" component={DashboardPage} />

            {/* Features: Shield Protocol */}
            <Route path="/create-personal-qryptank" component={CreateQryptankPage} />
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
            <Route path="/create-qryptank" component={CreateQryptankGuidePage} />
            <Route path="/shield-tokens" component={ShieldTokensPage} />

            {/* How It Works: Making Transfers */}
            <Route path="/making-transfers" component={MakingTransfersPage} />
            <Route path="/enter-vault-proof" component={EnterVaultProofPage} />
            <Route path="/commit-transfer" component={CommitTransferPage} />
            <Route path="/reveal-and-execute" component={RevealAndExecutePage} />

            {/* How It Works: Exiting */}
            <Route path="/exiting-qryptank" component={ExitingQryptankPage} />
            <Route path="/burn-qtokens" component={BurnQtokensPage} />
            <Route path="/receive-original-tokens" component={ReceiveOriginalTokensPage} />
            <Route path="/emergency-recovery" component={EmergencyRecoveryPage} />

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
            <Route path="/personal-qryptank" component={PersonalQryptankContractPage} />
            <Route path="/shield-token" component={ShieldTokenContractPage} />

            {/* Docs: Integration Guide */}
            <Route path="/rest-api-reference" component={RestApiReferencePage} />
            <Route path="/abi-and-addresses" component={AbiAndAddressesPage} />
            <Route path="/faq" component={FaqPage} />

            <Route component={NotFound} />
        </Switch>
    );
}

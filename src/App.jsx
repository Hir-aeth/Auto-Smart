import { Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import AppLayout from './layouts/AppLayout';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import DashboardSubPage from './pages/DashboardSubPage';
import BoutiquePage from './pages/BoutiquePage';
import ReservationsPage from './pages/ReservationsPage';
import ParametresPage from './pages/ParametresPage';
import ConduitePage from './pages/ConduitePage';
import CodePage from './pages/CodePage';
import TransactionsPage from './pages/TransactionsPage';
import DossierPage from './pages/DossierPage';
import ParrainagePage from './pages/ParrainagePage';
import ProfilPage from './pages/ProfilPage';
import PasswordPage from './pages/PasswordPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import SupportPage from './pages/SupportPage';
import ContratPage from './pages/ContratPage';

export default function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="dashboard/sub" element={<DashboardSubPage />} />
          <Route path="boutique" element={<BoutiquePage />} />
          <Route path="reservations" element={<ReservationsPage />} />
          <Route path="conduite" element={<ConduitePage />} />
          <Route path="code" element={<CodePage />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route path="dossier" element={<DossierPage />} />
          <Route path="parrainage" element={<ParrainagePage />} />
          <Route path="parametres" element={<ParametresPage />} />
          <Route path="parametres/profil" element={<ProfilPage />} />
          <Route path="parametres/password" element={<PasswordPage />} />
          <Route path="parametres/contact" element={<ContactPage />} />
          <Route path="parametres/legal" element={<LegalPage />} />
          <Route path="parametres/support" element={<SupportPage />} />
          <Route path="parametres/contrat" element={<ContratPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </AppProvider>
  );
}

import { useNavigate } from 'react-router-dom';

const ROUTE_MAP = {
  login: '/login',
  dashboard: '/dashboard',
  'dashboard-sub': '/dashboard/sub',
  boutique: '/boutique',
  reservations: '/reservations',
  parametres: '/parametres',
  conduite: '/conduite',
  code: '/code',
  transactions: '/transactions',
  dossier: '/dossier',
  parrainage: '/parrainage',
  profil: '/parametres/profil',
  password: '/parametres/password',
  contact: '/parametres/contact',
  legal: '/parametres/legal',
  support: '/parametres/support',
  contrat: '/parametres/contrat',
};

export function useNavigateTo() {
  const navigate = useNavigate();
  return (key) => navigate(ROUTE_MAP[key] ?? `/${key}`);
}

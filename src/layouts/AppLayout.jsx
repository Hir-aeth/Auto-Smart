import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import MobileBottomNav from '../components/MobileBottomNav';

export default function AppLayout() {
  return (
    <div className="as-shell">
      <Sidebar />
      <main className="as-main">
        <Outlet />
      </main>
      <MobileBottomNav />
    </div>
  );
}

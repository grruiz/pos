import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";

function MainLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default MainLayout;

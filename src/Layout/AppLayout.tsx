import { Outlet } from "react-router-dom";

import SideBar from "../Components/SideBar";
import MobileHeader from "../Components/MobileHeader";

const AppLayout = () => {
  return (
    <div className="block md:flex bg-bg text-text">
      <header className=" bg-sidebar-bg md:hidden">
        <MobileHeader />
      </header>
      <aside className="hidden md:flex basis-1/4 min-h-screen flex-col bg-sidebar-bg">
        <SideBar />
      </aside>
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;

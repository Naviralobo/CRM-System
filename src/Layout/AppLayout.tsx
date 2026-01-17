import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import SideBar from "../Components/SideBar";
import MobileHeader from "../Components/MobileHeader";

import { fetchLeads } from "../api/fetchUser";
import { setLeads } from "../store/leadSlice";

const AppLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const loadLeads = async () => {
      const storedLeads = localStorage.getItem("leads");
      if (storedLeads) return;

      const fetchedLeads = await fetchLeads();
      dispatch(setLeads(fetchedLeads));
    };
    loadLeads();
  }, []);
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

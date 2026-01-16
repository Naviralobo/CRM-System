import { NavLink } from "react-router-dom";

import Logo from "./Logo";

interface NavClassArgs {
  isActive: boolean;
}
const navBase =
  "p-3 md:p-4 rounded text-md md:text-xl transition-colors duration-500 ";
const navClass = ({ isActive }: NavClassArgs): string => {
  return `${navBase} ${isActive ? "bg-btn-bg text-sidebar-text" : ""}`;
};

const SideBar = () => {
  return (
    <>
      <div className="hidden md:block p-4">
        <Logo />
      </div>
      <section className="flex-1 flex flex-col">
        <NavLink to="/" className={navClass}>
          Dashboard
        </NavLink>
        <NavLink to="/leads" className={navClass}>
          Leads
        </NavLink>
      </section>
    </>
  );
};

export default SideBar;

import { useState } from "react";

import { Bars3Icon } from "@heroicons/react/24/outline";

import Logo from "./Logo";
import SideBar from "./SideBar";
const MobileHeader = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const switchDrawer = () => {
    setOpenDrawer((prev: boolean) => !prev);
  };

  return (
    <div className="flex justify-between align-middle p-4">
      <Logo />
      <div>
        <Bars3Icon className="h-6 w-6 cursor-pointer" onClick={switchDrawer} />
        {openDrawer && (
          <div
            className="absolute right-1 z-50 w-fit border rounded-xl bg-white"
            onClick={switchDrawer}
          >
            <SideBar />
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileHeader;

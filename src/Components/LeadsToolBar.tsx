import { useState } from "react";
import Button from "./Button";
import FilterLead from "./FilterLead";
import SearchLead from "./SearchLead";
import FormModal from "./Modals/FormModal";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";
const LeadsToolBar = () => {
  const [openFormModal, setOpenFormModal] = useState(false);
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const handleAddLead = () => {
    setOpenFormModal(true);
  };
  const handleToggle = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(document.documentElement.classList.contains("dark"));
  };
  return (
    <div className="flex items-center justify-between gap-3 p-4">
      <div className="flex gap-2 w-full md:w-auto">
        <SearchLead />
        <FilterLead />
      </div>
      <div className="flex gap-2 border border-input-border p-2 rounded-md">
        <SunIcon
          className={`h-6 w-6 cursor-pointer transition-all duration-200
    ${!isDark ? "text-btn-bg scale-110" : "text-text/40 hover:text-text"}
  `}
          onClick={handleToggle}
        />
        <MoonIcon
          className={`h-6 w-6 cursor-pointer transition-all duration-200
    ${isDark ? "text-btn-bg scale-110" : "text-text/40 hover:text-text"}
  `}
          onClick={handleToggle}
        />
      </div>
      {/* for large screens */}
      <div className="hidden md:block">
        <Button onClick={handleAddLead}> + Add lead</Button>
      </div>
      {/* for mobile */}
      <div
        onClick={handleAddLead}
        className="fixed flex bg-btn-bg  text-btn-text rounded-full w-12 h-12 justify-center items-center bottom-2 right-2 md:hidden"
      >
        +
      </div>
      <FormModal
        openFormModal={openFormModal}
        setOpenFormModal={setOpenFormModal}
        type="add"
      />
    </div>
  );
};

export default LeadsToolBar;

import { useState } from "react";
import Button from "./Button";
import FilterLead from "./FilterLead";
import SearchLead from "./SearchLead";
import FormModal from "./Modals/FormModal";
import ToggleButton from "./ToggleButton";

const LeadsToolBar = () => {
  const [openFormModal, setOpenFormModal] = useState(false);

  const handleAddLead = () => {
    setOpenFormModal(true);
  };

  return (
    <div className="flex items-center justify-between gap-3 p-4">
      <div className="flex gap-2 w-full md:w-auto">
        <SearchLead />
        <FilterLead />
        <ToggleButton />
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

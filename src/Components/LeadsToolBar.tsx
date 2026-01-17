import { useState } from "react";
import { useSelector } from "react-redux";

import { ArrowDownIcon } from "@heroicons/react/24/outline";

import Button from "./Button";
import FilterLead from "./FilterLead";
import SearchLead from "./SearchLead";
import FormModal from "./Modals/FormModal";
import ToggleButton from "./ToggleButton";

import type { RootState } from "../store/store";
import { exportCSVHandler } from "../helpers/exportCsv";

const LeadsToolBar = () => {
  const [openFormModal, setOpenFormModal] = useState(false);
  const leads = useSelector((state: RootState) => state.leads.leads);
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
      <div className="hidden md:flex gap-2">
        <Button onClick={() => exportCSVHandler(leads)}> Export CSV</Button>

        <Button onClick={handleAddLead}> + Add lead</Button>
      </div>
      {/* for mobile */}
      <div className="fixed flex gap-2 bottom-2 right-2 md:hidden">
        <div
          onClick={() => exportCSVHandler(leads)}
          className=" bg-btn-bg p-3 rounded-full"
        >
          <ArrowDownIcon className="h-6 w-6  text-btn-text font-extrabold " />
        </div>
        <div
          onClick={handleAddLead}
          className=" bg-btn-bg  text-btn-text rounded-full w-12 h-12 flex justify-center items-center "
        >
          <div className="text-4xl mb-2">+</div>
        </div>
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

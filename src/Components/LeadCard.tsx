import type { Lead } from "../types/Lead";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { BuildingOfficeIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import FormModal from "./Modals/FormModal";
import DeleteModal from "./Modals/DeleteModal";
import { useDispatch } from "react-redux";
import { deleteLead } from "../store/leadSlice";

interface LeadCardProps {
  lead: Lead;
}

const iconLineClass = "flex items-center gap-2";

const LeadCard = ({ lead }: LeadCardProps) => {
  const [openFormModal, setOpenFormModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setOpenFormModal((prev) => !prev);
  };

  const handleDelete = () => {
    setOpenDeleteModal((prev) => !prev);
  };

  const confirmDeleteHandler = () => {
    dispatch(deleteLead(lead));
  };
  const cancelDeleteHandler = () => {
    setOpenDeleteModal(false);
  };

  return (
    <div className="border-2 border-sidebar-bg rounded-xl p-2 bg-card-bg">
      <div className=" flex justify-between">
        <div className="text-sidebar-bg font-bold">{lead.username}</div>
        <div className="flex gap-2">
          <PencilSquareIcon
            className="h-5 cursor-pointer text-blue-700 transition-transform hover:scale-110"
            onClick={handleEdit}
          />
          <TrashIcon
            className="h-5 cursor-pointer  text-red-700 transition-transform hover:scale-110 "
            onClick={handleDelete}
          />
        </div>
      </div>
      <div className={iconLineClass}>
        <EnvelopeIcon className="h-4 text-red-700" />
        <div>{lead.email}</div>
      </div>
      <div className={iconLineClass}>
        <PhoneIcon className="h-4 text-blue-700" />
        {lead.phone}
      </div>
      <div className={iconLineClass}>
        <BuildingOfficeIcon className="h-4 text-green-900" />
        {lead.name}
      </div>
      <div>
        <span className="font-bold">Source:</span> {lead.website}
      </div>
      <div>
        <span className="font-bold">status:</span> leadStatus
      </div>
      {lead.notes && (
        <div>
          <span className="font-bold">notes: {lead.notes}</span> leadStatus
        </div>
      )}
      <FormModal
        openFormModal={openFormModal}
        setOpenFormModal={setOpenFormModal}
        formDataProp={lead}
      />
      <DeleteModal
        openDeleteModal={openDeleteModal}
        confirmDelete={confirmDeleteHandler}
        cancelDelete={cancelDeleteHandler}
      />
    </div>
  );
};

export default LeadCard;

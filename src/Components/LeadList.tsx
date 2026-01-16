import { useSelector } from "react-redux";
import LeadCard from "./LeadCard";
import type { RootState } from "../store/store";

const LeadList = () => {
  const leads = useSelector((state: RootState) => state.leads.leads);
  return (
    <div className="grid w-full lg:grid-cols-3 sm:grid-cols-2  gap-3 p-4 ">
      {leads.map((lead) => (
        <LeadCard key={lead.id} lead={lead} />
      ))}
  </div>
  );
};

export default LeadList;

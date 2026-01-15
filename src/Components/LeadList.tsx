import useLeads from "../hooks/useLeads";
import LeadCard from "./LeadCard";

const LeadList = () => {
  const leads = useLeads();
  return (
    <div className="grid w-full lg:grid-cols-3 sm:grid-cols-2  gap-3 p-4 ">
      {leads.map((lead) => (
        <LeadCard lead={lead} />
      ))}
    </div>
  );
};

export default LeadList;

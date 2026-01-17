import { useSelector } from "react-redux";
import { useMemo } from "react";

import LeadCard from "./LeadCard";

import type { RootState } from "../store/store";

const LeadList = () => {
  const leads = useSelector((state: RootState) => state.leads.leads);
  const search = useSelector((state: RootState) => state.leads.search);
  const filter = useSelector((state: RootState) => state.leads.filter);

  const filteredLeads = useMemo(() => {
    let leadsCopy = leads;
    if (filter !== "All") {
      leadsCopy = leadsCopy.filter((lead) => lead.status === filter);
    }
    if (search.trim()) {
      leadsCopy = leadsCopy.filter(
        (lead) =>
          lead.name.toLowerCase().includes(search.toLowerCase()) ||
          lead.company.toLowerCase().includes(search.toLowerCase())
      );
    }
    return leadsCopy;
  }, [leads, search, filter]);

  return (
    <div className="grid w-full lg:grid-cols-3 sm:grid-cols-2  gap-3 p-4 ">
      {filteredLeads.map((lead) => (
        <LeadCard key={lead.id} lead={lead} />
      ))}
    </div>
  );
};

export default LeadList;

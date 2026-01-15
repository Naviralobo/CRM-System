import { FunnelIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
const FilterLead = () => {
  return (
    <div className="flex gap-2 items-center justify-between px-2 border-2 border-sidebar-bg rounded-md">
      <div className="flex items-center gap-2">
        <FunnelIcon className="h-4 text-sidebar-bg" />
        <span className="hidden md:inline w-25">status</span>
      </div>
      <ChevronDownIcon className="h-4 text-sidebar-bg mt-1" />
    </div>
  );
};

export default FilterLead;

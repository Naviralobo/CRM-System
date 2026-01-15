import Button from "./Button";
import FilterLead from "./FilterLead";
import SearchLead from "./SearchLead";

const LeadsToolBar = () => {
  return (
    <div className="flex items-center justify-between gap-3 p-4">
      <div className="flex gap-2 w-full md:w-auto">
        <SearchLead />
        <FilterLead />
      </div>
      {/* for large screens */}
      <div className="hidden md:block">
        <Button> + Add lead</Button>
      </div>
      {/* for mobile */}
      <div className="fixed flex bg-btn-bg  text-btn-light rounded-full w-12 h-12 justify-center items-center bottom-2 right-2 md:hidden">
        +
      </div>
    </div>
  );
};

export default LeadsToolBar;

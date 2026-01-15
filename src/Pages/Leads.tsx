import LeadList from "../Components/LeadList";
import LeadsToolBar from "../Components/LeadsToolBar";

const Leads = () => {
  return (
    <div className="animate-fade-in">
      <LeadsToolBar />
      <LeadList />
    </div>
  );
};

export default Leads;

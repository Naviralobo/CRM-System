import { useDispatch } from "react-redux";
import { setSearch } from "../store/leadSlice";

const SearchLead = () => {
  const dispatch = useDispatch();

  const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };
  return (
    <input
      type="text"
      placeholder="Search leads..."
      className="rounded-md border-2 border-sidebar-bg p-2 md:flex-1"
      onChange={searchChangeHandler}
    />
  );
};

export default SearchLead;

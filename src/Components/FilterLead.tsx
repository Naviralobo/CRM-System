import { useDispatch } from "react-redux";
import { leadStatus } from "../helpers/variables";
import { setFilter } from "../store/leadSlice";
import type { FilterType } from "../types/Lead";
const FilterLead = () => {
  const dispatch = useDispatch();
  const filterChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter(e.target.value as FilterType));
  };
  return (
    <select
      name="status"
      aria-label="status"
      className=" flex gap-2  items-center justify-between px-2 border-2 border-input-border bg-input-bg rounded-md"
      onChange={filterChangeHandler}
    >
      {leadStatus.map((status) => (
        <option key={status} value={status} className="p-2">
          {status}
        </option>
      ))}
    </select>
  );
};

export default FilterLead;

import type { FilterType, Lead } from "../types/Lead";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface StateType {
  leads: Lead[];
  search: string;
  filter: FilterType;
}
const storedLeads = localStorage.getItem("leads");
const initialState: StateType = {
  leads: storedLeads ? JSON.parse(storedLeads) : [],
  search: "",
  filter: "All",
};

const leadSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    setLeads: (state, { payload }: PayloadAction<Lead[]>) => {
      state.leads = payload;
      localStorage.setItem("leads", JSON.stringify(state.leads));
    },
    addLead: (state, { payload }: PayloadAction<Lead>) => {
      const newId = (state.leads.at(-1)?.id ?? 0) + 1;
      const formDataToBeUpdated = { ...payload, id: newId };
      state.leads.push(formDataToBeUpdated);
      localStorage.setItem("leads", JSON.stringify(state.leads));
    },
    deleteLead: (state, { payload }: PayloadAction<Lead>) => {
      const index = state.leads.findIndex((lead) => payload.id === lead.id);
      if (index !== -1) state.leads.splice(index, 1);
      localStorage.setItem("leads", JSON.stringify(state.leads));
    },
    updateLead: (state, { payload }: PayloadAction<Lead>) => {
      const index = state.leads.findIndex((lead) => lead.id === payload.id);
      if (index !== -1) state.leads.splice(index, 1, payload);
      localStorage.setItem("leads", JSON.stringify(state.leads));
    },
    setFilter: (state, { payload }: PayloadAction<FilterType>) => {
      state.filter = payload;
    },
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
  },
});

export const {
  addLead,
  deleteLead,
  updateLead,
  setFilter,
  setSearch,
  setLeads,
} = leadSlice.actions;
export default leadSlice.reducer;

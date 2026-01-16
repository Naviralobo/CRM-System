import type { Lead } from "../types/Lead";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const storedLeads = localStorage.getItem("leads");

const initialState: { leads: Lead[] } = {
  leads: storedLeads ? JSON.parse(storedLeads) : [],
};

const leadSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    addLead: (state, { payload }: PayloadAction<Lead>) => {
      state.leads.push(payload);
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
  },
});

export const { addLead, deleteLead, updateLead } = leadSlice.actions;
export default leadSlice.reducer;

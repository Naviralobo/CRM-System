import axios from "axios";
import type { ApiUser, Lead } from "../types/Lead";

export const fetchLeads = async (): Promise<Lead[]> => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const leads = res.data;
    return leads.map((lead: ApiUser) => {
      return {
        name: lead.name,
        email: lead.email,
        id: lead.id,
        phone: lead.phone,
        company: lead.company?.name,
        website: lead.website,
        status: "New",
        notes: "",
      };
    });
  } catch (err: any) {
    console.log(err.message);
    return [];
  }
};

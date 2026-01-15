import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import { fetchLeads } from "../api/fetchUser";
import type { Lead } from "../types/Lead";

const useLeads = () => {
  const [leads, setLeads] = useLocalStorage<Lead[]>("leads", []);

  useEffect(() => {
    const loadLeads = async () => {
      const storedLeads = localStorage.getItem("leads");
      if (storedLeads) return;

      const fetchedLeads = await fetchLeads();
      setLeads(fetchedLeads);
    };
    loadLeads();
  }, []);

  return leads;
};

export default useLeads;

export interface Lead {
  id?: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  website?: string;
  notes?: string;
  status?: string;
}
export interface ApiUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
}
export type FilterType =
  | "All"
  | "New"
  | "Contacted"
  | "Follow-up"
  | "Converted"
  | "Lost";

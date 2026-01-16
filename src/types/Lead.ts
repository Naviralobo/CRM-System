export interface Lead {
  id?: number;
  username: string;
  email: string;
  phone: string;
  name: string;
  website?: string;
  notes?: string;
  status?:string
}

export type FilterType =
  | "All"
  | "New"
  | "Contacted"
  | "Follow-up"
  | "Converted"
  | "Lost";


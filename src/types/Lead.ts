export interface Lead {
  id: number;
  username: string;
  email: string;
  phone: string;
  name: string;
  website: string;
  notes?: string;
}

export interface FormData {
  username: string;
  email: string;
  phone: string;
  name: string;
  source: string;
  status: string;
  notes?: string;
}

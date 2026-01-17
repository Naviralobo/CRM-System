import type { Lead } from "../types/Lead";

const convertToCSV = (leads: Lead[]): string => {
  const csvArray = [];
  const headers = Object.keys(leads[0]).join(",");
  csvArray.push(headers);
  leads.map((lead) => {
    const eachRow = Object.values(lead).join(",");
    csvArray.push(eachRow);
  });
  const csvArrayString = csvArray.join("\n");
  return csvArrayString;
};

const downloadCSV = (CSV: string, filename: string) => {
  const blob = new Blob([CSV], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const exportCSVHandler = (leads: Lead[]) => {
  const csv: string = convertToCSV(leads);
  downloadCSV(csv, "CRM_Leads.csv");
};

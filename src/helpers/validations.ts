import type { Lead } from "../types/Lead";

const emailregex = /^[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-z]{2,}$/;
const phoneRegex = /^[1-9][0-9]{9}$/;

export const validateFormData = (formData: Lead) => {
  const { username, name, phone, email } = formData;
  const errors: Partial<Record<keyof Lead, string>> = {};

  if (!username.trim()) errors.username = "username is required";
  if (!name.trim()) errors.name = "company name is required";
  if (!phone.trim()) errors.phone = "phone is required";
  else if (!phoneRegex.test(phone)) errors.phone = "Invalid phone number";
  if (!email.trim()) errors.email = "email is required";
  else if (!emailregex.test(email)) errors.email = "Invalid Email";
  return errors;
};

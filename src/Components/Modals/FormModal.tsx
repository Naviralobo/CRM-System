import { useState } from "react";
import { leadsSource, leadStatus } from "../../helpers/variables";
import type { Lead } from "../../types/Lead";
import Button from "../Button";
import { validateFormData } from "../../helpers/validations";
import { useDispatch } from "react-redux";
import { addLead, updateLead } from "../../store/leadSlice";

interface FormModalProps {
  openFormModal: boolean;
  setOpenFormModal: React.Dispatch<React.SetStateAction<boolean>>;
  formDataProp?: Lead;
  type?: string;
}

const FormModal = ({
  openFormModal,
  setOpenFormModal,
  formDataProp,
  type,
}: FormModalProps) => {
  const [formData, setFormData] = useState<Lead>({
    id: formDataProp?.id,
    username: formDataProp?.username || "",
    email: formDataProp?.email || "",
    phone: formDataProp?.phone || "",
    name: formDataProp?.name || "",
    website: formDataProp?.website || "Website",
    status: formDataProp?.status || "New",
    notes: formDataProp?.notes || "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Lead, string>>>({});
  const dispatch = useDispatch();
  const inputClass = (fieldname: keyof Lead) =>
    `p-1 rounded-md border-2  ${
      errors[fieldname] ? "border-red-500" : "border-sidebar-bg"
    }`;
  const errorClass = "text-xs text-red-500";

  const handleFormData = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    if (value && errors[name as keyof Lead]) {
      const newErrors = { ...errors };
      delete newErrors[name as keyof Lead];
      setErrors(newErrors);
    }
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    const newErrors: Partial<Record<keyof Lead, string>> =
      validateFormData(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      type === "add"
        ? dispatch(addLead(formData))
        : dispatch(updateLead(formData));
      setOpenFormModal(false);
    }
  };

  return (
    <>
      {openFormModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fade-in ">
          <div className="bg-white w-full max-w-sm m-2 md:max-w-md rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-center">{`${
                type === "add" ? "Add" : "Edit"
              } Lead`}</h2>
              <button
                type="button"
                className="cursor-pointer px-1 rounded hover:border-2"
                onClick={() => setOpenFormModal(false)}
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-0.5">
              <label>
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Lead name"
                className={inputClass("username")}
                onChange={handleFormData}
                value={formData?.username}
                name="username"
              />
              <p className={errorClass}>{errors?.username}</p>
              <label>
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className={inputClass("email")}
                value={formData?.email}
                name="email"
                onChange={handleFormData}
              />
              <p className={errorClass}>{errors?.email}</p>

              <label>
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="phone"
                placeholder="Phone"
                className={inputClass("phone")}
                value={formData?.phone}
                name="phone"
                onChange={handleFormData}
              />
              <p className={errorClass}>{errors?.phone}</p>

              <label>
                Company Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Company name"
                className={inputClass("name")}
                onChange={handleFormData}
                value={formData?.name}
                name="name"
              />
              <p className={errorClass}>{errors?.name}</p>

              <label>
                Source<span className="text-red-500">*</span>
              </label>
              <select
                aria-label="Lead Source"
                name="website"
                className={inputClass("website")}
                onChange={handleFormData}
                value={formData?.website}
              >
                {leadsSource.map((source) => (
                  <option key={source} value={source}>
                    {source}
                  </option>
                ))}
              </select>
              <label>
                Status<span className="text-red-500">*</span>
              </label>
              <select
                aria-label="Lead Status"
                name="status"
                className={inputClass("status")}
                onChange={handleFormData}
                value={formData?.status}
              >
                {leadStatus.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              <label>Notes</label>
              <textarea
                onChange={handleFormData}
                placeholder="Add notes"
                className={inputClass("notes")}
                value={formData?.notes}
                name="notes"
              />
              <div className="flex justify-center">
                <Button type="submit" onClick={handleSubmit}>
                  {`${type === "add" ? "Add" : "Edit"} Lead`}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;

import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="text-btn-light bg-btn-bg p-3 rounded-md cursor-pointer hover:translate-px"
    >
      {children}
    </button>
  );
};

export default Button;

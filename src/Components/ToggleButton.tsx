import { useState } from "react";

import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";

const ToggleButton = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const handleToggle = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(document.documentElement.classList.contains("dark"));
  };

  return (
    <div className="flex gap-2 border border-input-border p-2 rounded-md">
      <SunIcon
        className={`h-6 w-6 cursor-pointer transition-all duration-200
    ${!isDark ? "text-btn-bg scale-110" : "text-text/40 hover:text-text"}
  `}
        onClick={handleToggle}
      />
      <MoonIcon
        className={`h-6 w-6 cursor-pointer transition-all duration-200
    ${isDark ? "text-btn-bg scale-110" : "text-text/40 hover:text-text"}
  `}
        onClick={handleToggle}
      />
    </div>
  );
};

export default ToggleButton;

import { useState } from "react";

const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [storedData, setStoredData] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (err) {
      console.log(err);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    setStoredData(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedData, setValue] as const;
};

export default useLocalStorage;

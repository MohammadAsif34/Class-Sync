import { useEffect, useState } from "react";
import { AppContext } from "./CreateContext";
import { useTodayDate } from "../hooks/useTodayDate";

export const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    const getTheme = localStorage.getItem("theme");
    if (!getTheme) return console.log("no theme");
    setTheme(getTheme);
  }, [setTheme]);

  const today = useTodayDate();
  const [dayRoutine, setDayRoutine] = useState(today);

  const [menu, setMenu] = useState(false);

  const [isDownload, setIsDownload] = useState(false);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        dayRoutine,
        setDayRoutine,
        menu,
        setMenu,
        isDownload,
        setIsDownload,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

import { createContext, FC, ReactNode, useContext, useState } from "react";
import { useIsMobile } from "../../hooks/use-is-mobile";
import { GeneralContextTypes } from "./types";

type GeneralContextProviderProps = {
  children: ReactNode;
};

const GeneralContext = createContext<GeneralContextTypes>(
  {} as GeneralContextTypes
);

export const GeneralContextProvider: FC<GeneralContextProviderProps> = ({
  children,
}) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const isMobile = useIsMobile();

  const value: GeneralContextTypes = {
    isMobile,
    isLightTheme,
    setIsLightTheme,
    isSideBarOpen,
    setIsSideBarOpen,
  };
  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
};

export const UseGeneral = () => {
  return useContext(GeneralContext);
};

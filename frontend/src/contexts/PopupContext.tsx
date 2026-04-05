import { createContext, useContext } from "react";


type PopupContextType = {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
  toggle: () => void;
};

export const PopupContext = createContext<PopupContextType>({
  isActive: false,
  setIsActive: () => { },
  toggle: () => { },
});

export function usePopup() {
  const context = useContext(PopupContext);
  if (!context) throw new Error("usePopup must be used within PopupProvider");
  return context;
}
    
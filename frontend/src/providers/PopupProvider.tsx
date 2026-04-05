import {PopupContext} from "../contexts/PopupContext";
import { useState } from "react";

export function PopupProvider({children}: {children: React.ReactNode}) {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => setIsActive(prev => !prev);

  return (
    <PopupContext.Provider value={{ isActive, setIsActive, toggle }}>
      {children}
    </PopupContext.Provider>
  );
}

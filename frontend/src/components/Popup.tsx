import { useEffect } from "react";
import ReactDOM from "react-dom";

interface PopupProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Popup({ title, children, onClose }: PopupProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="bg-[#161616] rounded-md p-3 w-[400px] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >

        {children}
      </div>
    </div>,
    document.body // renderiza direto no body, fora de qualquer overflow
  );
}
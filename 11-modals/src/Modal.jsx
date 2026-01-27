import { Children, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modlRoot = document.getElementById("modal");
    modlRoot.appendChild(elRef.current);
    return "TODO";
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;

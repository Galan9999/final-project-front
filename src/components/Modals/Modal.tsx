import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

import { useAppSelector } from "../../store/hooks";
import getModals from "./getModals";

const Modal = (): JSX.Element => {
  const {
    modal: { isError, message },
  } = useAppSelector((state) => state.ui);

  useEffect(() => {
    if (isError) {
      getModals(message);
    }
  }, [isError, message]);

  return <ToastContainer pauseOnFocusLoss />;
};

export default Modal;

import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import {
  unsetIsErrorModalActionCreator,
  unsetIsSuccessModalActionCreator,
} from "../../store/features/ui/uiSlice";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { showErrorModal, showSuccessModal } from "./getModals";

const Modal = (): JSX.Element => {
  const {
    modal: { isError, message, isSuccess },
  } = useAppSelector((state) => state.ui);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      showErrorModal(message);
      dispatch(unsetIsErrorModalActionCreator());
    }
  }, [isError, message, dispatch]);

  useEffect(() => {
    if (isSuccess) {
      showSuccessModal(message);
      dispatch(unsetIsSuccessModalActionCreator());
    }
  }, [isSuccess, message, dispatch]);

  return <ToastContainer />;
};

export default Modal;

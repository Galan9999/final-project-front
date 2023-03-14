import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const getModals = (message: string) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export default getModals;

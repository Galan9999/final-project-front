import Modal from "./Modal";
import { toast } from "react-toastify";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";

const showErrorModal = jest.spyOn(toast, "error");
const showSuccessModal = jest.spyOn(toast, "success");

describe("Given the Modal component", () => {
  describe("When its rendered with an error message 'Invalid Credentials!'", () => {
    test("Then it should show the ToastContainer component because of the error", () => {
      renderRouterWithProviders({
        ui: <Modal />,
        preloadedState: {
          user: { isLogged: false, token: "" },
          ui: {
            isLoading: false,
            modal: {
              isError: true,
              message: "Invalid Credentials",
              isSuccess: false,
            },
          },
        },
      });

      expect(showErrorModal).toHaveBeenCalled();
    });
  });

  describe("When its rendered with an error message 'Successfully deleted!'", () => {
    test("Then it should show the ToastContainer component because of the success", () => {
      renderRouterWithProviders({
        ui: <Modal />,
        preloadedState: {
          user: { isLogged: true, token: "werewr" },
          ui: {
            isLoading: false,
            modal: {
              isError: false,
              message: "Invalid Credentials",
              isSuccess: true,
            },
          },
        },
      });

      expect(showSuccessModal).toHaveBeenCalled();
    });
  });
});

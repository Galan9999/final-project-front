import Modal from "./Modal";
import { toast } from "react-toastify";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";

const getModals = jest.spyOn(toast, "error");

describe("Given the Modal component", () => {
  describe("When its rendered with an error message 'Invalid Credentials!'", () => {
    test("Then it should show the ToastContainer component because of the error", () => {
      renderRouterWithProviders({
        ui: <Modal />,
        preloadedState: {
          user: { isLogged: false, token: "" },
          ui: {
            isLoading: false,
            modal: { isError: true, message: "Invalid Credentials" },
          },
        },
      });

      expect(getModals).toHaveBeenCalled();
    });
  });
});

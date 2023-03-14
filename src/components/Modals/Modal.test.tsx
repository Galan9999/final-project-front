import { preloadedErrorUiState } from "../../mocks/uiPreloadedStates";
import Modal from "./Modal";
import { toast } from "react-toastify";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

const getModals = jest.spyOn(toast, "error");

describe("Given the Modal component", () => {
  describe("When its rendered with an error message 'Invalid Credentials!'", () => {
    test("Then it should show the ToastContainer component because of the error", () => {
      renderWithProviders(<Modal />, { ui: preloadedErrorUiState });

      expect(getModals).toHaveBeenCalled();
    });
  });
});

import { screen } from "@testing-library/react";
import { preloadedIsLoadingUiState } from "../../mocks/uiPreloadedStates";
import renderWithRouters from "../../utils/testUtils/renderRouterWithProviders";
import Layout from "../Layout/Layout";

describe("Given the Layout component", () => {
  describe("When rendered", () => {
    test("Then it should show a header with the logo of 'sentio'", () => {
      const expectedText = "logo of a brain with sentio written on the bottom";

      renderWithRouters({ ui: <Layout /> });

      const ariaLabelText = screen.getByLabelText(expectedText);

      expect(ariaLabelText).toBeInTheDocument();
    });
  });

  describe("When the page is loading", () => {
    test("Then it should show the loading animation", () => {
      const expectedLabelText = "the app is loading";

      renderWithRouters({
        ui: <Layout />,
        preloadedState: preloadedIsLoadingUiState,
      });

      const loader = screen.getByRole("dialog", { name: expectedLabelText });

      expect(loader).toBeInTheDocument();
    });
  });
});

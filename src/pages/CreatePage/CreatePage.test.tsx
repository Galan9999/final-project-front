import { screen } from "@testing-library/react";
import { mockedPreloadeStoreLoggedState } from "../../mocks/quotesPreloadedStates";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";
import CreatePage from "./CreatePage";

describe("Given the CreatePage component", () => {
  describe("When its rendered", () => {
    test("Then is should show a title with message 'create your quote!'", () => {
      const expectedTitleMessage = "create your quote!";
      renderRouterWithProviders({
        ui: <CreatePage />,
        preloadedState: mockedPreloadeStoreLoggedState,
      });

      const title = screen.getByRole("heading", {
        name: expectedTitleMessage,
        level: 1,
      });

      expect(title).toBeInTheDocument();
    });
  });
});

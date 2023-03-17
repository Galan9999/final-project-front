import { screen } from "@testing-library/react";
import { mockedPreloadeStoreWithListState } from "../../mocks/quotesPreloadedStates";
import renderWithRouters from "../../utils/testUtils/renderRouterWithProviders";
import HomePage from "./HomePage";

describe("Given the HomePage component", () => {
  describe("When its rendered", () => {
    test("Then is should show a list of cards with two cards of Carles and Catalina authors", () => {
      renderWithRouters({
        ui: <HomePage />,
        preloadedState: mockedPreloadeStoreWithListState,
      });

      const authorName = screen.getByRole("heading", {
        name: mockedPreloadeStoreWithListState.quotes[1].author,
        level: 2,
      });

      expect(authorName).toBeInTheDocument();
    });
  });
});

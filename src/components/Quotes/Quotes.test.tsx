import renderWithRouters from "../../utils/testUtils/renderRouterWithProviders";
import Quotes from "./Quotes";
import { mockedPreloadeStoreWithListState } from "../../mocks/quotesPreloadedStates";
import { screen } from "@testing-library/react";

describe("Given the Quotes component", () => {
  describe("When rendered with a list of quotes", () => {
    test("Then is should show a list of quotes with the two given quotes", () => {
      renderWithRouters({
        ui: <Quotes />,
        preloadedState: { quotes: mockedPreloadeStoreWithListState.quotes },
      });

      const authorName = screen.getByRole("heading", {
        name: mockedPreloadeStoreWithListState.quotes[1].author,
      });

      expect(authorName).toBeInTheDocument();
    });
  });
});

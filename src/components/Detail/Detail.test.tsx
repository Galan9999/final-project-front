import { screen } from "@testing-library/react";
import React from "react";
import { mockObamaCard } from "../../mocks/quotesPreloadedStates";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";
import Detail from "./Detail";

describe("Given the Detail component", () => {
  describe("When its rendered with 'Barack Obama'", () => {
    test.only("Then it should show a detail of 'Barack Obama'", () => {
      renderRouterWithProviders({
        ui: <Detail quote={mockObamaCard} />,
      });

      const authorName = screen.getByRole("heading", {
        name: mockObamaCard.author,
        level: 1,
      });

      expect(authorName).toBeInTheDocument();
    });
  });
});

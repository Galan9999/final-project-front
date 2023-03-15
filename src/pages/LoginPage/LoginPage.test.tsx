import { screen } from "@testing-library/react";
import renderWithProviders from "../../../utils/testUtils/renderWithProviders";
import LoginPage from "./LoginPage";

describe("Given the LoginPage component", () => {
  describe("When its rendered", () => {
    test("Then it should show a header with text 'Register for the event'", () => {
      renderWithProviders(<LoginPage />);

      const renderedTitle = screen.getByRole("heading", {
        name: "log-in",
      });

      expect(renderedTitle).toBeInTheDocument();
    });
  });
});

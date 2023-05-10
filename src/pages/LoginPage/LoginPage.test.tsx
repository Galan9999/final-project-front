import { screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";

describe("Given the LoginPage component", () => {
  describe("When its rendered", () => {
    test("Then it should show a header with text 'Register for the event'", () => {
      renderRouterWithProviders({
        ui: <LoginPage />,
        preloadedState: {
          user: {
            isLogged: false,
            token: "",
          },
        },
      });

      const renderedTitle = screen.getByRole("heading", {
        name: "log-in",
      });

      expect(renderedTitle).toBeInTheDocument();
    });
  });
});

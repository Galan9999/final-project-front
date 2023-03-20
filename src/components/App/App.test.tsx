import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";

describe("Given the App component", () => {
  describe("When rendered", () => {
    test("Then it should show a Header with the logo of 'sentio'", () => {
      const expectedText = "logo of a brain with sentio written on the bottom";

      renderRouterWithProviders({});

      const ariaLabelText = screen.getByLabelText(expectedText);

      expect(ariaLabelText).toBeInTheDocument();
    });
  });

  describe("When the button to login is clicked", () => {
    test("Then it should show the LoginPage with a 'log-in' heading", async () => {
      const loginRoute = "link to login";

      renderRouterWithProviders({
        preloadedState: {
          user: { isLogged: false, token: "token" },
        },
      });

      const loginLink = screen.getByRole("link", { name: loginRoute });

      await waitFor(async () => {
        await userEvent.click(loginLink);
      });

      const loginTitle = screen.getByRole("heading", {
        name: "log-in",
        level: 1,
      });

      expect(loginTitle).toBeInTheDocument();
    });
  });
});

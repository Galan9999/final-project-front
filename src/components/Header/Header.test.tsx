import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderRouterWithProviders, {
  RouterRenderOptions,
} from "../../utils/testUtils/renderRouterWithProviders";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When its rendered", () => {
    test("Then it should show the sentio's logo", () => {
      const expectedAriaLabelText =
        "logo of a brain with sentio written on the bottom";

      renderRouterWithProviders({ ui: <Header /> });

      const logoIcon = screen.getByLabelText(expectedAriaLabelText);

      expect(logoIcon).toBeInTheDocument();
    });

    test("Then it should show login logo", () => {
      const expectedAriaLabelText = "link to login";

      renderRouterWithProviders({ ui: <Header /> });

      const LoginIcon = screen.getByLabelText(expectedAriaLabelText);

      expect(LoginIcon).toBeInTheDocument();
    });

    test("Then it should show home logo", () => {
      const expectedAriaLabelText = "link to home";

      renderRouterWithProviders({ ui: <Header /> });

      const HomeIcon = screen.getByLabelText(expectedAriaLabelText);

      expect(HomeIcon).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a user logged in and user click on logout button", () => {
    test("Then it should show the button to login", async () => {
      const logoutLabelText = "logout";
      const loginLabelText = "login";

      const routerState: RouterRenderOptions = {
        preloadedState: {
          user: { isLogged: true, token: "token" },
        },
      };

      renderRouterWithProviders(routerState);

      const LogoutLink = screen.getByLabelText(logoutLabelText);

      await waitFor(async () => {
        await userEvent.click(LogoutLink);
      });

      const loginLink = screen.getByLabelText(loginLabelText);
      expect(loginLink).toBeInTheDocument();
    });
  });
});

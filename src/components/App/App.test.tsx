import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithRouters from "../../utils/testUtils/renderWithRouters";

describe("Given the App component", () => {
  describe("When rendered", () => {
    test("Then it should show a Header with the logo of 'sentio'", () => {
      const expectedText = "logo of a brain with sentio written on the bottom";

      renderWithRouters({});

      const ariaLabelText = screen.getByLabelText(expectedText);

      expect(ariaLabelText).toBeInTheDocument();
    });
  });

  describe("When the button to login is clicked", () => {
    test("Then it should show the LoginPage with a 'log-in' heading", async () => {
      const loginRoute = "log-in";

      renderWithRouters({});

      const user = userEvent.setup();

      const loginLink = screen.getByRole("link", { name: "login" });

      await waitFor(async () => {
        await user.click(loginLink);
      });

      const loginTitle = screen.getByRole("heading", {
        name: loginRoute,
        level: 1,
      });

      expect(loginTitle).toBeInTheDocument();
    });
  });
});

import { screen } from "@testing-library/react";
import renderWithRouters from "../../utils/testUtils/renderWithRouters";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When its rendered", () => {
    test("Then it should show the sentio's logo", () => {
      const expectedAriaLabelText =
        "logo of a brain with sentio written on the bottom";

      renderWithRouters({ ui: <Header /> });

      const logoIcon = screen.getByLabelText(expectedAriaLabelText);

      expect(logoIcon).toBeInTheDocument();
    });

    test("Then it should show login logo", () => {
      const expectedAriaLabelText = "link to login";

      renderWithRouters({ ui: <Header /> });

      const LoginIcon = screen.getByLabelText(expectedAriaLabelText);

      expect(LoginIcon).toBeInTheDocument();
    });

    test("Then it should show home logo", () => {
      const expectedAriaLabelText = "link to home";

      renderWithRouters({ ui: <Header /> });

      const HomeIcon = screen.getByLabelText(expectedAriaLabelText);

      expect(HomeIcon).toBeInTheDocument();
    });
  });
});

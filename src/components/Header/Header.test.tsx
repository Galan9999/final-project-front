import { screen } from "@testing-library/react";
import renderWithRouters from "../../utils/testUtils/renderWithRouters";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When its rendered", () => {
    test("Then it should show the sentio's logo", () => {
      const expectedAriaLabelText = "logo";

      renderWithRouters(<Header />);

      const logoIcon = screen.getByLabelText(expectedAriaLabelText);

      expect(logoIcon).toBeInTheDocument();
    });
  });

  test("Then it should show my list logo", () => {
    const expectedAriaLabelText = "my-list";

    renderWithRouters(<Header />);

    const myListIcon = screen.getByLabelText(expectedAriaLabelText);

    expect(myListIcon).toBeInTheDocument();
  });

  test("Then it should show login logo", () => {
    const expectedAriaLabelText = "login";

    renderWithRouters(<Header />);

    const LoginIcon = screen.getByLabelText(expectedAriaLabelText);

    expect(LoginIcon).toBeInTheDocument();
  });

  test("Then it should show logout logo", () => {
    const expectedAriaLabelText = "logout";

    renderWithRouters(<Header />);

    const LogoutIcon = screen.getByLabelText(expectedAriaLabelText);

    expect(LogoutIcon).toBeInTheDocument();
  });

  test("Then it should show home logo", () => {
    const expectedAriaLabelText = "home";

    renderWithRouters(<Header />);

    const HomeIcon = screen.getByLabelText(expectedAriaLabelText);

    expect(HomeIcon).toBeInTheDocument();
  });
});

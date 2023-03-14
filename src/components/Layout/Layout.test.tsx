import { screen } from "@testing-library/react";
import renderWithRouters from "../../utils/testUtils/renderWithRouters";
import Layout from "../Layout/Layout";

describe("Given the Layout component", () => {
  describe("When rendered", () => {
    test("Then it should show a header with the logo of 'sentio'", () => {
      const expectedText = "logo";

      renderWithRouters(<Layout />);

      const ariaLabelText = screen.getByLabelText(expectedText);

      expect(ariaLabelText).toBeInTheDocument();
    });
  });
});

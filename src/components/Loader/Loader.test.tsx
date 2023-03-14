import Loader from "./Loader";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

describe("Given a Loader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a loading animation with accessible text 'the app is loading'", () => {
      renderWithProviders(<Loader />);

      const accessibleText = "the app is loading";
      const loader = screen.getByLabelText(accessibleText);
      expect(loader).toBeInTheDocument();
    });
  });
});

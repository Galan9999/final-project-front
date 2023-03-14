import Loader from "./Loader";
import { screen } from "@testing-library/react";
import renderWithRouters from "../../utils/testUtils/renderWithRouters";

describe("Given a Loader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a loading animation with accessible text 'the app is loading'", () => {
      renderWithRouters(<Loader />);

      const accessibleText = "the app is loading";
      const loader = screen.getByLabelText(accessibleText);
      expect(loader).toBeInTheDocument();
    });
  });
});

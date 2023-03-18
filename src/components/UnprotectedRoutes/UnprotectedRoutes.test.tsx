import UnprotectedRoutes from "./UnprotectedRoutes";
import renderRouterWithProviders, {
  RouterRenderOptions,
} from "../../utils/testUtils/renderRouterWithProviders";
import { screen } from "@testing-library/react";

describe("Given the UnprotectedRoutes component", () => {
  describe("When a not logged user without token and rendered a container with text `Loren Ipsum`", () => {
    test("Then it should show the container with text `Loren Ispum`", () => {
      const text = "Loren Ipsum";
      const containerWithText = <div>{text}</div>;

      const routerAndState: RouterRenderOptions = {
        ui: <UnprotectedRoutes children={containerWithText} />,
        preloadedState: {
          user: { isLogged: false, token: "" },
        },
      };

      renderRouterWithProviders(routerAndState);

      const expectedRenderedText = screen.queryByText(text);

      expect(expectedRenderedText).toBeInTheDocument();
    });
  });
  describe("When it is rendered with a container with text `Loren Ipsum` and logged user with token", () => {
    test("Then it shoudn't show the container with text `Loren Ipsum`", () => {
      const text = "Loren Ipsum";
      const containerWithText = <div>{text}</div>;

      const routerAndState: RouterRenderOptions = {
        ui: <UnprotectedRoutes children={containerWithText} />,
        preloadedState: {
          user: { isLogged: true, token: "token" },
        },
      };

      renderRouterWithProviders(routerAndState);

      const expectedRenderedText = screen.queryByText(text);

      expect(expectedRenderedText).not.toBeInTheDocument();
    });
  });
});

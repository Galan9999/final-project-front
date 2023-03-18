import ProtectedRoutes from "./ProtectedRoutes";
import renderRouterWithProviders, {
  RouterRenderOptions,
} from "../../utils/testUtils/renderRouterWithProviders";
import { screen } from "@testing-library/react";

describe("Given the ProtectedRoutes component", () => {
  describe("When a logged user with token and rendered a container with text `Loren Ipsum` and user without token", () => {
    test("Then it should show the container with text `Loren Ispum`", () => {
      const text = "Loren Ipsum";
      const containerWithText = <div>{text}</div>;

      const routerAndState: RouterRenderOptions = {
        ui: <ProtectedRoutes children={containerWithText} />,
        preloadedState: {
          user: { isLogged: false, token: "token" },
        },
      };

      renderRouterWithProviders(routerAndState);

      const expectedRenderedText = screen.queryByText(text);

      expect(expectedRenderedText).toBeInTheDocument();
    });
  });
  describe("When it is rendered with a container with text `Loren Ipsum` and user without token", () => {
    test("Then it shoudn't show the container with text `Loren Ipsum`", () => {
      const text = "Loren Ipsum";
      const containerWithText = <div>{text}</div>;

      const routerAndState: RouterRenderOptions = {
        ui: <ProtectedRoutes children={containerWithText} />,
        preloadedState: {
          user: { isLogged: false, token: "" },
        },
      };

      renderRouterWithProviders(routerAndState);

      const expectedRenderedText = screen.queryByText(text);

      expect(expectedRenderedText).not.toBeInTheDocument();
    });
  });
});

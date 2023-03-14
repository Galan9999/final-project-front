import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithRouters from "../../utils/testUtils/renderWithRouters";
import LoginForm from "./LoginForm";

const mockLoginUser = jest.fn();

jest.mock("../../hooks/useUserApi.ts", () => () => ({
  loginUser: mockLoginUser,
}));

describe("Given the LoginForm component", () => {
  describe("When rendered", () => {
    test("Then it should show an input field with a label 'username'", () => {
      const inputLabelText = "username";

      renderWithRouters(<LoginForm />);

      const inputField = screen.getByLabelText(inputLabelText);

      expect(inputField).toBeInTheDocument();
    });

    test("Then is should show and input field with label 'password'", () => {
      const inputLableText = "password";

      renderWithRouters(<LoginForm />);

      const inputField = screen.getByLabelText(inputLableText);

      expect(inputField).toBeInTheDocument();
    });
  });

  describe("When it is render and the button is clicked with the fields written", () => {
    test("Then is should call the  function handleOnSubmit", async () => {
      const inputUsernametext = "username";
      const inputPasswordText = "password";
      const buttonText = "log-in";

      renderWithRouters(<LoginForm />);

      const renderedUsernameInput = screen.getByLabelText(inputUsernametext);
      const renderedPasswordInput = screen.getByLabelText(inputPasswordText);
      const renderedbutton = screen.getByRole("button", { name: buttonText });

      await waitFor(async () => {
        await userEvent.type(renderedUsernameInput, "Gemma");
        await userEvent.type(renderedPasswordInput, "1234567");
        await userEvent.click(renderedbutton);
      });

      const expectedCall = {
        username: "Gemma",
        password: "1234567",
      };

      expect(mockLoginUser).toBeCalledWith(expectedCall);
    });
  });
});

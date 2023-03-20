import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";
import CreateForm from "./CreateForm";

const mockCreateQuote = jest.fn();

jest.mock("../../hooks/useQuotesApi/useQuotesApi.ts", () => () => ({
  createQuote: mockCreateQuote,
}));

describe("Given the CreateForm component", () => {
  describe("When rendered", () => {
    test("Then it should show an input field with a label 'author'", () => {
      const inputLabelText = "author";

      renderRouterWithProviders({ ui: <CreateForm /> });

      const inputField = screen.getByLabelText(inputLabelText);

      expect(inputField).toBeInTheDocument();
    });

    test("Then is should show and input field with label 'image'", () => {
      const inputLableText = "image";

      renderRouterWithProviders({ ui: <CreateForm /> });

      const inputField = screen.getByLabelText(inputLableText);

      expect(inputField).toBeInTheDocument();
    });

    test("Then is should show and input field with label 'country'", () => {
      const inputLableText = "country";

      renderRouterWithProviders({ ui: <CreateForm /> });

      const inputField = screen.getByLabelText(inputLableText);

      expect(inputField).toBeInTheDocument();
    });

    test("Then is should show and input field with label 'quote'", () => {
      const inputLableText = "quote";

      renderRouterWithProviders({ ui: <CreateForm /> });

      const inputField = screen.getByLabelText(inputLableText);

      expect(inputField).toBeInTheDocument();
    });

    test("Then is should show and input field with label 'tags'", () => {
      const inputLableText = "tags";

      renderRouterWithProviders({ ui: <CreateForm /> });

      const inputField = screen.getByLabelText(inputLableText);

      expect(inputField).toBeInTheDocument();
    });

    test("Then is should show and input field with label 'lived'", () => {
      const inputLableText = "lived";

      renderRouterWithProviders({ ui: <CreateForm /> });

      const inputField = screen.getByLabelText(inputLableText);

      expect(inputField).toBeInTheDocument();
    });

    test("Then is should show and input field with label 'backgroundInfo'", () => {
      const inputLableText = "backgroundInfo";

      renderRouterWithProviders({ ui: <CreateForm /> });

      const inputField = screen.getByLabelText(inputLableText);

      expect(inputField).toBeInTheDocument();
    });
  });

  describe("When it is render and the button is clicked with the fields written", () => {
    test("Then is should call the  function handleOnSubmit", async () => {
      const inputAuthortext = "author";
      const inputImageText = "image";
      const inputCountryText = "country";
      const inputQuoteText = "quote";
      const inputTagsText = "tags";
      const inputLivedText = "lived";
      const inputBackgroundInfoText = "backgroundInfo";
      const buttonText = "create";

      renderRouterWithProviders({ ui: <CreateForm /> });

      const renderedAuthortext = screen.getByLabelText(inputAuthortext);
      const renderedImageText = screen.getByLabelText(inputImageText);
      const renderedCountryText = screen.getByLabelText(inputCountryText);
      const renderedQuoteText = screen.getByLabelText(inputQuoteText);
      const renderedTagsText = screen.getByLabelText(inputTagsText);
      const renderedLivedText = screen.getByLabelText(inputLivedText);
      const renderedBackgroundInfoText = screen.getByLabelText(
        inputBackgroundInfoText
      );
      const renderedbutton = screen.getByRole("button", { name: buttonText });

      await act(async () => await userEvent.type(renderedAuthortext, "René"));
      await act(async () => await userEvent.type(renderedImageText, "image"));
      await act(
        async () => await userEvent.type(renderedCountryText, "country")
      );
      await act(async () => await userEvent.type(renderedQuoteText, "quote"));
      await act(async () => await userEvent.type(renderedTagsText, "tags"));
      await act(async () => await userEvent.type(renderedLivedText, "lived"));
      await act(
        async () =>
          await userEvent.type(renderedBackgroundInfoText, "backgroundInfo")
      );
      await act(async () => await userEvent.click(renderedbutton));

      const expectedCall = {
        author: "René",
        image: "image",
        country: "country",
        quote: "quote",
        tags: "tags",
        lived: "lived",
        backgroundInfo: "backgroundInfo",
      };
      expect(mockCreateQuote).toBeCalledWith(expectedCall);
    });
  });
});

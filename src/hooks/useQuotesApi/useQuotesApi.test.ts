import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import Wrapper from "../../mocks/Wrapper";
import { loadQuotesActionCreator } from "../../store/features/quotes/quotesSlice";
import { store } from "../../store/store";
import useQuotesApi from "./useQuotesApi";

const spiedDispatch = jest.spyOn(store, "dispatch");

beforeAll(() => jest.clearAllMocks());

const mockedApiResponse = {
  quotes: [
    {
      author: "Frida Kahlo",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/440px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg",
      country: "Mexico",
      quote: "Feet, what do I need them for if I have wings to fly?",
      tags: ["artists"],
      lived: "1907 - 1954",
      backgroundInfo:
        "Frida Kahlo was a Mexican painter known for her self-portraits, which often incorporated elements of her physical and emotional pain.",
    },
  ],
};

describe("Given the useQuotesApi function", () => {
  describe("When its called and returns a 200 with a list of quotes", () => {
    test("Then it should call dispatch with loadQuotes action", async () => {
      const {
        result: {
          current: { loadQuotes },
        },
      } = renderHook(() => useQuotesApi(), { wrapper: Wrapper });

      await loadQuotes();

      expect(spiedDispatch).toHaveBeenCalledWith(
        loadQuotesActionCreator(mockedApiResponse.quotes)
      );
    });
  });
  describe("When there is a problem with the response from the api", () => {
    beforeEach(() => {
      server.use(...errorHandlers);
    });
    test("Then it should return and error with message 'Something Went Wrong!'", async () => {
      const {
        result: {
          current: { loadQuotes },
        },
      } = renderHook(() => useQuotesApi(), { wrapper: Wrapper });

      await loadQuotes();

      expect(spiedDispatch).toHaveBeenCalledTimes(3);
    });
  });
});

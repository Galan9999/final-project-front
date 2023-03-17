import { QuotesStructure } from "../../../types";
import { loadQuotesActionCreator, quotesReducer } from "./quotesSlice";

describe("Given the quotes reducer function", () => {
  describe("When its called with loadQuotes action", () => {
    test("Then it should return a list of quotes", () => {
      const currentQuotesState: QuotesStructure = [
        {
          id: "",
          author: "",
          image: "",
          country: "",
          quote: "",
          tags: [""],
          lived: "",
          backgroundInfo: "",
        },
      ];
      const expectedQuotesState: QuotesStructure = [
        {
          id: "",
          author: "Albert Einstein",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/440px-Albert_Einstein_Head.jpg",
          country: "Germany",
          quote:
            "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
          tags: ["philosophers"],
          lived: "1879 - 1955",
          backgroundInfo:
            "Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics.",
        },
      ];

      const newQuotesState = quotesReducer(
        currentQuotesState,
        loadQuotesActionCreator(expectedQuotesState)
      );

      expect(newQuotesState).toStrictEqual(expectedQuotesState);
    });
  });
});

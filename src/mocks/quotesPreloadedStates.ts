import { StoreStructure, QuotesStructure } from "../types";

export const mockedQuotes: QuotesStructure = [
  {
    id: "1",
    author: "Catalina",
    image: "",
    country: "",
    quote: "",
    tags: [""],
    lived: "",
    backgroundInfo: "",
  },
  {
    id: "2",
    author: "Carles",
    image: "",
    country: "",
    quote: "",
    tags: [""],
    lived: "",
    backgroundInfo: "",
  },
];

export const mockedPreloadeStoreWithListState: StoreStructure = {
  user: { isLogged: false, token: "" },
  ui: { isLoading: false, modal: { isError: false, message: "" } },
  quotes: [
    {
      id: "1",
      author: "Catalina",
      image: "image",
      country: "Argentina",
      quote: "hola",
      tags: [""],
      lived: "",
      backgroundInfo: "",
    },
    {
      id: "2",
      author: "Carles",
      image: "image",
      country: "Spain",
      quote: "holi",
      tags: [""],
      lived: "",
      backgroundInfo: "",
    },
  ],
};

export const mockedPreloadeStoreLoggedState: StoreStructure = {
  user: { isLogged: true, token: "tokensito" },
  ui: { isLoading: false, modal: { isError: false, message: "" } },
  quotes: [
    {
      id: "1",
      author: "Catalina",
      image: "",
      country: "",
      quote: "",
      tags: [""],
      lived: "",
      backgroundInfo: "",
    },
    {
      id: "2",
      author: "Carles",
      image: "",
      country: "",
      quote: "",
      tags: [""],
      lived: "",
      backgroundInfo: "",
    },
  ],
};

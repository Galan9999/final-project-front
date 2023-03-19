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
  ui: {
    isLoading: false,
    modal: { isError: false, message: "", isSuccess: false },
  },
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
  ui: {
    isLoading: false,
    modal: { isError: false, message: "", isSuccess: false },
  },
  quotes: [
    {
      id: "1",
      author: "Barack Obama",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/440px-President_Barack_Obama.jpg",
      country: "United States",
      quote:
        "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
      tags: ["politics"],
      lived: "1961 - present",
      backgroundInfo:
        "Barack Obama is an American politician and attorney who served as the 44th president of the United States from 2009 to 2017.",
    },
    {
      id: "2",
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
  ],
};

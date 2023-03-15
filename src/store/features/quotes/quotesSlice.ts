import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuotesStructure } from "../../../types";

const initialState: QuotesStructure = [
  {
    author: "",
    image: "",
    country: "",
    quote: "",
    tags: [""],
    lived: "",
    backgroundInfo: "",
  },
];

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    loadQuotes: (
      currentState: QuotesStructure,
      action: PayloadAction<QuotesStructure>
    ): QuotesStructure => [...action.payload],
  },
});

export const { loadQuotes: loadQuotesActionCreator } = quotesSlice.actions;
export const quotesReducer = quotesSlice.reducer;

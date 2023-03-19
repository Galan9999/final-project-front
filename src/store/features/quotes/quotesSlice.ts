import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuotesStructure } from "../../../types";

const initialState: QuotesStructure = [
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

const quotesSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    loadQuotes: (
      currentQuoteState,
      { payload }: PayloadAction<QuotesStructure>
    ): QuotesStructure => [...payload],
    deleteByIdQuote: (currentQuoteState, { payload }: PayloadAction<string>) =>
      currentQuoteState.filter((quote) => quote.id !== payload),
  },
});

export const {
  loadQuotes: loadQuotesActionCreator,
  deleteByIdQuote: deleteQuoteByIdActionCreator,
} = quotesSlice.actions;
export const quotesReducer = quotesSlice.reducer;

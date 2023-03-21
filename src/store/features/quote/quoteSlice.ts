import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuoteStructure } from "../../../types";

const initialState: QuoteStructure = {
  id: "",
  author: "",
  image: "",
  country: "",
  quote: "",
  tags: "",
  lived: "",
  backgroundInfo: "",
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    loadQuoteById: (
      currentQuoteState,
      { payload }: PayloadAction<QuoteStructure>
    ): QuoteStructure => ({ ...payload }),
  },
});

export const { loadQuoteById: loadQuoteByIdActionCreator } = quoteSlice.actions;
export const quoteReducer = quoteSlice.reducer;

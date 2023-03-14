import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UiStructure } from "../../../types";

const initialState: UiStructure = {
  isLoading: false,
  modal: {
    message: "",
    isError: false,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsLoading: (currentUiState: UiStructure): UiStructure => ({
      ...currentUiState,
      isLoading: true,
    }),
    unsetIsLoading: (currentUiState: UiStructure): UiStructure => ({
      ...currentUiState,
      isLoading: false,
    }),
    setIsErrorModal: (
      currentUiState: UiStructure,
      { payload }: PayloadAction<string>
    ): UiStructure => ({
      ...currentUiState,
      modal: {
        ...currentUiState.modal,
        message: payload,
        isError: true,
      },
    }),
    unsetIsErrorModal: (currentUiState: UiStructure): UiStructure => ({
      ...currentUiState,
      modal: {
        ...currentUiState.modal,
        message: initialState.modal.message,
        isError: initialState.modal.isError,
      },
    }),
  },
});
export const {
  setIsLoading: setIsLoadingActionCreator,
  unsetIsLoading: unsetIsLoadingActionCreator,
  setIsErrorModal: setIsErrorModalActionCreator,
  unsetIsErrorModal: unsetIsErrorModalActionCreator,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;

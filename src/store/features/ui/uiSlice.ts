import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UiStructure } from "../../../types";

const initialState: UiStructure = {
  isLoading: false,
  modal: {
    message: "",
    isError: false,
    isSuccess: false,
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
    setIsSuccessModal: (
      currentUiState: UiStructure,
      { payload }: PayloadAction<string>
    ): UiStructure => ({
      ...currentUiState,
      modal: {
        ...currentUiState.modal,
        message: payload,
        isSuccess: true,
      },
    }),
    unsetIsSuccessModal: (currentUiState: UiStructure): UiStructure => ({
      ...currentUiState,
      modal: {
        ...currentUiState.modal,
        message: initialState.modal.message,
        isSuccess: initialState.modal.isSuccess,
      },
    }),
  },
});
export const {
  setIsLoading: setIsLoadingActionCreator,
  unsetIsLoading: unsetIsLoadingActionCreator,
  setIsErrorModal: setIsErrorModalActionCreator,
  unsetIsErrorModal: unsetIsErrorModalActionCreator,
  setIsSuccessModal: setIsSuccessModalActionCreator,
  unsetIsSuccessModal: unsetIsSuccessModalActionCreator,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;

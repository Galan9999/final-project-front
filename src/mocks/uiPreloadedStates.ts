import { UiLoadingStructure, UiStructure } from "../types";

export const preloadedErrorUiState: UiStructure = {
  isLoading: false,
  modal: {
    message: "Invalid Credentials!",
    isError: true,
    isSuccess: false,
  },
};

export const preloadedIsLoadingUiState: UiLoadingStructure = {
  user: { isLogged: false, token: "" },
  ui: {
    isLoading: true,
    modal: { isError: false, message: "", isSuccess: false },
  },
};

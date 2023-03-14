import { UiStructure } from "../../../types";
import {
  setIsErrorModalActionCreator,
  setIsLoadingActionCreator,
  uiReducer,
  unsetIsErrorModalActionCreator,
  unsetIsLoadingActionCreator,
} from "./uiSlice";

describe("Given the uiSlice reducer function", () => {
  describe("When it receives the setIsLoading action", () => {
    test("Then it should set isLoading to true", () => {
      const currentUiState: UiStructure = {
        isLoading: false,
        modal: {
          isError: false,
          message: "",
        },
      };
      const expectedUiState: UiStructure = {
        isLoading: true,
        modal: {
          isError: false,
          message: "",
        },
      };
      const newUiState = uiReducer(currentUiState, setIsLoadingActionCreator());

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives the unsetIsLoading action", () => {
    test("Then it should set isLoading to false", () => {
      const currentUiState: UiStructure = {
        isLoading: true,
        modal: {
          isError: false,
          message: "",
        },
      };
      const expectedUiState: UiStructure = {
        isLoading: false,
        modal: {
          isError: false,
          message: "",
        },
      };

      const newUiState = uiReducer(
        currentUiState,
        unsetIsLoadingActionCreator()
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives the setErrorModal action", () => {
    test("Then it should set isErrorModal to true with error message", () => {
      const currentUiState: UiStructure = {
        isLoading: true,
        modal: {
          isError: false,
          message: "",
        },
      };
      const expectedUiState: UiStructure = {
        isLoading: true,
        modal: {
          isError: true,
          message: "error message",
        },
      };

      const newUiState = uiReducer(
        currentUiState,
        setIsErrorModalActionCreator(expectedUiState.modal.message)
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
  describe("When it receives the unsetModal action", () => {
    test("Then it should set isModal to false", () => {
      const currentUiState: UiStructure = {
        isLoading: true,
        modal: {
          isError: false,
          message: "",
        },
      };
      const expectedUiState: UiStructure = {
        isLoading: true,
        modal: {
          isError: false,
          message: "",
        },
      };

      const newUiState = uiReducer(
        currentUiState,
        unsetIsErrorModalActionCreator()
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});

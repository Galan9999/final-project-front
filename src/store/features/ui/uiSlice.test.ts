import { UiStructure } from "../../../types";
import {
  setIsErrorModalActionCreator,
  setIsLoadingActionCreator,
  setIsSuccessModalActionCreator,
  uiReducer,
  unsetIsErrorModalActionCreator,
  unsetIsLoadingActionCreator,
  unsetIsSuccessModalActionCreator,
} from "./uiSlice";

describe("Given the uiSlice reducer function", () => {
  describe("When it receives the setIsLoading action", () => {
    test("Then it should set isLoading to true", () => {
      const currentUiState: UiStructure = {
        isLoading: false,
        modal: {
          isError: false,
          message: "",
          isSuccess: false,
        },
      };
      const expectedUiState: UiStructure = {
        isLoading: true,
        modal: {
          isError: false,
          message: "",
          isSuccess: false,
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
          isSuccess: false,
        },
      };
      const expectedUiState: UiStructure = {
        isLoading: false,
        modal: {
          isError: false,
          message: "",
          isSuccess: false,
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
          isSuccess: false,
        },
      };
      const expectedUiState: UiStructure = {
        isLoading: true,
        modal: {
          isError: true,
          message: "error message",
          isSuccess: false,
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
          isSuccess: false,
        },
      };
      const expectedUiState: UiStructure = {
        isLoading: true,
        modal: {
          isError: false,
          message: "",
          isSuccess: false,
        },
      };

      const newUiState = uiReducer(
        currentUiState,
        unsetIsErrorModalActionCreator()
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
  describe("When it receives the setIsSucces action", () => {
    test("Then it should set isSuccess to true with success message", () => {
      const currentUiState: UiStructure = {
        isLoading: true,
        modal: {
          isError: false,
          message: "",
          isSuccess: false,
        },
      };
      const expectedUiState: UiStructure = {
        isLoading: true,
        modal: {
          isError: false,
          message: "success message",
          isSuccess: true,
        },
      };

      const newUiState = uiReducer(
        currentUiState,
        setIsSuccessModalActionCreator(expectedUiState.modal.message)
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
  describe("When it receives the unsetIsSuccessModal action", () => {
    test("Then it should set isSuccessModal to false", () => {
      const currentUiState: UiStructure = {
        isLoading: true,
        modal: {
          isError: false,
          message: "",
          isSuccess: true,
        },
      };
      const expectedUiState: UiStructure = {
        isLoading: true,
        modal: {
          isError: false,
          message: "",
          isSuccess: false,
        },
      };

      const newUiState = uiReducer(
        currentUiState,
        unsetIsSuccessModalActionCreator()
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});

import { renderHook } from "@testing-library/react";
import useUserApi from "./useUserApi";
import { errorTypes } from "../types";
import {
  setIsErrorModalActionCreator,
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/ui/uiSlice";
import { store } from "../../store/store";
import Wrapper from "../../mocks/Wrapper";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/user/userSlice";
import { server } from "../../mocks/server";
import { LoginCredentials } from "../../types";
import { errorHandlers } from "../../mocks/handlers";

const { defaultErrorMessage } = errorTypes;

const mockedRightCredentials: LoginCredentials = {
  username: "Lluis",
  password: "123456789",
};

const mockedWrongCredentials: LoginCredentials = {
  username: "Lluisdwe",
  password: "1234wefwef56789",
};

const spiedDispatch = jest.spyOn(store, "dispatch");

beforeAll(() => jest.clearAllMocks());

describe("Given the useUserApi function", () => {
  describe("When its called with right credentials", () => {
    const {
      result: {
        current: { loginUser },
      },
    } = renderHook(() => useUserApi(), { wrapper: Wrapper });
    test("Then it should call the dispatch with the loginUserAction", async () => {
      await loginUser(mockedRightCredentials);

      expect(spiedDispatch).toHaveBeenCalledWith(
        loginUserActionCreator("token")
      );
    });

    test("Then is should call the Dispatch twice with the set and unsetIsLoading action", async () => {
      await loginUser(mockedRightCredentials);

      const setIsloadinAction = setIsLoadingActionCreator();
      const unsetIsLoadingAction = unsetIsLoadingActionCreator();

      expect(spiedDispatch).toHaveBeenCalledWith(setIsloadinAction);

      expect(spiedDispatch).toHaveBeenCalledWith(unsetIsLoadingAction);
    });
  });

  describe("When it's called and there is an error", () => {
    beforeEach(() => {
      server.use(...errorHandlers);
    });

    test("Then it should call dispatch with error 'Something Went Wrong!", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUserApi(), { wrapper: Wrapper });

      await loginUser(mockedWrongCredentials);

      const setModalAction = setIsErrorModalActionCreator(defaultErrorMessage);

      expect(spiedDispatch).toHaveBeenCalledWith(setModalAction);
    });
  });

  describe("Given the logOut function", () => {
    describe("When it is called", () => {
      test("Then it should logOut the user", () => {
        const {
          result: {
            current: { logOutUser },
          },
        } = renderHook(() => useUserApi(), { wrapper: Wrapper });

        const actionCall = logoutUserActionCreator();
        logOutUser();

        expect(spiedDispatch).toBeCalledWith(actionCall);
      });
    });
  });
});

describe("Given getStorageToken", () => {
  describe("When it is called and there isnt a token in the local storage", () => {
    test("Then it shouldnt login the user", () => {
      const {
        result: {
          current: { checkStorageToken },
        },
      } = renderHook(() => useUserApi(), { wrapper: Wrapper });

      checkStorageToken();

      expect(spiedDispatch).not.toBeCalled();
    });
  });

  describe("When it is called and there is a token in the local storage", () => {
    test("Then it should login the user", () => {
      const {
        result: {
          current: { checkStorageToken },
        },
      } = renderHook(() => useUserApi(), { wrapper: Wrapper });

      localStorage.setItem("token", "token");

      const expectedDispatchCaller = loginUserActionCreator("token");

      checkStorageToken();

      expect(spiedDispatch).toBeCalledWith(expectedDispatchCaller);

      localStorage.removeItem("token");
    });
  });
});

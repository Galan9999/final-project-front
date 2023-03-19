import { useAppDispatch } from "../../store/hooks";
import { LoginCredentials } from "../../types";
import {
  setIsLoadingActionCreator,
  setIsErrorModalActionCreator,
  unsetIsLoadingActionCreator,
  unsetIsErrorModalActionCreator,
} from "../../store/features/ui/uiSlice";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/user/userSlice";
import { errorTypes } from "../types";
import { useCallback } from "react";

const ApiUrl = process.env.REACT_APP_URL_API_USERS;
const userEndpoint = "/users";
const loginEndpoint = "/login";

const { defaultErrorMessage } = errorTypes;

const useUserApi = () => {
  const dispatch = useAppDispatch();
  const uiDispatch = useAppDispatch();

  const loginUser = async (userCredentials: LoginCredentials) => {
    try {
      uiDispatch(unsetIsErrorModalActionCreator());

      uiDispatch(setIsLoadingActionCreator());
      const response = await fetch(`${ApiUrl}${userEndpoint}${loginEndpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });

      if (!response.ok) {
        throw new Error();
      }

      const { token } = await response.json();

      localStorage.setItem("token", token);

      dispatch(loginUserActionCreator(token));

      uiDispatch(unsetIsLoadingActionCreator());
    } catch (error) {
      uiDispatch(unsetIsLoadingActionCreator());
      uiDispatch(setIsErrorModalActionCreator(defaultErrorMessage));
    }
  };

  const logOutUser = () => {
    localStorage.removeItem("token");

    dispatch(logoutUserActionCreator());
  };

  const checkStorageToken = useCallback(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    dispatch(loginUserActionCreator(token));
  }, [dispatch]);

  return { loginUser, logOutUser, checkStorageToken };
};
export default useUserApi;

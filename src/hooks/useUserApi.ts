import { useAppDispatch } from "../store/hooks";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../store/features/user/userSlice";
import {
  setIsLoadingActionCreator,
  setIsErrorModalActionCreator,
  unsetIsLoadingActionCreator,
  unsetIsErrorModalActionCreator,
} from "../store/features/ui/uiSlice";
import { LoginCredentials } from "../types";
import { errorTypes } from "./types";

const ApiUrl = process.env.REACT_APP_URL_API_USERS;
const userEndpoint = "/users";
const loginEndpoint = "/login";

const { defaultErrorMessage, invalidCredentialsErrorMessage } = errorTypes;

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

      if (response.status === 401) {
        throw new Error(invalidCredentialsErrorMessage);
      }

      if (!response.ok) {
        throw new Error(defaultErrorMessage);
      }

      const { token } = await response.json();

      localStorage.setItem("token", token);

      dispatch(loginUserActionCreator(token));

      uiDispatch(unsetIsLoadingActionCreator());
    } catch (error) {
      uiDispatch(unsetIsLoadingActionCreator());
      uiDispatch(setIsErrorModalActionCreator((error as Error).message));
    }
  };

  const logOutUser = () => {
    localStorage.removeItem("token");

    dispatch(logoutUserActionCreator());
  };

  return { loginUser, logOutUser };
};
export default useUserApi;

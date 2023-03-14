import { UserState } from "../../../types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given the User reducer function", () => {
  describe("When it receives current state and loginUserAction", () => {
    test("Then it should return the user with token: 'iu23' and property isLogged: true", () => {
      const currentUser: UserState = {
        token: "",
        isLogged: false,
      };
      const expetedUserState: UserState = {
        token: "holitoken",
        isLogged: true,
      };

      const newUserState = userReducer(
        currentUser,
        loginUserActionCreator("holitoken")
      );

      expect(newUserState).toStrictEqual(expetedUserState);
    });
  });
  describe("When it receives a logoutUserAction", () => {
    test("Then it should return a user without token and property isLogged to false", () => {
      const currentUser: UserState = {
        token: "holitoken",
        isLogged: true,
      };
      const expetedUserState: UserState = {
        token: "",
        isLogged: false,
      };

      const newUserState = userReducer(currentUser, logoutUserActionCreator());

      expect(newUserState).toStrictEqual(expetedUserState);
    });
  });
});

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../../types";

const initialUserState: UserState = {
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (
      currentUserState,
      action: PayloadAction<string>
    ): UserState => ({
      ...currentUserState,
      token: action.payload,
      isLogged: true,
    }),
    logoutUser: () => ({ ...initialUserState }),
  },
});

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
export const userReducer = userSlice.reducer;

import { useState } from "react";
import useUserApi from "../../hooks/useUserApi/useUserApi";
import { LoginCredentials } from "../../types";
import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = () => {
  const { loginUser } = useUserApi();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginCredentials: LoginCredentials = {
      username,
      password,
    };

    loginUser(loginCredentials);
  };

  return (
    <LoginFormStyled className="form" onSubmit={handleOnSubmit}>
      <label className="login-form__label" htmlFor="username">
        username
      </label>
      <input
        onChange={handleChangeUsername}
        value={username}
        className="login-form__input"
        placeholder="introduce username"
        name="username"
        id="username"
        type="text"
        required
      ></input>

      <label className="login-form__label" htmlFor="password">
        password
      </label>
      <input
        onChange={handleChangePassword}
        value={password}
        className="login-form__input"
        placeholder="introduce password"
        name="password"
        id="password"
        type="password"
        required
      ></input>
      <Button text="log-in" />
    </LoginFormStyled>
  );
};

export default LoginForm;

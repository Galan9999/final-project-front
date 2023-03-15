import LoginForm from "../../LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyles";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled className="login-page">
      <h1 className="login-page__title">log-in</h1>
      <LoginForm />
      <div className="login-page__register-section">
        <span className="login-page__register-text">
          already have an account?
        </span>
        <a
          className="login-page__register-link"
          href="register"
          aria-label="register link"
        >
          register here
        </a>
      </div>
    </LoginPageStyled>
  );
};

export default LoginPage;

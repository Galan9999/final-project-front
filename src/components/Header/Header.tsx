import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/rightArrow.svg";
import { ReactComponent as BackArrow } from "../../assets/icons/backArrow.svg";
import { ReactComponent as Create } from "../../assets/icons/create.svg";
import { ReactComponent as Home } from "../../assets/icons/home.svg";

import { useAppSelector } from "../../store/hooks";
import HeaderStyled from "./HeaderStyles";
import useUserApi from "../../hooks/useUserApi/useUserApi";

const Header = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  const { logOutUser } = useUserApi();

  return (
    <HeaderStyled className="header">
      <div className="header__logo">
        <Logo
          className="header__logo"
          aria-label="logo of a brain with sentio written on the bottom"
        />
      </div>
      <div className="header__navigation">
        {isLogged && (
          <NavLink to="/create" aria-label="link to create">
            <Create className="header__create" aria-label="create image" />
          </NavLink>
        )}

        {!isLogged && (
          <NavLink to="/login" aria-label="link to login">
            <RightArrow className="header__login" aria-label="login" />
          </NavLink>
        )}

        {isLogged && (
          <NavLink to="/home" aria-label="logout link">
            <BackArrow
              onClick={logOutUser}
              className="header__logout"
              aria-label="logout"
            />
          </NavLink>
        )}

        <NavLink to="/home" aria-label="link to home">
          <Home className="header__home" aria-label="home" />
        </NavLink>
      </div>
    </HeaderStyled>
  );
};

export default Header;

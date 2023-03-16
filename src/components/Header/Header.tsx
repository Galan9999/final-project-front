import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/rightArrow.svg";
import { ReactComponent as BackArrow } from "../../assets/icons/backArrow.svg";
import { ReactComponent as MyList } from "../../assets/icons/myList.svg";
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
          <NavLink to="/my-list">
            <MyList className="header__my-list" aria-label="link to my list" />
          </NavLink>
        )}

        {!isLogged && (
          <NavLink to="/login" aria-label="login">
            <RightArrow className="header__login" aria-label="link to login" />
          </NavLink>
        )}

        {isLogged && (
          <BackArrow
            onClick={logOutUser}
            className="header__logout"
            aria-label="logout button"
          />
        )}

        <NavLink to="/home">
          <Home className="header__home" aria-label="link to home" />
        </NavLink>
      </div>
    </HeaderStyled>
  );
};

export default Header;

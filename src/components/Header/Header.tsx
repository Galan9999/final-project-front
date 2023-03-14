import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/rightArrow.svg";
import { ReactComponent as BackArrow } from "../../assets/icons/backArrow.svg";
import { ReactComponent as MyList } from "../../assets/icons/myList.svg";
import { ReactComponent as Book } from "../../assets/icons/book.svg";

import { useAppSelector } from "../../store/hooks";
import HeaderStyled from "./HeaderStyles";

const Header = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);

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
          <NavLink to="/">
            <BackArrow className="header__logout" aria-label="link to logout" />
          </NavLink>
        )}

        <NavLink to="/home">
          <Book className="header__to-home" aria-label="link to home" />
        </NavLink>
      </div>
    </HeaderStyled>
  );
};

export default Header;

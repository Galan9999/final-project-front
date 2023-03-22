import { PropsWithChildren, useEffect } from "react";
import { Outlet } from "react-router-dom";
import useUserApi from "../../hooks/useUserApi/useUserApi";
import { useAppSelector } from "../../store/hooks";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import Modal from "../Modals/Modal";
import LayoutStyled from "./LayoutStyled";

const Layout = ({ children }: PropsWithChildren): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);
  const { checkStorageToken } = useUserApi();

  useEffect(() => checkStorageToken(), [checkStorageToken]);
  return (
    <LayoutStyled>
      <Header />
      <main>
        {isLoading && <Loader />}
        <Modal />
        <Outlet />
      </main>
    </LayoutStyled>
  );
};

export default Layout;

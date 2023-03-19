import { PropsWithChildren, useEffect } from "react";
import { Outlet } from "react-router-dom";
import useUserApi from "../../hooks/useUserApi/useUserApi";
import { useAppSelector } from "../../store/hooks";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import Modal from "../Modals/Modal";

const Layout = ({ children }: PropsWithChildren): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);
  const { checkStorageToken } = useUserApi();

  useEffect(() => checkStorageToken(), [checkStorageToken]);
  return (
    <>
      <Header />
      <main>
        {isLoading && <Loader />}
        <Modal />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

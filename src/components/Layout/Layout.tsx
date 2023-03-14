import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import Modal from "../Modals/Modal";

const Layout = ({ children }: PropsWithChildren): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);

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

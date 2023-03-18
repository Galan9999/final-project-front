import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

const UnprotectedRoutes = ({ children }: PropsWithChildren): JSX.Element => {
  const {
    user: { isLogged },
  } = useAppSelector((state) => state);

  return isLogged ? <Navigate to={"/home"} replace={true} /> : <>{children}</>;
};

export default UnprotectedRoutes;

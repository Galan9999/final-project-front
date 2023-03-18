import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

const ProtectedRoutes = ({ children }: PropsWithChildren): JSX.Element => {
  const {
    user: { token },
  } = useAppSelector((state) => state);

  return token ? <>{children}</> : <Navigate to={"/home"} />;
};

export default ProtectedRoutes;

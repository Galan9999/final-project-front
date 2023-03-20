import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../components/App/App";
import CreateForm from "../components/CreateForm/CreateForm";
import Layout from "../components/Layout/Layout";
import ProtectedRoutes from "../components/ProtectedRoutes/ProtectedRoutes";
import UnprotectedRoutes from "../components/UnprotectedRoutes/UnprotectedRoutes";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: (
      <Layout>
        <div>Page not found</div>
      </Layout>
    ),
    children: [
      {
        path: "/",
        element: <Navigate to={"/home"} />,
      },
      {
        path: "/login",
        element: (
          <UnprotectedRoutes>
            <LoginPage />
          </UnprotectedRoutes>
        ),
      },
      {
        path: "/create",
        element: (
          <ProtectedRoutes>
            <CreateForm />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

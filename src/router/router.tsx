import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../components/App/App";
import Layout from "../components/Layout/Layout";
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
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

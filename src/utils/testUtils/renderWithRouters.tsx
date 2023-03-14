import { PreloadedState } from "@reduxjs/toolkit";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "../../router/router";
import { RootState } from "../../store/store";
import renderWithProviders from "./renderWithProviders";

const getComponentRouter = (ui: JSX.Element) =>
  createBrowserRouter([
    {
      path: "/",
      element: ui,
    },
    {
      path: "/home",
      element: <></>,
    },
  ]);

const renderWithRouters = (
  ui?: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const customRouter = ui ? getComponentRouter(ui) : router;

  return renderWithProviders(
    <RouterProvider router={customRouter}></RouterProvider>,
    preloadedState
  );
};

export default renderWithRouters;

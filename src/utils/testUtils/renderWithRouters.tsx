import { PreloadedState } from "@reduxjs/toolkit";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "../../router/router";
import { RootState } from "../../store/store";
import renderWithProviders from "./renderWithProviders";

export interface RouterRender {
  ui?: React.ReactElement;
  preloadedState?: PreloadedState<RootState>;
}

const getComponentRouter = (ui: JSX.Element) =>
  createBrowserRouter([
    {
      path: "/",
      element: ui,
    },
    {
      path: "/login",
      element: <></>,
    },
  ]);

const renderWithRouters = ({ ui, preloadedState }: RouterRender) => {
  const customRouter = ui ? getComponentRouter(ui) : router;

  return renderWithProviders(
    <RouterProvider router={customRouter}></RouterProvider>,
    preloadedState
  );
};

export default renderWithRouters;

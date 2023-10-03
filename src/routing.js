import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./shared/components/main";
import Register from "./shared/components/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="Register" element={<Register />} />
    </Route>
  )
);

export const Routes = () => {
  return <RouterProvider router={router} />;
};

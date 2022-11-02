import React from "react";
import { MakeGenerics, Router, ReactLocation } from "@tanstack/react-location";

// Pages
import Home from "../pages/Home";

export type NavigationGenerics = MakeGenerics<{
  Params: {};
}>;

export const DefaultLocation = new ReactLocation<NavigationGenerics>();

const Navigation = () => {
  return (
    <Router
      location={DefaultLocation}
      routes={[
        {
          path: "/",
          element: <Home />,
        },
      ]}
    />
  );
};

export default Navigation;

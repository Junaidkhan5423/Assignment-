import React, { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Component1 from "./Component/Component1";
import Component2 from "./Component/Component2";
import Component3 from "./Component/Component3";
import Navigation from "./Component/Navigation";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Navigation />}>
          <Route path="/" element={<Component1 />} />
          <Route path="/second" element={<Component2 />} />
          <Route path="/third" element={<Component3 />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;

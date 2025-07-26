import React, { useEffect } from "react";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RoutineLayout from "./layouts/RoutineLayout";
import SyllabusLayout from "./layouts/SyllabusLayout";
import Authentication from "./pages/Authentication";
import Modules from "./components/component/Modules";
import MainLayout from "./layouts/MainLayout";
import { setupStatusBar } from "./utils/setupStatusBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <RoutineLayout /> },
      { path: "auth", element: <Authentication /> },
    ],
  },
  {
    path: "/syllabus/:id",
    element: <SyllabusLayout />,
    children: [{ index: true, element: <Modules /> }],
  },
]);
const App = () => {
  useEffect(() => {
    setupStatusBar();
  }, []);
  return <RouterProvider router={router} />;
};

export default App;

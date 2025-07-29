import React, { useEffect } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authentication from "./pages/Authentication";
import MainLayout from "./layouts/MainLayout";
import { setupStatusBar } from "./utils/setupStatusBar";
import OnBoardingPage from "./pages/OnBoardingPage";
import SyllabusPage from "./pages/SyllabusPage";
import SecondLayout from "./layouts/SecondLayout";
import RoutinePage from "./pages/RoutinePage";
import FeedbackPage from "./pages/FeedbackPage";
import UploadNotesPage from "./pages/UploadNotesPage";
import NotesPage from "./pages/NotesPage";
import UpdateRoutine from "./pages/UpdateRoutine";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <RoutinePage /> },
      { path: "auth", element: <Authentication /> },
      { path: "notes", element: <NotesPage /> },
      { path: "notes/upload", element: <UploadNotesPage /> },
      { path: "update-routine", element: <UpdateRoutine /> },
      { path: "feedback", element: <FeedbackPage /> },
    ],
  },
  {
    path: "/syllabus/:id",
    element: <SecondLayout />,
    children: [
      { index: true, element: <SyllabusPage /> },
      { index: true, element: <SyllabusPage /> },
    ],
  },
  { path: "/onboard", element: <OnBoardingPage /> },
]);
const App = () => {
  useEffect(() => {
    setupStatusBar();
  }, []);
  return <RouterProvider router={router} />;
};

export default App;

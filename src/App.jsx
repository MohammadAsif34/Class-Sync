import React, { useEffect } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authentication from "./pages/Authentication";
import MainLayout from "./layouts/MainLayout";
import { setupStatusBar } from "./utils/statusBarSetup";
import OnBoardingPage from "./pages/OnBoardingPage";
import SyllabusPage from "./pages/SyllabusPage";
import SecondLayout from "./layouts/SecondLayout";
import RoutinePage from "./pages/RoutinePage";
import FeedbackPage from "./pages/FeedbackPage";
import UploadNotesPage from "./pages/UploadNotesPage";
import NotesPage from "./pages/NotesPage";
import UpdateRoutine from "./pages/UpdateRoutine";
import PdfViewer from "./pages/PdfViewer";
import StudentProfile from "./pages/StudentProfile";

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
      { path: "student/:rollno", element: <StudentProfile /> },
    ],
  },
  { path: "pdf-viewer/:id", element: <PdfViewer /> },
  {
    path: "/",
    element: <SecondLayout />,
    children: [
      { path: "/syllabus/:id", element: <SyllabusPage /> },
      {
        path: "/notes/:program/:department/:semester",
        element: <NotesPage />,
        children: [{ path: ":course", element: <NotesPage /> }],
      },
      {
        path: "/notes/upload/:program/:department/:semester",
        element: <UploadNotesPage />,
      },
      // { index: true, element: <SyllabusPage /> },
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

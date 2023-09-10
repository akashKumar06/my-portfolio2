import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./Pages/Root";
import EducationPage from "./Pages/Education";
import ProjectsPage from "./Pages/Projects";
import ExtraActivityPage from "./Pages/ExtraActivities";
import ContactPage from "./Pages/ContactMe";
import HomePage from './Pages/Home';

const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout/>,
    children: [
      {index: true, element: <HomePage/>},
      { path: "education", element: <EducationPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "activities", element: <ExtraActivityPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);
function App() {
  return(
    <RouterProvider router={router}/>
  )
}

export default App;

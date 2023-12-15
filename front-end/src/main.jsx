import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthorList from "./componentes/AuthorList.jsx";
import AuthorEdit from "./componentes/AuthorEdit.jsx";
import AuthorNew from "./componentes/AuthorNew.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AuthorList />,
      },
      {
        path: "/edit/:id",
        element: <AuthorEdit />,
      },
      {
        path: "/new",
        element: <AuthorNew />,
      },
    ],
  },
  {
    path: "/new",
    element: <h1>Favorite authors</h1>,
  },
  {
    path: "/edit/:id",
    element: <h1>Favorite authors</h1>,
  },
  {
    path: "/author/:id",
    element: <h1>Favorite authors</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

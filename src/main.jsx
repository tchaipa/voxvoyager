import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import GalleryPage from "./pages/Gallery.jsx";
import PackagesPage from "./pages/PackagesPage.jsx";
import DestinationsPage from "./pages/DestinationsPage.jsx";
import TestimoniesPage from "./pages/TestimoniesPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "contacts", element: <ContactsPage /> },
  { path: "*", element: <NotFoundPage /> },
  { path: "gallery", element:<GalleryPage/>},
  { path:"packages", element:<PackagesPage />},
  { path:"destinations", element:<DestinationsPage />},
  { path:"testimonies", element:<TestimoniesPage />},



  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

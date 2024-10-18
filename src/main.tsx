import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard.tsx";
import Login from "./pages/login/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App />*/}
    <RouterProvider router={router}/>
  </StrictMode>,
)

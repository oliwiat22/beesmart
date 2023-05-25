import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage';
import { SearchingPage } from './pages/SearchingPage';
import { ActivitiesPage } from './pages/ActivitiesPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  },
  {
    path: "/register/",
    element: <RegisterPage />,
  },
  {
    path: "/activities/",
    element: <ActivitiesPage />,
  },
  {
    path: "/search/",
    element: <SearchingPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

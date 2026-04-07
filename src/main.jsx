import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";


const router = createBrowserRouter([
 {
    // no path on this parent route, just the component
    element: <>MarketingLayout
    <Outlet></Outlet>
    </> ,
    children: [
      { index: true, element: <>hindex</> },
      { path: "contact", element  : <>Contact </> },
    ],
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

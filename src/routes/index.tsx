
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Contact from "../components/ui/Contact";

export const routes : any = createBrowserRouter([{
    path: "/",
    element: <MainLayout/>,
    children:[
     {
      path:'/',
      element:<Home/>
     },
     {
      path:'/contact',
      element:<Contact/>
     }
    ]
  },
]) 

import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Contact from "../components/ui/Contact";
import AboutPage from "../pages/AboutPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Dashboard from "../pages/dashboard/Dashboard";
import NotFound from "../components/shared/NotFound";
import Admin from "../components/layout/Admin";
import OrderSuccess from "../components/ui/OrderSuccess";

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
     },
     {
      path:'/about',
      element:<AboutPage/>
     },
     {
      path:'/products',
      element:<ProductsPage/>
     },
     {
      path:'/products/:id',
      element:<ProductDetails/>
     },
     {
      path:'/cart',
      element:<Cart/>
     },
     {
      path:'/checkout',
      element:<Checkout/>
     },
     {
      path:'/success',
      element:<OrderSuccess/>
     },

 
    ]
  },
  {
    path:'/dashboard',
    element:<Admin/>,
    children:[
      {
        path:'',
      element:<Dashboard/>
    }
    ]
   },
  {
    path:'*',
    element:<NotFound/>
   }
]) 
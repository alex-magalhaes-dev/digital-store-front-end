import { createBrowserRouter } from "react-router-dom";
import Layout from '../Layout'

//pages
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductViewPage from "../pages/ProductViewPage";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
         {
            path: "/",
            element: <HomePage />
         }, {
            path: "/produtos",
            element: <ProductListingPage />
         }, , {
            path: "/produto/:id",
            element: <ProductViewPage />
         },
      ]
   },
])
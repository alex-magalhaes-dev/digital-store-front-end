import { createBrowserRouter } from "react-router-dom";

//pages
import App from '../App'
import Home from '../pages/home/index'

export const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      // errorElement: <NotFound />,
      children: [
         {
            path: "/",
            element: <Home />
         },
      ]
   },
])
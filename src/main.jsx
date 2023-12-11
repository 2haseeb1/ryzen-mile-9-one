import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Root/Root";
import Home from "./components/Home/Home";
import Login from "./components/Home/Login";
import Register from "./components/Home/register";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
{path:"/",
element:<Home></Home>



},
{path:"/login",
element:<Login></Login>



},
{path:"/register",
element:<Register></Register>



}





    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
import React, { Suspense, lazy } from "react";
import  ReactDOM  from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantDetail from "./components/RestaurantDetail";
import Grocery from "./components/Grocery";

const groceryLazyLoad=lazy(()=>import("./components/Grocery"));

const TotalContainer=()=>{
    return (<div className="outermost-container">
        <HeaderComponent/>
        <Outlet/>
    </div>);
}

const appRoute=createBrowserRouter([
    {
        path:"/",
        element:<TotalContainer/>,
        children:[{
            path:"/",
            element:<BodyComponent/>
        },
        {
            path:"/grocery",
            element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
         },
        {
           path:"/About",
           element:<About/>
        },
        {
            path:"/Contact",
            element:<Contact/>
        },
        {
            path:"/Restaurant/:resId",
            element:<RestaurantDetail/>
        }
    ],
        errorElement:<Error/>
    }
]);



    const root=ReactDOM.createRoot(document.getElementById("div"));
    root.render(<RouterProvider router={appRoute}/>);
    
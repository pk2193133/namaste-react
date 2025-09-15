import React, { Suspense, lazy, useState } from "react";
import  ReactDOM  from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantDetail from "./components/RestaurantDetail";
import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const groceryLazyLoad=lazy(()=>import("./components/Grocery"));

const TotalContainer=()=>{

    const [user,setUserName]=useState();
    return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:user,setUserName}}>
    <div className="outermost-container">
        <HeaderComponent/>
        <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
    );
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
    
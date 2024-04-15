import React from "react";
import  ReactDOM  from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";


const TotalContainer=()=>{
    return (<div className="outermost-container">
        <HeaderComponent/>
        <BodyComponent/>
    </div>);
}

    const root=ReactDOM.createRoot(document.getElementById("div"));
    root.render(<TotalContainer/>);
    
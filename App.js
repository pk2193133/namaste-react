import React from "react";
import  ReactDOM  from "react-dom";

const element=React.createElement("div",{id:"paraent"},
React.createElement("div",{id:"child"},
React.createElement("h1",{},"hello world from react")));

console.log(element);

    const root=ReactDOM.createRoot(document.getElementById("div"));
    root.render(element);
    
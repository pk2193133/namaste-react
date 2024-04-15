import React from "react";
import  ReactDOM  from "react-dom";

const element=React.createElement("div",{id:"paraent"},
React.createElement("div",{id:"child"},
React.createElement("h1",{},"hello world from react")));

console.log(element);

const jsxheading=<h1 id="headingjsx">hello world from jsx</h1>;
console.log(jsxheading);

const InnerFunctionalComponenet=()=> <h1>inner functional id</h1>;

const FunctionalComponent=()=> <div>
    {jsxheading}
    {InnerFunctionalComponenet()}
    <InnerFunctionalComponenet/>
    <h1 id="component id">rendering functional component</h1>
    </div>;

    const root=ReactDOM.createRoot(document.getElementById("div"));
    root.render(<FunctionalComponent/>);
    
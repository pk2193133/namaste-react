const element=React.createElement("h1",{id:"paraent"},
React.createElement("h1",{id:"child"},
React.createElement("h1",{},"hello world from react")));

console.log(element);

    const root=ReactDOM.createRoot(document.getElementById("div"));
    root.render(element);
    
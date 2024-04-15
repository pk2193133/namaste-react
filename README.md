E-01
------
-> 

E-02
------
-> we learnt how to make a raect project with simple npm.

-> when we are writing npm init- it ask us simple project related question and whatever answer we give based on that it creates a package.json file.

-> package.json- it contains information about project + dependencies which the project needs.

-> Next is we installed parcel which is a build tool for react application using npm install -D parcel(here -D denotes this dependency   will used while development phase of application).

-> when parcel is downloaded in our project that dependency is reflected in package.json file with version as for example ^12.3.4(here ^ and ~ denotes that for version with ^ minor updates will be installed and for ~ major updates will be installed).

-> So whenever dependencies are added node modules folders is created with all the dependencies and transitive dependencies.

-> along with that package-lock.json is created which contains about each depencies that is there in the node modules.

-> the thing with package-lock.json is that it contains versions lock which means is that it contains a constant version that was there at the time of installation. This happened because the same code should work same in diffrent development machines since npm checks package-lock.json file for dependencies so we dont get any issue for same code in different machines.

-> we can install react and react-dom using npm install react and npm install react-dom.

-> we build application using npx parcel index.html(here npx is command used for execution, parcel is build tool and index.html is the opening file to start app).

-> whenever in index.html we are using src="./App.js to look up script we have to use attributr type="module" so that parcel can understand that it is not a js file but a diffrent module since in normal js file we cant use import statement.

-> .parcel.cache- this includes files which the parcel caches so that when the next time it builds the application build happens faster because it caches the earlier result and builds the modifies files only.

-> dist- this folder contains the files which are created after build process (can be compared to bytecode in java just for understanding). in simple terms source code written in jsx,javascript,css and other assets are tranformed,bundled and optimized for deployement.

E-03
------

-> since we can work with element created using React library but the code becomes a bit confusing to read and understand so for this purpose JSX was introduced which is html like syntax. We can consider jsx to be combination of html and javascript;

-> flow with React element
   React element-->React object-->html tags when we render (parcel/babel does this transpiling)

-> flow with jsx element
   jsx--> React element-->React Object--> html tags when we render (parcel/babel does this transpiling)

-> we can define jsx with a variable like below-
   const jsxheading=<h1 id="headingjsx">hello world from jsx</h1>;

-> in react there are two types of componenets class and function type (class is not used anymore/very rarely), hence we use functions to return jsx statement in arrow function style like below-
   const InnerFunctionalComponenet=()=> <h1>inner functional id</h1>; 

-> inside jsx we can use {} to use javascript code like any javascript variable or expression;

-> inside jsx expression we can call another functional componenet with two ways,this one component inside another component is component composing
   1-{FunctionalComponenetName()}
   2-<FunctionalComponenetName/>

   For example-
   const FunctionalComponent=()=> <div>
    {jsxheading}
    {InnerFunctionalComponenet()}
    <InnerFunctionalComponenet/>
    <h1 id="component id">rendering functional component</h1>
    </div>;

E-04
------
Assignment
● Is JSX mandatory for React?
● Is ES6 mandatory for React?
● {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX
● How can I write comments in JSX?
● What is <React.Fragment></React.Fragment> and <></> ?
● What is Virtual DOM?
● What is Reconciliation in React?
● What is React Fiber?
● Why we need keys in React? When do we need keys in React?
● Can we use index as keys in React?
● What is props in React? Ways to
● What is a Config Driven UI ?

E-05
------
Assignment
● What is the difference between Named Export, Default export and * as export?
● What is the importance of config.js file
● What are React Hooks?
● Why do we need a useState Hook?

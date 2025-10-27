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

E-06
------
->cors extension
->swiggies actual api
->optional chaining
->fetch api(async await)
->useEffect hook
->shimmer ui

E-07
------
Assignment
● What are various ways to add images into our App? Explain with code examples
● What would happen if we do console.log(useState())?
● How will useEffect behave if we don't add a dependency array ?
● What is SPA?
● What is difference between Client Side Routing and Server Side Routing?

Coding Assignment:
● Add Shimmer Effect without installing a library
● Install react-router-dom
● Create a appRouter and Provide it to the app
● Create a Home, About, Contact Page with Link (use child routes)
● Make a Error page for routing errors
● Create a Restaurant Page with dynamic restaurant ID
● (Extra) - Create a login Page using Formik Library

E-09
-------
Theory -
● When and why do we need lazy()?
● What is suspense?
● Why we got this error : A component suspended while responding to
synchronous input. This will cause the UI to be replaced with a loading indicator.
To fix, updates that suspend should be wrapped with startTransition? How does
suspense fix this error?
● Advantages and disadvantages of using this code splitting pattern?
● When do we and why do we need suspense?

Coding -
● Create your custom hooks
● Try out lazy and suspense
● Make your code clean.

E-10
--------
-> Higher order component- which takes other component as input and return another component as output.
-> Controlled state management from parent component to child component by passing setState method as props to child component.
-> useContext- used to avoid prop drilling, basically to make property globally available so that we dont have to pass these property as props to component that dont even need it, we can use createContext to create it and useContext to use its property.
-> we have to wrap <CustomContext.Provider value={{someproperty:""}}> on the components that wants to use CustomContext property.


E-12
________

-> We use redux as a centralised way to handle state. Because there can be instances when multiple components depends upon a single variable.
-> major componenets of redux-
1- Store
2- Slice
3- Action(object with attribute Type and payload)
4- Action creators(function that returns Action object)
5- Reducers(a pure function that takes the current state and an action and returns the next state)

Overall dispatch flow

->Component dispatches an action: dispatch(addItem({ id:1 }));
->Redux sends the action object to the store.
->The store runs the root reducer (which includes your cart reducer).
->The cart reducer handles the cart/addItem action (your addItem reducer function is invoked) and returns new state.
->Subscribed components (useSelector / connect) re-render with the updated state.

-> we use UseDispatch() to dispatch action creator whenever we want to make any change to redux state.
-> we use useSelector((store)=>store.cart.items) to link a components variable to stores state, so whenever any state changes occur the component which uses useSelector will get re-rendered.

E-13
_______

-> we use react-testing-library which in turn uses Jest behind the scene
-> we create a __test__ folder for test files because when we use npm test command it searches this folder for test files.
-> we write test files with followinf syntax
    
    test("description",()=>{}) -> here the second parameter is callback function which has main testing logic

    example-

    test("check whether component renders or not",()=>{
	render(<Contact/>);

	const heading=screen.getByRole("heading");
	expect(heading).toBeInTheDocument();

})

-> for testing we use jsdom library which basically helps to run dom elements(generally browser displays the dom elements but for testing we use jsdom library);
-> render function above renders our code in jsdom.






E-01

-> 

E-02

-> we learnt how to make a raect project with simple npm
-> when we are writing npm init- it ask us simple project related question and whatever answer we give based on that it creates a package.json file.
-> package.json- it contains information about project + dependencies which the project needs
-> Next is we installed parcel which is a build tool for react application using npm install -D parcel(here -D denotes this dependency   will used while development phase of application)
-> when parcel is downloaded in our project that dependency is reflected in package.json file with version as for example ^12.3.4(here ^ and ~ denotes that for version with ^ minor updates will be installed and for ~ major updates will be installed);
-> So whenever dependencies are added node modules folders is created with all the dependencies and transitive dependencies
-> along with that package-lock.json is created which contains about each depencies that is there in the node modules
-> the thing with package-lock.json is that it contains versions lock which means is that it contains a constant version that was there at the time of installation. This happened because the same code should work same in diffrent development machines since npm checks package-lock.json file for dependencies so we dont get any issue for same code in different machines.
-> we can install react and react-dom using npm install react and npm install react-dom.
-> we build application using npx parcel index.html(here npx is command used for execution, parcel is build tool and index.html is the opening file to start app);
-> whenever in index.html we are using src="./App.js to look up script we have to use attributr type="module" so that parcel can understand that it is not a js file but a diffrent module since in normal js file we cant use import statement.
-> .parcel.cache- this includes files which the parcel caches so that when the next time it builds the application build happens faster because it caches the earlier result and builds the modifies files only.
-> dist- this folder contains the files which are created after build process (can be compared to bytecode in java just for understanding). in simple terms source code written in jsx,javascript,css and other assets are tranformed,bundled and optimized for deployement.
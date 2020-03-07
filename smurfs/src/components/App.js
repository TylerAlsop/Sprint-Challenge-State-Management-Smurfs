import React, { useState } from "react";
import "./App.css";
import SmurfContext from '../Contexts/SmurfContext';


import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';


function App () {


  return (
    <SmurfContext.Provider value={{ }}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    </SmurfContext.Provider>

  );
};

export default App;

// [{"name":"Brainey","age":200,"height":"5cm","id":0}]

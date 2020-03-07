import React, { useState } from "react";
import "./App.css";
import SmurfContext from '../Contexts/SmurfContext';


import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';


function App () {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  const [id, setId] = useState();



  return (
    <SmurfContext.Provider value={{ name, age, height, id }}>
      <div className="App">
        <h1 className="title">SMURFS! 2.0 W/ Redux</h1>

        <div className="form-and-list">
          <SmurfForm className="smurfform"/>
          <SmurfList className="smurflist"/>
        </div>
      </div>
    </SmurfContext.Provider>

  );
};

export default App;

// [{"name":"Brainey","age":200,"height":"5cm","id":0}]

import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

import SmurfContext from '../Contexts/SmurfContext'


import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';


function App () {
  // const [name, setName] = useState();
  // const [age, setAge] = useState();
  // const [height, setHeight] = useState();
  // const [id, setId] = useState();

  const [smurfs, setSmurfs] = useState(makeSmurf())

  const makeSmurf () => {
    return ({
      name: "",
      age: ,
      height: "",
      id: Date.now()
    })
  }

  const [posts, setPosts] = useState();

  const nameChangeHandler = e => {
    ({...smurfs, name: e.target.value })
  };

  const ageChangeHandler = e => {
    ({...smurfs, age: e.target.value })
  };

  const heightChangeHandler = e => {
    ({...smurfs, height: e.target.value })
  };
  
  const submitHandler = e => {
    e.preventDefault();
    axios.post("http://localhost:3333/smurfs", )
  };

  // useEffect()

  

  

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

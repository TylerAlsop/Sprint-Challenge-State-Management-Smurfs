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

  const [smurfs, setSmurfs] = useState([{ name: "", age: "", height: "", id: null}])


  // axios
  // .get("http://localhost:3333/smurfs")
  // .then(res => {
  //   console.log("axios response", res);
  // })
  

  const changeHandler = e => {
    setSmurfs({...smurfs, [e.target.name]: e.target.value })
  };

  
  const submitHandler = e => {
    e.preventDefault();
    setSmurfs({
      name: "",
      age: "",
      height: "",
      id: Date.now()
    })
    console.log(smurfs.name);
    console.log(smurfs.age);
    console.log(smurfs.height);


    axios.post("http://localhost:3333/smurfs", smurfs)
  };

  // useEffect()
  

  return (
    <SmurfContext.Provider value={{ smurfs, changeHandler, submitHandler }}>
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

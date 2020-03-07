import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

import SmurfContext from '../Contexts/SmurfContext'


import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';


function App () {

  const [allSmurfs, setAllSmurfs] = useState([]);
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: ""
  })

  const addNewSmurf = (smurf) => {
    setAllSmurfs([...allSmurfs, smurf])
  };


  const changeHandler = e => {
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value,
      id: Date.now()
    })
  };

  
  const submitHandler = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        console.log("Post res in submitHandler", res);
      })
      .catch(err => {
        console.log("Error with POST", err);
      })
  };

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log("Axios Resopnse In App.js", res);
        setAllSmurfs(res.data)})
      .catch(err => {
        console.log("Error with Axios Call", err)
      });
  }, []);
  

  return (
    <SmurfContext.Provider value={{ allSmurfs, smurf, addNewSmurf, changeHandler, submitHandler }}>
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

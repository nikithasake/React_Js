import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';

function App() {

  console.log("App component rendered")
  let [resourceType,setResourceType]=useState('Home');
  useEffect(()=>{
    console.log(resourceType);
  },[resourceType]);

  return (
    <div className="App">
      <button onClick={()=>{setResourceType('Home')}}>HOME</button>
      <button onClick={()=>{setResourceType('About')}}>ABOUT</button>
      <button onClick={()=>{setResourceType('Contact')}}>CONTACT</button>
      <h3>{resourceType}</h3>
    </div>
  );
}

export default App;

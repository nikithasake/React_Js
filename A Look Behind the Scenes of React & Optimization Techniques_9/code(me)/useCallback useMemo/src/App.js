import React, { useState,useCallback } from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showparagraph,setShowParagraph]=useState(false);
  const [allowToggle,setAllowToggle]=useState(false);

  console.log("App running");
  const toggleParagraphHandler=useCallback(()=>{
    console.log(allowToggle);
    if(allowToggle)
      setShowParagraph((prevShowParagraph)=>!prevShowParagraph);
  },[allowToggle]);

  const allowToggleHandler=()=>{
    setAllowToggle(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
    <DemoOutput show={showparagraph}/>
    {/* {showparagraph && <p>This is new Paragraph</p>} */}
    <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    <Button onClick={allowToggleHandler}>AllowToggle</Button>
  
    </div>
  );
}
 export default App;

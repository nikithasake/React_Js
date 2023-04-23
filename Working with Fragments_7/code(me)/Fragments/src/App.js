import React,{useState} from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const[usersList,setUsersList]=useState([]);


  const addUserHandler=(uName,UAge)=>{
    setUsersList((PrevUsersList)=>{
      return [...PrevUsersList,{name:uName,age:UAge,id:Math.random().toString()}];
    });
  }
  return (
    //<React.Fragment> or <Fragment> when import {Fragment} from react; added in component
    <>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </>
  );
}

export default App;

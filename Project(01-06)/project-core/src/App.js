import logo from './logo.svg';
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
    <div >
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;

import React, {useState,useEffect} from 'react';
import UserForm from './Components/UserForm';
import './App.css';
import UserDetails from './Components/UserDetails';
import axios from 'axios';
import Loader from './Components/Loader';

function App() {
  let[showForm, setShowForm] = useState(false);
  let [users,setUsers]=useState([]);
  let [loading,setLoading]=useState(false);//intial we are not loading any data from the backend
  let [errorMessage,setErrorMessage]=useState(null);
  let [editMode,setEditMode]=useState(false);
  let[userToedit,setUser]=useState(null);

  useEffect(()=>{
    fetchUsers();
  },[])

  function addUserHandler(){
    setEditMode(false);
    setShowForm(true);
  }

  function closeForm(){
    setShowForm(false)
  }

  function onCreateUser(user){
    // fetch('https://mock-329a2-default-rtdb.firebaseio.com/users.json',{
    //   method:'POST',
    //   body:JSON.stringify(user),
    //   headers:{
    //     'content-Type':'application/json'
    //   }
    // })
    // .then((resp)=>{
    //   console.log(resp)
    // })
    if(!editMode){
    axios.post('https://mock-329a2-default-rtdb.firebaseio.com/users.json',user)
	.then((response)=>{
		console.log(response);
    fetchUsers();
    setShowForm(false);
	})
}
  else{
    console.log(user);
    console.log(userToedit);
    axios.put('https://mock-329a2-default-rtdb.firebaseio.com/users/'+userToedit.id+'.json',user)
    .then((response)=>{
      console.log(response);
      fetchUsers();
      setShowForm(false);
    })
    .catch((error)=>{
      setErrorMessage(error.message);
    })
  }
  }
  function fetchUsers(){
    setLoading(true);
    setErrorMessage(null);
    fetch('https://mock-329a2-default-rtdb.firebaseio.com/users.json')
    .then((response)=>{
      if(!response.ok){
        throw new Error('something went wrong!');
      }
      return response.json();
    })
    .then((data)=>{
      let userData=[];
      for(let key in data){
        userData.push({...data[key],id:key})
      }
      //console.log(userData);
      setUsers(userData);
      setLoading(false);
  
    })
    .catch((error)=>{
      setErrorMessage(error.message);
      setLoading(false);
    })
   
    // setLoading(true);
    // setErrorMessage(null);
    // axios.get('https://mock-329a2-default-rtdb.firebaseio.com/users.xml')
    // .then((response)=>{
    //   console.log(response);
    //   return response.data;
    // })
    // .then((data)=>{
    //   let userData=[];
    //   for(let key in data){
    //     userData.push({...data[key],id:key})
    //   }
    //   //console.log(userData);
    //   setUsers(userData);
    //   setLoading(false);
    // })
    // .catch((error)=>{
    //   setErrorMessage(error.message);
    //   setLoading(false);
    // })
  }
  function onEditUser(user){
    // console.log("onEditUser called!");
    setEditMode(true);
    setUser(user);
    setShowForm(true);
    console.log(user);
  }

  function onDeleteUser(user){
    let del=window.confirm("Do you really want to delete the record of " +user.firstName+ " "+user.lastName);
    if(del){
      axios.delete('https://mock-329a2-default-rtdb.firebaseio.com/users/'+user.id+'.json',user)
      .then((response)=>{
        console.log(response);
        fetchUsers();
      })
      .catch((error)=>{
        setErrorMessage(error.message);
      })
    }
    console.log(user);
  }

  return (
      <div>
        <div className='page-header'>
          <button className='btn btn-success' onClick={addUserHandler}>Add User</button>
          <button className='btn btn-normal'onClick={fetchUsers}>Get Users</button>
        </div>
       {!loading && !errorMessage && <UserDetails  users={users} onDeleteUser={onDeleteUser} onEditUser={onEditUser}></UserDetails>}
       {errorMessage && <h3 style={{textAlign:'center'}}>{errorMessage}</h3>}
       {loading && <Loader/>}
        {showForm && <UserForm closeForm={closeForm} onCreateUser={onCreateUser} editMode={editMode} user={userToedit}></UserForm>}
      </div>
  );
}

export default App;

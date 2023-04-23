import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
  const nameInputref = useRef();
  const ageInputref = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInputref.current.value);
    const enteredName = nameInputref.current.value;
    const enteredUserAge = ageInputref.current.value;

    if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0){
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age(non-empty values)",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age(>0)",
      });
      return;
    }
    //console.log(enteredUsername,enteredAge);
    props.onAddUser(enteredName, enteredUserAge);
    nameInputref.current.value='';
    ageInputref.current.value='';
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text"
           ref={nameInputref} />
          <label htmlFor="age">Age</label>
          <input id="age" type="number"
           ref={ageInputref} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;

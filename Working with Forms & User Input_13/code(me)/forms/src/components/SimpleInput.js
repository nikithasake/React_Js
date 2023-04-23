import { useEffect, useRef, useState } from "react";
import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  // const nameInputRef = useRef();
  // const [enteredName, setEnteredName] = useState("");
  // // const[enteredNameIsValid,setEnteredNameIsValid]=useState(false);
  // const[enteredNameTouched,setEnteredNameTouched]=useState(false);
  // const[formIsValid,setFormIsValid]=useState(false);

  const{
    value:enteredName, 
    isValid:enteredNameIsValid,
    hasError:nameInputHasError,
    valueChangeHandler:nameChangedHandler,
    InputBlurHandler:nameBlurHandler,
    reset:resetNameInput
  }=useInput(value=>value.trim()!=='');

  
  const{
    value:enteredEmail, 
    isValid:enteredEmailIsValid,
    hasError:emailInputHasError,
    valueChangeHandler:emailChangedHandler,
    InputBlurHandler:emailBlurHandler,
    reset:resetEmailInput
  }=useInput(value=>value.includes('@'));

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const[enteredEmailTouched,setEnteredEmailTouched]=useState(false);

  // const enteredEmailIsValid=enteredEmail.includes('@');
  // const enteredEmailIsInValid=!enteredEmailIsValid && enteredEmailTouched;

  // const enteredNameIsValid=enteredName.trim() !== "";//data is there..true !true false
  // const nameInputIsInvalid=!enteredNameIsValid && enteredNameTouched;

  let formIsValid=false;
 
    if(enteredNameIsValid && enteredEmailIsValid){
      formIsValid=true
    }

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  //   // if (event.target.value.trim() !== "") {
  //   //     setEnteredNameIsValid(true);
  //   //     return;
  //   //   }
  // };

  // const emailInputChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // }
  

  // const nameInputBlurHandler = (event) => {
  //  setEnteredNameTouched(true);
  // //  if (enteredName.trim() == "") {
  // //   setEnteredNameIsValid(false);
  // //   return;
  // // }
  // };

  
  // const emailInputBlurHandler = (event) => {
  //   setEnteredEmailTouched(true);
  // }


  const formSubmissionHandler = (event) => {
    event.preventDefault();
    // setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      // setEnteredNameIsValid(false);
      return;
    }
    // setEnteredNameIsValid(true);
    console.log("from state:" + enteredName);
    console.log("from state:" + enteredEmail);
    // const enteredValue = nameInputRef.current.value;
    // console.log("from ref:" + enteredValue);
    //nameInputRef.current.value='';=>NOT IDEAL,DONT MANIPULATE THE DOM
    // setEnteredName("");
    // setEnteredNameTouched(false);

    resetNameInput();
    resetEmailInput();

    // setEnteredEmail("");
    // setEnteredEmailTouched(false);
  };



  const nameInputClasses=nameInputHasError ? 'form-control invalid' : 'form-control'
  
  const emailInputClasses=emailInputHasError ? 'form-control invalid' : 'form-control'
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">please enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

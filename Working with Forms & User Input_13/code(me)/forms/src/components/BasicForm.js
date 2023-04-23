import useInput from "../hooks/use-input";
const BasicForm = (props) => {

  const isNotEmpty=value=>value.trim()!=='';

  const{
    value:enteredFirstName, 
    isValid:enteredFirstNameIsValid,
    hasError:FirstNameInputHasError,
    valueChangeHandler:firstnameChangedHandler,
    InputBlurHandler:firstnameBlurHandler,
    reset:resetFirstNameInput
  }=useInput(isNotEmpty);

  const{
    value:enteredLastName, 
    isValid:enteredLastNameIsValid,
    hasError:LastNameInputHasError,
    valueChangeHandler:LastnameChangedHandler,
    InputBlurHandler:LastnameBlurHandler,
    reset:resetLastNameInput
  }=useInput(isNotEmpty);

   
  const{
    value:enteredEmail, 
    isValid:enteredEmailIsValid,
    hasError:emailInputHasError,
    valueChangeHandler:emailChangedHandler,
    InputBlurHandler:emailBlurHandler,
    reset:resetEmailInput
  }=useInput(value=>value.includes('@'));

  let formIsValid=false;
 
  if(enteredFirstNameIsValid && enteredLastNameIsValid && 
    enteredEmailIsValid){
    formIsValid=true
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log("firstname:" + enteredFirstName);
    console.log("lastname:"+enteredLastName);
    console.log("email:" + enteredEmail);
   
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  

  const firstnameInputClasses=FirstNameInputHasError ? 'form-control invalid' : 'form-control'
  const lastnameInputClasses=LastNameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses=emailInputHasError ? 'form-control invalid' : 'form-control'
    return (
      <form onSubmit={formSubmissionHandler}>
        <div className='control-group'>
          <div className={firstnameInputClasses}>
            <label htmlFor='name'>First Name</label>
            <input type='text' id='name' 
            value={enteredFirstName} 
            onChange={firstnameChangedHandler}
             onBlur={firstnameBlurHandler} />
             {FirstNameInputHasError && <p className="error-text">FirstName must not be empty</p>}
          </div>
          <div className={lastnameInputClasses}>
            <label htmlFor='name'>Last Name</label>
            <input type='text' id='name'   
            value={enteredLastName} 
            onChange={LastnameChangedHandler}
             onBlur={LastnameBlurHandler}/>
             {LastNameInputHasError && <p className="error-text">LastName must not be empty</p>}
          </div>
        </div>
        <div className={emailInputClasses}>
          <label htmlFor='name'>E-Mail Address</label>
          <input type='email' id='name'  
          value={enteredEmail} 
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler} />
          {emailInputHasError && <p className="error-text">Email must not be empty</p>}
        </div>
        <div className='form-actions'>
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    );
  };
  
  export default BasicForm;
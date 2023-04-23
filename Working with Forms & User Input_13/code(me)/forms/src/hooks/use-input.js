
import { useReducer } from "react";
    // const [enteredValue, setEnteredValue] = useState("");
    // const[isTouched,setIsTouched]=useState(false);

    const initialInputState={
        value:'',
        isTouched:false
    }
    const inputStateReducer=(state,action)=>{
        if(action.type=== "INPUT"){
            return {value:action.value,isTouched:state.isTouched};
        }
        if(action.type === "BLUR"){
            return{isTouched:true,value:state.value}
        }
        if(action.type === "RESET"){
            return{isTouched:false,value:''}
        }
        return inputStateReducer;
    };
    // const valueIsValid=validateValue(enteredValue);
    // const hasError=!valueIsValid && isTouched; 

   const useInput=(validateValue)=>{
    const[inputState,dispatch]=useReducer(inputStateReducer,initialInputState)
   

   const valueIsValid=validateValue(inputState.value);
   const hasError=!valueIsValid && inputState.isTouched;

    const valueChangeHandler = (event) => {
        dispatch({type:'INPUT',value:event.target.value});
        // setEnteredValue(event.target.value);
    }
    const InputBlurHandler = (event) => {
        dispatch({type:'BLUR'});
        // setIsTouched(true);
    }

    const reset=()=>{
    //     setEnteredValue('');
    //     setIsTouched(false);
    dispatch({type:'RESET'});
    }

    return {
        value:inputState.value,
        isValid:valueIsValid,
        hasError,
        InputBlurHandler,
        valueChangeHandler,
        reset
    }
}

export default useInput;
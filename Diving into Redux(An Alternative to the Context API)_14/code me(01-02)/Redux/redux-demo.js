const redux=require('redux');

const CounterReducer=(state={counter:0},action)=>{
    if(action.type === 'increment'){
        return {
            counter:state.counter+1
        };
    }
    if(action.type === 'decrement'){
        return {
            counter:state.counter-1
        };
    }
    return state;//unchanged state
};

const store=redux.createStore(CounterReducer);
// console.log( store.getState());

const counterSubscriber=()=>{
   const latestState= store.getState();//give the latest snapshot.
   console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({type:"increment"})
store.dispatch({type:"decrement"})
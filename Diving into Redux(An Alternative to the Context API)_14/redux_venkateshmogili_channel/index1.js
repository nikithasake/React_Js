const { createStore, combineReducers,applyMiddleware } = require("redux")
const logger=require('redux-logger').default;
const BUY_LAPTOP="BUY_LAPTOP";
const BUY_MOBILE="BUY_MOBILE";
const initialState={
    numOfLaptops:100
}
const initialMobile={
    numOfMobiles:1000
}

const buyLaptop=()=>{
    return{
        type:BUY_LAPTOP
    }
}
const buyMobile=()=>{
    return{
        type:BUY_MOBILE
    }
}

const laptopreducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_LAPTOP:
            return {numOfLaptops:state.numOfLaptops-1}
        default:
            return state;
    }

}

const mobilereducer=(state=initialMobile,action)=>{
    switch(action.type){
        case BUY_MOBILE:
            return {numOfMobiles:state.numOfMobiles-1}
        default:
            return state;
    }

}

const rootReducer=combineReducers({laptops:laptopreducer,mobiles:mobilereducer})
const store=createStore(rootReducer,applyMiddleware(logger,thunk));
store.subscribe(()=>{console.log(store.getState())});
store.dispatch(buyLaptop());
store.dispatch(buyLaptop());
store.dispatch(buyLaptop());
store.dispatch(buyMobile());
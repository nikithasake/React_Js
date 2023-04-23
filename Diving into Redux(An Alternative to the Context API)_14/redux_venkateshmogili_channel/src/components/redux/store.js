import laptopreducer from "./reducers/laptopReducers";
import mobilereducer from "./reducers/mobileReducer";
import usersReducer from "./reducers/usersReducers";
import { createStore,applyMiddleware ,combineReducers,compose} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
const rootReducer=combineReducers({
    laptops:laptopreducer,
    mobiles:mobilereducer,
    users:usersReducer
})

const store=createStore(rootReducer,compose(
    applyMiddleware(thunk,logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ));

export default store;
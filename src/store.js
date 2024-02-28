import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { thunk, withExtraArgument } from 'redux-thunk';
import { getAllUserReducer, UserSigninReducer, UserSignupReducer } from './reducers/UserReducer'


const initialState = {
    userSignin: {
        userInfo: localStorage.getItem("userInfo")
            ? JSON.parse(localStorage.getItem("userInfo"))
            : undefined,
    },

    //   shippingAddress: localStorage.getItem('shippingAddress')
    //   ? JSON.parse(localStorage.getItem('shippingAddress'))
    //   : {},
};

const reducer = combineReducers({
    users: getAllUserReducer,
    userSignin: UserSigninReducer,
    userSignup: UserSignupReducer,


});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
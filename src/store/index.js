
import appReducer from './reducers'
import { createStore , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


export default (initialState={})=>{
    return applyMiddleware(thunk)(createStore)(appReducer,initialState);
}
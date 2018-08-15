import React from 'react';
import ReactDOM from 'react-dom';
import './stylessheets/index.css'
import sampleData from './initialState.json'
import storeFactory from './store'
import { App } from './components';
import { Provider } from 'react-redux'
import { addError } from './actions'



const initialState = (localStorage['app-store'])?
    JSON.parse(localStorage['app-store']) :
    sampleData


//const saveState = () => localStorage['app-store'] = JSON.stringify(store.getState());

const handleError = error => {
	store.dispatch(
		addError(error.message)
	)
}


const store = storeFactory(initialState)
//store.subscribe(saveState) 

window.React = React;
window.store = store;

window.addEventListener("error", handleError)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);



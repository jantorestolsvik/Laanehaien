import React, { Component } from 'react';
import classnames from 'classnames';
import { app } from './styles/App.css';
import Header from './components/Header';
import Routes from './routes/Routes';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux';
import reducer from './modules/index';
import {addLoans} from './modules/loans';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

fetch('/api')
    .then(respons => respons.json())
    .then(json => store.dispatch(addLoans(json)));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className={classnames(app)}>
                    <Header />
                    <Routes />
                </div>
            </Provider>
        );
    }
}

export default App;

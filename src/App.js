import React, { Component } from 'react';
import classnames from 'classnames';
import { app } from './App.css';
import Header from './components/Header';
import Routes from './routes/Routes';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './modules/index';
import {addLoans} from './modules/loans';

const store = createStore(reducer);

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

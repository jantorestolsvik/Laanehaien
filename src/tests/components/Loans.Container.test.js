import React from 'react';
import renderer from 'react-test-renderer';
import { 
    BrowserRouter as Router,
} from 'react-router-dom';
import {Provider} from 'react-redux';
import Loans from '../../containers/Loans';
import {createStore, applyMiddleware, compose} from 'redux';

const store = createStore(
    () => { return {loans: []}},
);

it('should render the loans container', () => {
    const tree = renderer.create(
         <Provider store={store}>
        <Router>
            <Loans />
        </Router>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
})
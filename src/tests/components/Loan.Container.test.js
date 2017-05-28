import React from 'react';
import renderer from 'react-test-renderer';
import { 
    BrowserRouter as Router,
} from 'react-router-dom';
import {Provider} from 'react-redux';
import Loan from '../../containers/Loan';
import {createStore, applyMiddleware, compose} from 'redux';

const store = createStore(
    () => {},
);

it('should render the loan container', () => {
    const tree = renderer.create(
         <Provider store={store}>
        <Router>
            <Loan />
        </Router>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
})
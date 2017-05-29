import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../containers/Home';
import { 
    BrowserRouter as Router,
} from 'react-router-dom';

it('should render the home container', () => {
    const tree = renderer.create(
        <Router>
            <Home />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
})
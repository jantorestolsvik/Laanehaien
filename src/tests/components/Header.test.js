import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../components/Header';
import {
  Routes,
} from 'react-router-dom';

it('should render the header', () => {
    const tree = renderer.create(
        <Header />
    ).toJSON();

    expect(tree).toMatchSnapshot();
})
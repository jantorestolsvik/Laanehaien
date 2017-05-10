import React, { Component } from 'react';
import classnames from 'classnames';
import logo from '../logo.svg';
import { brandname } from '../App.css';

const Header = () => (
  <header>
    <div className={classnames(brandname)}>
      <h2>Lånehaien</h2>
    </div>
  </header>
)

export default Header;
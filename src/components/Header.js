import React from 'react';
import classnames from 'classnames';
import style from '../App.css';

import {
  Link
} from 'react-router-dom';


const Header = () => (
  <header>
    <div className={classnames(style.brandname)}>
      <Link to="/">
        <img className={classnames(style.logo)} src="shark.png" alt="logo" />
      </Link>
      <h2 style={{padding: '15px 0px'}}>Lånehaien</h2>
    </div>
  </header>
)

export default Header;
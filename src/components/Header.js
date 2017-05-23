import React from 'react';
import classnames from 'classnames';
import { brandname, logo } from '../App.css';
import Oppsummering from '../containers/Oppsummering'

import {
  Link
} from 'react-router-dom';


const Header = () => (
    <header>
        <div className={classnames(brandname)}>
            <Link to="/">
                <img className={classnames(logo)} src="shark.png" alt="logo"/>
            </Link>
            <h2 style={{padding: '15px 0px'}}>Lånehaien</h2>
            <Oppsummering />
        </div>
    </header>
);

export default Header;
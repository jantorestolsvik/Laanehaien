import React from 'react';
import classnames from 'classnames';
import { appIntro, btn } from '../App.css';
import {
  Link
} from 'react-router-dom';

const Home = () => (
  <div className={classnames(appIntro)}>
    Velkommen til Lånehaien, her kan du låne masse cash for en rolig rente på 46%.
    <br />
    <br />
    <div>
      <Link to="/login">
        <button className={classnames(btn)}>Logg inn</button>
      </Link>
      <Link to="/signup">
        <button className={classnames(btn)}>Sign up</button>
      </Link>
    </div>
  </div>
)

export default Home;
import React from 'react';
import classnames from 'classnames';
import { appIntro, btn } from '../styles/App.css';
import {
  Link
} from 'react-router-dom';

const Home = () => (
  <div className={classnames(appIntro)}>
    Velkommen til Lånehaien, her kan du låne masse cash for en rolig rente på 46%.
    <br />
    <br />
    <div>
      <Link to="/loan">
        <button className={classnames(btn)}>Jeg vil søke om lån</button>
      </Link>
    </div>
  </div>
)

export default Home;
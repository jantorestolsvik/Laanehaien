import React from 'react';
import styles from '../App.css';
import {
  Link
} from 'react-router-dom';

const Home = () => (
  <div className={styles.appIntro}>
    Velkommen til Lånehaien, her kan du låne masse cash for en rolig rente på 46%.
    <br />
    <br />
    <div>
      <Link to="/loan">
        <button className={(styles.btn)}>Jeg vil søke om lån</button>
      </Link>
    </div>
  </div>
)

export default Home;
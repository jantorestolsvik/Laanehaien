import React from 'react';
import style from '../App.css';


const Header = () => (
  <header>
    <div className={style.brandname}>
      <a href="/#">
        <img className={style.logo} src="shark.png" alt="logo" />
      </a>
      <h2 style={{padding: '15px 0px'}}>Lånehaien</h2>
    </div>
  </header>
)

export default Header;
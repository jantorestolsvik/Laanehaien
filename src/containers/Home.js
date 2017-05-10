import React, { Component } from 'react';
import classnames from 'classnames';
import { appIntro } from '../App.css';

const Home = () => (
    <div className={classnames(appIntro)}>
        Velkommen til Lånehaien, her kan du låne masse cash for en rolig rente på 46%.
    </div>
)

export default Home;
import React, { Component } from 'react';
import logo from './logo.svg';
import { app, appLogo, appHeader, appIntro } from './App.css';
import classnames from 'classnames';

class App extends Component {
  render() {
    return (
      <div className={classnames(app)}>
        <div className={classnames(appHeader)}>
          <img src={logo} className={classnames(appLogo)} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={classnames(appIntro)}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

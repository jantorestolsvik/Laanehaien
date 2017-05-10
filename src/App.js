import React, { Component } from 'react';
import classnames from 'classnames';
import { app, appLogo, appHeader, appIntro } from './App.css';
import Header from './components/Header';
import Routes from './routes/Routes';

class App extends Component {
  render() {
    return (
      <div className={classnames(app)}>
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;

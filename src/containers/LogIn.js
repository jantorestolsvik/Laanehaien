import React, { Component } from 'react';
import classnames from 'classnames';
import { appIntro, inputField, form, btn } from '../App.css';
import language from '../language/login';

class Login extends Component {

  handleLogin(e) {
    e.preventDefault();
    console.warn(e);
  }

  render() {

    return (
      <div className={classnames(appIntro)}>
        <form className={classnames(form)} onSubmit={e => this.handleLogin(e)}>
          <input className={classnames(inputField)} type="text" name="username" placeholder={language.loginPlaceholder} />
          <input className={classnames(inputField)} type="password" name="pw" placeholder={language.pwPlaceholder} />
          <br />
          <button className={classnames(btn)} type="submit">Login</button>
        </form>
      </div>
    )
  }
};

export default Login;
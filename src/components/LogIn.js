import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { appIntro, inputField, form, btn } from '../App.css';
import language from '../language/login';

class Login extends Component {

  constructor() {
        super();
        this.state = {
            username: '',
            pw: '',
            message: '' 
        };
    }

  handleLogin(e) {
    e.preventDefault();
    const {
      username,
      pw
    } = this.state;

    this.props.postLogin({username, pw});
  }

  render() {
    console.log(this.props.login, "changes");
    return (
      <div className={classnames(appIntro)}>
        <form className={classnames(form)} onSubmit={e => this.handleLogin(e)}>
          <input
            className={classnames(inputField)}
            type="text"
            name="username"
            placeholder={language.loginPlaceholder}
            onChange={e => this.setState({username: e.target.value})}
          />
          <input
            className={classnames(inputField)}
            type="password"
            name="pw"
            placeholder={language.pwPlaceholder}
            onChange={e => this.setState({pw: e.target.value})}
          />
          <br />
          {JSON.stringify(this.props.login)}
          <button className={classnames(btn)} type="submit">Login</button>
        </form>
      </div>
    )
  }
};

Login.propTypes = {
    postLogin: PropTypes.func,
    getLogin: PropTypes.func,
};

export default Login;
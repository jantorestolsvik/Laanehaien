import React from 'react';
import classnames from 'classnames';
import { appIntro, inputField, form, btn } from '../App.css';
import language from '../language/login';

const Signup = () => (
    <div className={classnames(appIntro)}>
        <form className={classnames(form)}>
            <input className={classnames(inputField)} type="text" name="username" placeholder={language.loginPlaceholder}/>
            <input className={classnames(inputField)} type="password" name="pw" placeholder={language.pwPlaceholder}/>
            <input className={classnames(inputField)} type="password" name="pw2" placeholder={language.pw2Placeholder}/>
            <br />
            <button className={classnames(btn)} type="submit">Signup</button>
        </form>
    </div>
)

export default Signup;
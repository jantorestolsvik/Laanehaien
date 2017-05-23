import {combineReducers} from 'redux';
import loans from './loans';
import * as fromLoans from './loans'
import login from './login';
import * as fromLogin from './login';

export default combineReducers({
    loans,
    login
})

export const getLoans = state => fromLoans.getLoans(state.loans);

export const getLogin = state => fromLogin.getLogedin(state.login);
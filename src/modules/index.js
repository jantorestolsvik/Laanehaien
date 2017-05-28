import {combineReducers} from 'redux';
import loans from './loans';
import * as fromLoans from './loans'

export default combineReducers({
    loans,
})

export const getLoans = state => fromLoans.getLoans(state.loans);
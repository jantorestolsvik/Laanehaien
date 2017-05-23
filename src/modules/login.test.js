import reducer from './login';
import {doLogin} from './login';

describe('login reducer', () => {

    test('returns array as default case', () => {
        expect(reducer()).toEqual({message: '', username : ''});
    });

    test('can add a loan', () => {
        expect(
            reducer(doLogin({message: 'Velkommen', username: 'badboy81'})))
            .toEqual({"payload": {"message": "Velkommen", "username": "badboy81"}, "type": "login_DO_LOGIN"});
    });

});
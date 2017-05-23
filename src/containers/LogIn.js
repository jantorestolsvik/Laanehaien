import {connect} from 'react-redux';
import Login from '../components/LogIn';
import {postLogin} from '../modules/login';
import {getLogin} from '../modules/index';

export default connect(
    state => ({
        login: state.login,
        getLogin
    }),
    {
        postLogin
    }
)(Login);
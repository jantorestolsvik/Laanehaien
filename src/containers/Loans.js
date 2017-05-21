import {connect} from 'react-redux';
import {Loans} from '../components/Loans'
import {getLoans} from '../modules/index';

export default connect(
    state => ({
        loans: getLoans(state)
    })
)(Loans);
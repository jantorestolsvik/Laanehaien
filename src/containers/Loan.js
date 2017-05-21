import {connect} from 'react-redux';
import Loan from '../components/Loan';
import {postLoan} from '../modules/loans';

export default connect(
    null,
    {
        postLoan
    }
)(Loan);
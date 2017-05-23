import {connect} from 'react-redux';
import Oppsummering from '../components/Oppsummering';
import {getLoanSum, getLoans} from '../modules/index';

const mapStateToProps = (state) => {
    return {
        loanSum: getLoanSum(state),
        nextInterestPayment: getLoans(state)
            .map(loan => (loan.interest / 12) * loan.amount)
            .reduce((sum, payment) => sum + payment, 0)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Oppsummering)

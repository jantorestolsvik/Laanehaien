import {connect} from 'react-redux';
import Oppsummering from '../components/Oppsummering';
import {getLoanSum, getLoans} from '../modules/index';

const nextInterestPayment = (state) => {
    return getLoans(state)
        .map(loan => (loan.interest / 12) * loan.amount)
        .reduce((sum, payment) => sum + payment, 0)
};

export const mapStateToProps = (state) => {
    return {
        loanSum: getLoanSum(state),
        nextInterestPayment: nextInterestPayment(state),
        nextPayment: nextInterestPayment(state) + getLoans(state)
            .map(loan => loan.amount / loan.paydownMonths)
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

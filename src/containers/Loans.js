import {connect} from 'react-redux';
import {Loans} from '../components/Loans'
import {getLoans} from '../modules/index';
import {toggleInstallments} from '../modules/loans';

const mapDispatchToProps = (dispatch) => {
    return {
        toggleInstallments: (loanId) => {
            dispatch(toggleInstallments(loanId))
        }
    }
};

export default connect(
    state => ({
        loans: getLoans(state)
    }),
    mapDispatchToProps
)(Loans);
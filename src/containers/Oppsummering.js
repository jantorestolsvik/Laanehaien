import {connect} from 'react-redux';
import Oppsummering from '../components/Oppsummering';
import {getLoanSum} from '../modules/index';

const mapStateToProps = (state) => {
    return {
        loanSum: getLoanSum(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Oppsummering)

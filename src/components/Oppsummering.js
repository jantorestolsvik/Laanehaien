import React, {Component, PropTypes} from 'react';

class Oppsummering extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: true
        }
    }

    toggleExpand = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    };

    render() {
        const {loanSum, nextInterestPayment, nextPayment} = this.props;
        return (
            <div onClick={this.toggleExpand}>
                Din oppsummering
                {
                    this.state.expanded &&
                    [
                        <div>Din sum: {loanSum}</div>,
                        <div> Din neste rentebetaling: {nextInterestPayment}</div>,
                        <div> Din neste innbetaling: {nextPayment}</div>
                    ]
                }
            </div>
        );
    }
}

Oppsummering.propTypes = {
    loanSum: PropTypes.number,
    nextInterestPayment: PropTypes.number,
    nextPayment: PropTypes.number
};

export default Oppsummering;
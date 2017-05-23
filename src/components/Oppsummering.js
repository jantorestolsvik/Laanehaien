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
        return (
            <div onClick={this.toggleExpand}>
                Din oppsummering
                {
                    this.state.expanded &&
                    <div>Din sum: {this.props.loanSum}</div>
                }
            </div>
        );
    }
}

Oppsummering.propTypes = {
    loanSum: PropTypes.number
};

export default Oppsummering;
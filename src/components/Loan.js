import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { appIntro, form, btn } from '../styles/App.css';

class Loan extends Component {

    constructor() {
        super();
        this.state = {
            value: 5,
            maxLoan: 500000,
        };
    }

    getLoanValue() {
        const {
            value,
            maxLoan
            } = this.state;
        return value * maxLoan;
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.postLoan({amount: this.getLoanValue()});
    }

    renderLoan(loan) {
        return loan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    render() {
        return (
            <div className={classnames(appIntro)}>
                <form className={classnames(form)} onSubmit={e => this.handleSubmit(e)}>
                    <br /><br />
                    <input style={{width: 277}} type="range" name="points" min="0.01" max="12" step="0.2" value={this.state.value} onChange={e => this.handleChange(e) }/>
                    <br />
                    <br />
                    Jeg vil låne { this.renderLoan(parseInt(this.state.value * this.state.maxLoan, 0)) },- kr
                    <br />
                    <br />
                    <button className={classnames(btn)} type="submit">Søk om lån</button>
                </form>
            </div>
        );
    }
}

Loan.propTypes = {
    postLoan: PropTypes.func
};

export default Loan;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Loan.css';

let cx = classnames.bind(styles);

class Loan extends Component {

  constructor() {
    super();
    this.state = {
      value: 5,
      maxLoan: 500000,
      disabled: true,
    };
  }

  getButtonClass() {
    return cx({
      btn: true,
      btnDisabled: this.state.disabled,
    });
  }

  getLoanValue() {
    const {
            value,
      maxLoan
            } = this.state;
    return value * maxLoan;
  }

  getRisks() {
    const loan = this.getLoanValue();
    const risks = [
      { name: 'Brukket tann', limit: 4999 },
      { name: 'Knekt ben', limit: 1000000 },
      { name: 'Kneskåler', limit: 3000000 }
    ]
    return risks.filter((risk) => {
      return risk.limit < loan;
    });
  }

  handleChange(value) {
    this.setState({
      value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postLoan({ amount: this.getLoanValue() });
  }

  handleDisabledBtn() {
    this.setState({ disabled: !this.state.disabled })
  }

  renderLoan(loan) {
    return loan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  render() {

    return (
      <div className={classnames(styles.appIntro)}>
        <form className={classnames(styles.form)} onSubmit={e => this.handleSubmit(e)}>
          <br /><br />
          <input style={{ width: 277 }} type="range" name="points" min="0.01" max="12" step="0.2" value={this.state.value} onChange={e => this.handleChange(e.target.value)} />
          <p>Jeg vil låne <span name="amount">{this.renderLoan(parseInt(this.getLoanValue(), 0))},- kr</span></p>

          <div className={classnames(styles.risiko)}>
            <h3 style={{ margin: 0 }}>Risiko:</h3>
            <p style={{ marginTop: 0 }}>(Om man ikke betaler)</p>

            <ul style={{ width: 150, margin: '0 auto' }}>
              {
                this.getRisks().map((risk, index) => {
                  return <li key={index}> {risk.name}</li>
                })
              }
            </ul>
          </div>

          <p>
            <label>
              <span>Jeg godtar risikoen</span>
              <input
                type="checkbox"
                name="doRisk"
                onChange={() => this.handleDisabledBtn()}
              />
            </label>
          </p>

          <button
            className={this.getButtonClass()}
            type="submit"
            disabled={this.state.disabled}> Søk om lån</button>

        </form>
      </div>
    );
  }
}

Loan.propTypes = {
  postLoan: PropTypes.func
};

export default Loan;
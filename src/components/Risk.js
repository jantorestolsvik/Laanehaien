import React from 'react';
import classnames from 'classnames/bind';
import styles from './Loan.css';

class Risk extends React.Component {
    render() {
        return <div className={classnames(styles.risiko)}>
            <h3 style={{ margin: 0 }}>Risiko:</h3>
            <p style={{ marginTop: 0 }}>(Om man ikke betaler)</p>

            <ul style={{ width: 150, margin: '0 auto' }}>
                {
                    this.props.risks.map((risk, index) => {
                        return <li key={index}> {risk.name}</li>
                    })
                }
            </ul>
        </div>
    }
}

export default Risk;

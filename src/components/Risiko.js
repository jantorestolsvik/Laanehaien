import React from 'react';
import PropTypes from 'prop-types';
import styles from './Risiko.css';


const Risiko = (props) => (
    <div className={styles.risiko}>
        <h3 style={{ margin: 0 }}>Risiko:</h3>
        <p style={{ marginTop: 0 }}>(Om man ikke betaler)</p>

        <ul style={{ width: 150, margin: '0 auto' }}>
            {
                props.items.map((risk, index) => {
                    return <li key={index}> {risk.name}</li>
                })
            }
        </ul>
    </div>
)

Risiko.propTypes = {
  items: PropTypes.array
};

export default Risiko;
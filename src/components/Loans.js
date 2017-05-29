import React from 'react';
import PropTypes from 'prop-types';

export const Loans = ({loans, toggleInstallments}) => (
    <div>
        {loans.map((loan, index) => (
            <div key={index}>
                {JSON.stringify(loan)}
                <button onClick={() => {
                	toggleInstallments(loan.id)
                }}>
                    Slå {loan.paydownMonths === Number.MAX_VALUE ? "på" : "av"} nedbetaling
                </button>
            </div>
        ))}
    </div>
);

Loans.propTypes = {
    loans: PropTypes.array.isRequired,
    toggleInstallments: PropTypes.func
};
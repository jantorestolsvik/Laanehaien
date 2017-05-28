import React from 'react';
import PropTypes from 'prop-types';

export const Loans = ({loans}) => (
    <div>
        {loans.map((loan, index) => (
            <div key={index}>
                {JSON.stringify(loan)}
            </div>
        ))}
    </div>
);

Loans.propTypes = {
    loans: PropTypes.array.isRequired
};
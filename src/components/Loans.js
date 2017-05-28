import React from 'react';
import PropTypes from 'prop-types';

export const Loans = ({loans}) => (
    <div>
        {loans.map(loan => (
            <div>
                {JSON.stringify(loan)}
            </div>
        ))}
    </div>
);

Loans.propTypes = {
    loans: PropTypes.array.isRequired
};
import React, {PropTypes} from 'react';

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
    loans: PropTypes.array
};
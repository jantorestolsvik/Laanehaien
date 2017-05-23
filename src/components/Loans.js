import React, {PropTypes} from 'react';

export const Loans = ({loans, toggleInstallments}) => (
    <div>
        {loans.map(loan => (
            <div>
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
    loans: PropTypes.array,
    toggleInstallments: PropTypes.func
};
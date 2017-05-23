const ADD_LOANS = "loans_ADD_LOANS";
const ADD_LOAN = "loans_ADD_LOAN";
const TOGGLE_INSTALLMENTS = "loans_TOGGLE_INSTALLMENTS";

// actions
export const toggleInstallments = loanId => ({
    type: TOGGLE_INSTALLMENTS,
    payload: loanId
});

export const addLoans = loans => ({
    type: ADD_LOANS,
    payload: loans
});

export const addLoan = loan => ({
    type: ADD_LOAN,
    payload: loan
});

export const postLoan = loan => dispatch => {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    return fetch('/api', {
        method: 'POST',
        headers,
        body: JSON.stringify(loan)
    })
        .then(response => response.json())
        .then(respons => dispatch(addLoan(respons.loan)));
};

// selectors
export const getLoans = state => state;
export const getLoanSum = state => state.reduce((sum, loan) => sum + loan.amount, 0);

// reducer
export default (state = [], action = {}) => {
    switch (action.type) {
        case ADD_LOANS:
            return action.payload;
        case ADD_LOAN:
            return [...state, action.payload];
        case TOGGLE_INSTALLMENTS:
            return state.map(loan => {
                if (loan.id === action.payload) {
                    const installmentsIsOff = loan.paydownMonths === Number.MAX_VALUE;
                    return {
                        ...loan,
                        paydownMonths: installmentsIsOff ? 12 : Number.MAX_VALUE,
                        amount: installmentsIsOff ? loan.amount : loan.amount + 100
                    }
                }
                return loan;
            })
    }
    return state;
}
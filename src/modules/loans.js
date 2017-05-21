const ADD_LOANS = "loans_ADD_LOANS";
const ADD_LOAN = "loans_ADD_LOAN";

// actions
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

// reducer
export default (state = [], action = {}) => {
    switch (action.type) {
        case ADD_LOANS:
            return action.payload;
        case ADD_LOAN:
            return [...state, action.payload];
    }
    return state;
}
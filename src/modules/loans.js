const ADD_LOANS = "loans_ADD_LOANS";

// actions
export const addLoans = loans => ({
    type: ADD_LOANS,
    payload: loans
});

// selectors
export const getLoans = state => state;

// reducer
export default (state = [], action = {}) => {
    switch (action.type) {
        case ADD_LOANS:
            return action.payload;
    }
    return state;
}
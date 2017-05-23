//types
const DO_LOGIN = "login_DO_LOGIN";

// actions

export const doLogin = credentials => ({
  type: DO_LOGIN,
  payload: credentials
});

export const postLogin = credentials => dispatch => {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  return fetch('/api/login', {
    method: 'POST',
    headers,
    body: JSON.stringify(credentials)
  })
    .then(response => response.json())
    .then(respons => dispatch(doLogin(respons)));
};

// selectors
export const getLogedin = state => {
  return state;
};

// reducer
export default (state = { message: '', username: '' }, action = {}) => {
  switch (action.type) {
    case DO_LOGIN:
      return Object.assign(
        state,
        {
          message: action.payload.message,
          username: action.payload.username
        });
    default:
      return state;
  }
}
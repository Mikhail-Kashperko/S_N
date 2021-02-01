const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
  userId: null,
  email: null,
  login: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        newMessageBody: action.body,
      };
    default:
      return state;
  }
};

export let setAuthUserData = (userId, email, password) => ({
  type: SET_USER_DATA,
  data: {userId, email, password}
});

export default authReducer;

export default function loginReducer(state, action) {
  switch (action.type) {
    case "SIGNUP_SUCCESS": {
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    }

    case "SET_USER_LOGIN":
      return { ...state, isLoggedIn: true, user: action.payload };

    case "LOGOUT_USER":
      return { ...state, isLoggedIn: false, user: {} };
  }
}

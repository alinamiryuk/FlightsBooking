import { LOGIN_AUTH, LOGOUT_AUTH } from "../actionTypes";

const initialState = JSON.parse(localStorage.getItem('user')) || {
  success: false,
  registered: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_AUTH:
      return {
        // ...state, ...action.payload.user, registered: action.payload.success, success: action.payload.success, 
        ...state, registered: action.payload.success, success: action.payload.success, 
        
      }
      case LOGOUT_AUTH:
        return action.payload
  
    default:
      return state
  }
}

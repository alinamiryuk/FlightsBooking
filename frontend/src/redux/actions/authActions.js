import { LOGIN_AUTH, LOGOUT_AUTH } from '../actionTypes'
//user передать
export const loginAuth = () => {
  return {
    type: LOGIN_AUTH,
    payload: {success: false,
      registered: false,}
    // payload: { sucess: user.success, user },
  }
}

export const logoutAuth = () => {
  return {
    type: LOGOUT_AUTH,
    payload: { success: false, registered: false },
  }
}

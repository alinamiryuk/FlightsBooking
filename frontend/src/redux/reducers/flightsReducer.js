import { GET_FLIGHTS } from '../actionTypes'

const initialState = []

export const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FLIGHTS:
      return action.payload
    default:
      return state
  }
}

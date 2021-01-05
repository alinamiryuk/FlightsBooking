import { GET_FLIGHTS, LIKE_FLIGHT } from '../actionTypes'

export const getFlights = (data) => {
  return {
    type: GET_FLIGHTS,
    payload: data
  }
}


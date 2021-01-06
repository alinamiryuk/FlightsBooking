import { GET_FLIGHTS } from '../actionTypes'

const initialState = [
  // {
  //   id: 1,
  //   originPlace: { airport: 'SVO', city: 'Moscow' },
  //   destinationPlace: { airport: 'JFK', city: 'New York City' },
  //   departure: { date: '28 June, 2020', time: '14:50' },
  //   company: 'Aeroflot',
  //   price: { currency: '₽', value: '23924' },
  // },
]

export const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FLIGHTS:
      return action.payload
    default:
      return state
  }
}

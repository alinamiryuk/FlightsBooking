import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { flightsReducer } from './flightsReducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  // flights: flightsReducer,
})

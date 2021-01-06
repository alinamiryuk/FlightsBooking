import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { flightsReducer } from './flightsReducer'
import { imagesReducer } from './imagesReducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  flights: flightsReducer,
  images: imagesReducer
})

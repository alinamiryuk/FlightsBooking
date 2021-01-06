import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGetFlights } from '../../redux/thunks'
import { Flight } from '../Flight/Flight'

export const FlightsList = () => {
  const dispatch = useDispatch()
  const flights = useSelector((state) => state.flights)
  
  useEffect(() => {
    dispatch(fetchGetFlights())
  }, [dispatch])

  return (
    <>
      {flights.Quotes && flights.Quotes.map((flight) => (
        <>
          <Flight flight={flight} info={flights} key={flight.QuoteId} />
        </>
      ))}
    </>
  )
}

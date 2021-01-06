import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGetFlights } from '../../redux/thunks'
import { Flight } from './Flight/Flight'
import './FlightsPage.css'

export const FlightsPage = () => {
  const dispatch = useDispatch()
  const flights = useSelector((state) => state.flights)
  const images = useSelector((state) => state.images)

  useEffect(() => {
    dispatch(fetchGetFlights())
  }, [dispatch])

  return (
    <div className="flightsPageWrapper">
      <div className="flightsPage">
        <div className="flightsPage__logout">
          Выйти
          <img src="/images/svg/logout.svg" />
        </div>
        <div className="flightsPage__images">
          {images && images.map((image) => <img src={image.url} />)}
        </div>
        <div>Добавлено в Избранное: <b>10</b> рейсов</div>
        <div className="flightsPage__list">
          {flights.Quotes &&
            flights.Quotes.map((flight) => (
              <>
                <Flight flight={flight} info={flights} key={flight.QuoteId} />
              </>
            ))}
        </div>
      </div>
    </div>
  )
}

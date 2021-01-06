import React from 'react'
import './Flight.css'

export const Flight = ({ flight, info }) => {
  const destinationPlace = info.Places.filter(
    (el) => el.PlaceId === flight.OutboundLeg.DestinationId
  )
  const originPlace = info.Places.filter(
    (el) => el.PlaceId === flight.OutboundLeg.OriginId
  )
  const carrier = info.Carriers.filter(
    (el) => el.CarrierId === flight.OutboundLeg.CarrierIds[0]
  )

  const dateTime = new Date(flight.QuoteDateTime)
  const day = dateTime.toDateString().split(' ')
  const time = dateTime.toLocaleTimeString().split(':')

  return (
    <div className="flight">
      <div className="flight__planeWrapper">
        <img src="/images/svg/plane.svg" />
      </div>
      <div className="flight__info">
        <div className="flight__infoPlaces">
          <div>{`${originPlace[0].CityName} (${originPlace[0].SkyscannerCode})`}</div>
          <div>{`${destinationPlace[0].CityName} (${destinationPlace[0].SkyscannerCode})`}</div>
        </div>
        <div className="flight__infoDateTime">
          <div>{`${day[2]} ${day[1]}, ${day[3]}`}</div>
          <div>{`${time[0]}:${time[1]}`}</div>
        </div>
        <div>{carrier[0].Name}</div>
      </div>
      <div className="flight__priceLike">
        <img src="/images/svg/like.svg" />
        <div>{`${flight.MinPrice} ${info.Currencies[0].Symbol}`}</div>
      </div>
    </div>
  )
}

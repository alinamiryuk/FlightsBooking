import React from 'react'

export const Flight = ({flight, info}) => {
  const destinationPlace = info.Places.filter(el => el.PlaceId === flight.OutboundLeg.DestinationId)
  const originPlace = info.Places.filter(el => el.PlaceId === flight.OutboundLeg.OriginId)
  const carrier = info.Carriers.filter(el => el.CarrierId === flight.OutboundLeg.CarrierIds[0])

  const dateTime = new Date(flight.QuoteDateTime)
  const day = dateTime.toDateString().split(' ')
  const time = dateTime.toLocaleTimeString().split(':')
  // const newDateTime = new Date(dateTime.slice(0,3), dateTime.slice(5,6), dateTime.slice(8,9), dateTime.slice(11,12), dateTime.slice(14,15), dateTime.slice(17,18))

  return (<>
  <div>{`${flight.MinPrice} ${info.Currencies[0].Symbol}`}</div>
  <div>{`${destinationPlace[0].CityName} (${destinationPlace[0].SkyscannerCode})`}</div>
  <div>{`${originPlace[0].CityName} (${originPlace[0].SkyscannerCode})`}</div>
  <div>{carrier[0].Name}</div>
  <div>{`${time[0]}:${time[1]}`}</div>
  <div>{`${day[2]} ${day[1]}, ${day[3]}`}</div>
  </>)
}

import { getFlights } from './actions/flightsActions'

export const fetchGetFlights = () => async (dispatch) => {
  const response = await fetch(
    'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/RUB/en-US/SVO-sky/JFK-sky/anytime?inboundpartialdate=anytime',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'd07f5dd8a5mshc4767386195d8e1p1bb6fbjsnc2f35ece3ba0',
        'x-rapidapi-host':
          'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      },
    }
  )
  const result = await response.json()
  dispatch(getFlights(result))
}

// fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/RU/RUB/en-US/SVO-sky/JFK-sky/anytime?inboundpartialdate=anytime", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "d07f5dd8a5mshc4767386195d8e1p1bb6fbjsnc2f35ece3ba0",
// 		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

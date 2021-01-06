const initialState = [
  { id: 1, url: '/images/1.jpg' },
  { id: 2, url: '/images/2.jpg' },
  { id: 3, url: '/images/3.jpg' },
  { id: 4, url: '/images/1.jpg' },
]

export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const data = JSON.parse(localStorage.getItem('movies'))
const movieInitialValue = []

const movieReducer = (state = movieInitialValue, action) => {
     switch (action.type) {
          case "ADD_MOVIE": {
               return [...state, { ...action.payload }]
          }
          case "REMOVE_MOVIE": {
               const filtered = state.filter(ele => ele.id !== action.payload)
               return filtered
          }
          default: {
               if (localStorage.getItem('movies')) {
                    return [...data.movieStore]
               } else {
                    return [...state]
               }
          }
     }
}

export default movieReducer
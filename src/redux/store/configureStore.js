import { createStore, combineReducers } from 'redux'
import movieReducer from '../reducers/movieReducer'

function configureStore() {
     const store = createStore(combineReducers({
          movieStore: movieReducer
     }))
     return store
}

export default configureStore
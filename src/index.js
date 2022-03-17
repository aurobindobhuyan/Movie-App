import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from './redux/store/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore()
store.subscribe(() => {
  localStorage.setItem('movies', JSON.stringify(store.getState()))
})

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
import React from 'react'
import MovieContainer from './components/MovieContainer'
import AddForm from './components/AddForm'
import MovieStats from './components/MovieStats'

const App = (props) => {

  return (
    <div style={{ padding: '1%' }}>
      <h1 className='mb-5 mt-3'>My Big Movie List</h1>
      <div className='row'>
        <div className='col-7'>
          <MovieContainer />
        </div>
        <div className='col-5 container'>
          <div className='col-8 shadow-lg p-4 bg-body rounded'>
            <AddForm />
          </div>
          <div className='col-7 mt-5 shadow-lg p-5 bg-body rounded'>
            <MovieStats />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
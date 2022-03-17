import React from 'react'
import { useSelector } from 'react-redux'

const MovieStats = (props) => {
     const store = useSelector((store) => {
          return store.movieStore
     })
     const sorted = [...store].sort((a, b) => a.imdb - b.imdb)

     return (
          <>
               <h1>Movie Stats</h1>
               <p>Total Movies - {store.length}</p>
               <p># Top Ranked Movie {sorted.length > 0 && `- ${sorted[0].movieName}`} </p>
          </>
     )
}

export default MovieStats
import React, { useState, useEffect } from "react"
import { useSelector } from 'react-redux'
import MovieTable from "./MovieTable"
import MovieForm from './MovieForm'

const MovieContainer = (props) => {
     const [movieList, setMovieList] = useState([])
     const store = useSelector((store) => {
          return store.movieStore
     })

     useEffect(() => {
          setMovieList(store)
     }, [store])

     const handleSerachInput = (name) => {
          const filtered = store.filter(ele => ele.movieName.toLowerCase().includes(name.toLowerCase()))
          setMovieList(filtered)
     }

     const handleSelect = (name) => {
          const result = [...store].sort((a, b) => a.movieName.localeCompare(b.movieName))
          const result2 = [...store].sort((a, b) => a.imdb - b.imdb)
          if (name === "a-z") {
               setMovieList(result)
          } else if (name === "z-a") {
               setMovieList(result.reverse())
          } else if (name === "0-1") {
               setMovieList(result2)
          } else {
               setMovieList(result2.reverse())
          }
     }

     return (
          <>
               <MovieForm handleSerachInput={handleSerachInput} handleSelect={handleSelect} />
               <div className="container px-4">
                    <div className="row gx-5">
                         {
                              movieList.map(ele => <MovieTable key={ele.id} {...ele} />)
                         }
                    </div>
               </div>
          </>
     )
}

export default MovieContainer
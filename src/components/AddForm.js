import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addMovie } from '../redux/actions/movieAction'
import { Form, Button } from 'react-bootstrap'

const AddForm = (props) => {
     const [movieName, setMovieName] = useState('')
     const [imdb, setImdb] = useState('')
     const dispatch = useDispatch()
     const input = useRef(null)

     const handleInput = (e) => {
          if (e.target.name === 'movieName') {
               setMovieName(e.target.value)
          }
          if (e.target.name === 'imdb') {
               setImdb(e.target.value)
          }
     }

     const handleSubmit = (e) => {
          e.preventDefault()
          if (movieName && imdb) {
               const formData = {
                    id: Number(new Date()),
                    movieName: movieName,
                    imdb: Number(imdb)
               }
               dispatch(addMovie(formData))
               setMovieName('')
               setImdb('')
               input.current.focus()
          } else {
               alert('please fillup the input feilds')
               input.current.focus()
          }
     }

     return (
          <>
               <h1>Add Movie</h1>
               <Form onSubmit={handleSubmit}>
                    <Form.Control
                         value={movieName}
                         name="movieName"
                         type="text"
                         onChange={handleInput}
                         placeholder='Enter Movie Name'
                         ref={input}
                         autoComplete='off'
                    />
                    <br />

                    <Form.Control
                         name="imdb"
                         value={imdb}
                         type="number"
                         onChange={handleInput}
                         placeholder='IMDB Ranking'
                    />
                    <br />

                    <Button onClick={handleSubmit} variant="primary">Add</Button>
               </Form>
          </>
     )
}

export default AddForm
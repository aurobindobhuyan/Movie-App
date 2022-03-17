import React from 'react'
import { useDispatch } from 'react-redux'
import { removeMovie } from '../redux/actions/movieAction'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { CardImg } from 'react-bootstrap'

const MovieTable = (props) => {
     const { id, movieName, imdb } = props
     const dispatch = useDispatch()

     const handleRemove = (id) => {
          const result = window.confirm('Are you sure')
          if (result) {
               dispatch(removeMovie(id))
          }
     }

     return (
          <div className='col p-3'>
               <Card style={{ width: '16rem' }}>
                    <CardImg
                         alt="Card image cap"
                         src="https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1517845732/1517845731.jpg"
                         width="100%"
                    />

                    <Card.Body>
                         <Card.Title>{movieName}</Card.Title>
                         <Card.Text>#{imdb}</Card.Text>
                         <Button onClick={() => { handleRemove(id) }} variant="danger">Remove</Button>
                    </Card.Body>
               </Card>
          </div>
     )
}

export default MovieTable
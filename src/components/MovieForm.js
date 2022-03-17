import React, { useState, useEffect } from 'react'
import { Form, DropdownButton, Dropdown } from 'react-bootstrap'

const MovieForm = (props) => {
     const { handleSerachInput, handleSelect } = props
     const [input, setInput] = useState('')
     const [dropDown, setDropDown] = useState('')

     const handleInput = (e) => {
          setInput(e.target.value)
     }

     useEffect(() => {
          handleSerachInput(input)
     }, [input])

     useEffect(() => {
          handleSelect(dropDown)
     }, [dropDown])

     const handleSubmit = (e) => {
          e.preventDefault()
     }

     const handleDropDown = (e) => {
          setDropDown(e)
     }

     return (
          <Form onSubmit={handleSubmit} className='row'>
               <div className="col-8">
                    <Form.Control
                         type="text"
                         value={input}
                         onChange={handleInput}
                         placeholder='Search by name...'
                    />
               </div>

               <div className='col-4'>
                    <DropdownButton
                         title='select'
                         variant='success'
                         onSelect={handleDropDown}
                         id="dropdown-basic-button"
                    >
                         <Dropdown.Item eventKey="a-z">Sort by name A-Z</Dropdown.Item>
                         <Dropdown.Item eventKey="z-a">Sort by name Z-A</Dropdown.Item>
                         <Dropdown.Item eventKey="0-1">Sort by IMDB 0-1</Dropdown.Item>
                         <Dropdown.Item eventKey="1-0">Sort by IMDB 1-0</Dropdown.Item>
                    </DropdownButton>
               </div>
          </Form>
     )
}

export default MovieForm
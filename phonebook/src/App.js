import React, { useState } from 'react'
import Filter from "./Filter"
import PersonForm from "./PersonForm"
import Persons from "./Persons"

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [query, setQuery] = useState('')

    const handleNameTextChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberTextChange = (event) => {
        setNewNumber(event.target.value)
    }
    const handleSearchTextChange = (event) => {
        setQuery(event.target.value)
    }

    const hanldeSubmit = (event) => {
        event.preventDefault()
        if (persons.filter(person => person.name === newName).length > 0) {
            alert(`${newName} is already add to phonebook`)
        }
        else {
            const newContact = {
                name: newName,
                number: newNumber
            }
            setPersons(persons.concat(newContact))
            setNewName("")
            setNewNumber("")
        }
    }




    return (
        <div>
            <h2>Phonebook</h2>
            <Filter persons={persons} query={query} handleSearchTextChange={handleSearchTextChange}></Filter>
            <PersonForm hanldeSubmit={hanldeSubmit} handleNameTextChange={handleNameTextChange} handleNumberTextChange={handleNumberTextChange} newName={newName} newNumber={newNumber}></PersonForm>
            <Persons persons={persons}></Persons>
        </div>
    )
}

export default App
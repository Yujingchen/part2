import React, { useState, useEffect } from 'react'
import Filter from "./Filter"
import PersonForm from "./PersonForm"
import Persons from "./Persons"
import contactService from "./services/contacts"
const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [query, setQuery] = useState('')
    useEffect(() => {
        contactService.getAll().then(initialData => {
            setPersons(initialData)
        })
    }, [])
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
            if (window.confirm(`${newName} is already add to phonebook, replace the old number with a new one?`)) {
                const newContact = {
                    name: newName,
                    number: newNumber
                }
                const id = persons.find(p => p.name === newName).id
                const copy = persons.filter(p => p.id !== id)
                contactService.putContact(id, newContact).then((returnedData) => {
                    setPersons(copy.concat(returnedData))
                }).catch(e => {
                    console.log(e)
                })
            }
        }
        else {
            const newContact = {
                name: newName,
                number: newNumber
            }
            contactService.create(newContact).then((returnedData) => {
                setPersons(persons.concat(returnedData))

            })
        }
        setNewName("")
        setNewNumber("")
    }

    const handleDeleteContactOf = (id) => {
        contactService.deleteContact(id).then(() => {
            setPersons(persons.filter(person => person.id !== id))
        }).catch(e => {
            console.log(e)
        })
    }

    console.log("Hi from app.js")

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter persons={persons} query={query} handleSearchTextChange={handleSearchTextChange}></Filter>
            <PersonForm hanldeSubmit={hanldeSubmit} handleNameTextChange={handleNameTextChange} handleNumberTextChange={handleNumberTextChange} newName={newName} newNumber={newNumber}></PersonForm>
            <Persons persons={persons} handleDeleteContact={(id) => handleDeleteContactOf(id)} ></Persons>
        </div>
    )
}

export default App
import React from 'react'

const Person = ({ persons, handleDeleteContact }) => {
    const handleDeleteBtnClick = (person) => {
        if (window.confirm(`Delete ${person.name}`)) {
            handleDeleteContact(person.id)
        }
    }
    const numbersCollection = (
        persons.map(person => {
            return (
                <div key={person.name}>
                    <span >{person.name} {person.number}</span>
                    <span><button onClick={() => handleDeleteBtnClick(person)}>delete</button></span>
                </div >
            )
        })
    )
    return (
        <>
            <h2>Numbers</h2>
            {numbersCollection}
        </>
    )
}

export default Person
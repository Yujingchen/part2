import React from 'react'

const Person = ({ persons }) => {
    const numbersCollection = (
        persons.map(person => {
            return (
                <p key={person.name}>{person.name} {person.number}</p>
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
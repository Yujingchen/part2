import React from 'react'

const PersonForm = ({ hanldeSubmit, newName, newNumber, handleNameTextChange, handleNumberTextChange }) => {
    return (
        <>
            <h2>add a new</h2>
            <form onSubmit={hanldeSubmit}>
                <div>
                    name: <input value={newName} onChange={handleNameTextChange} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNumberTextChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}

export default PersonForm
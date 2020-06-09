import React from 'react'


const Filter = ({ persons, query, handleSearchTextChange }) => {
    const results = query !== "" ? persons.filter((person) => person.name.toLowerCase().indexOf(query.toLowerCase()) !== -1) : null
    const resultsCollection = results ?
        results.map(result => {
            return (
                <p key={result.name}>{result.name} {result.number}</p>
            )
        })
        : null
    return (
        <div>
            filter shown with: <input value={query} onChange={handleSearchTextChange} />
            {resultsCollection}
        </div>
    )
}

export default Filter
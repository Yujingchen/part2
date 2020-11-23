import React from 'react'
import Country from "./Country"


const Filter = ({ countries, query, handleSearchTextChange }) => {
    const handleShowClick = () => { }
    const results = query !== "" ? countries.filter((country) => country.name.toLowerCase().indexOf(query.toLowerCase()) !== -1) : []
    let resultsCollection = null
    if (results.length > 10) {
        resultsCollection = <p>Too many matches, specify another</p>
    }
    else if (results.length <= 10 && results.length > 1) {
        resultsCollection = results.map(result => {
            return (
                <p key={result.name}>{result.name}<span><button onClick={handleShowClick}>show</button></span></p>
            )
        })
    }
    else if (results.length === 1) {
        resultsCollection = <Country country={results[0]}></Country>
    }
    else {
        resultsCollection = <p>No country found</p>
    }

    console.log("hi from filter")
    return (
        <div>
            filter shown with: <input value={query} onChange={handleSearchTextChange} />
            {resultsCollection}
        </div>
    )
}

export default Filter
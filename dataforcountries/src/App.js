import React, { useState, useEffect } from 'react'
import Filter from "./Filter"
import axios from "axios"
const App = () => {
    const [countries, setCountries] = useState([])
    const [query, setQuery] = useState('')
    useEffect(() => {
        const promise = axios.get('https://restcountries.eu/rest/v2/all')
        promise.then(response => {
            setCountries(response.data)
        })
    }, [])


    const handleSearchTextChange = (event) => {
        setQuery(event.target.value)
    }


    return (
        <div>
            <Filter countries={countries} query={query} handleSearchTextChange={handleSearchTextChange}></Filter>
        </div>
    )
}

export default App
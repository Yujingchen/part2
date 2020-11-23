import React from 'react'

const Total = (props) => {
    const { parts } = props
    let total = parts.reduce((total, part) => {
        return (part.exercises + total)
    }, 0
    )

    return (
        <>
            <b> total of {total} exercises</b >
        </>
    )
}

export default Total
import React from 'react'
import Part from "./Part"
const Content = (props) => {
    const { parts } = props
    const partsCollection = parts.map((part) =>
        <Part key={part.id} name={part.name} exercises={part.exercises}></Part>
    )
    return (
        <>
            {partsCollection}
        </>
    )
}

export default Content
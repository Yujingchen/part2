import React from 'react'
import Part from "./Part"
const Content = (props) => {
    const { parts } = props
    const [part1, part2, part3] = parts
    return (
        <>
            <Part name={part1.name} exercises={part1.exercises}></Part>
            <Part name={part2.name} exercises={part2.exercises}></Part>
            <Part name={part3.name} exercises={part3.exercises}></Part>
        </>
    )
}

export default Content
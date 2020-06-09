import React from "react"
const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        <div style={{ color: "red", backgroundColor: "grey", fontSize: "20px" }} className="error">
            {message}
        </div>
    )
}
export default Notification
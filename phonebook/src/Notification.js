import React from "react"
const Notification = ({ message, successMessage }) => {

    if (message) {
        return (
            <div style={{ color: "red", backgroundColor: "grey", fontSize: "20px" }} className="error">
                {message}
            </div>
        )
    }
    else if (successMessage) {
        return (
            <div style={{ color: "green", backgroundColor: "grey", fontSize: "20px", border: "3px solid green" }} className="success" >
                {successMessage}
            </div >
        )
    }
    return null
}
export default Notification
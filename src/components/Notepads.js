import Row from "react-bootstrap/esm/Row"
import React from 'react'
import { Link } from "react-router-dom"
import "../styles/links.css"

const Notepads = ({ notepads }) => {

    return(
        notepads.map(notepad => {
            return (
                <Row className="link-hover" >
                    <Link className="link" key={String(notepad._id)} to={`/notepads/notepad/${notepad._id}`}>
                            <h3 >{notepad.title}</h3>
                    </Link>
                </Row>
            )
        })
    )  
    
}


export default Notepads
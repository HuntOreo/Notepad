import React from 'react'
import { Link } from "react-router-dom"
import "../styles/links.css"
import "../styles/buttons.css"
import { Container, Button, Row, Col } from "react-bootstrap"

const Notepads = ({ notepads }) => {

    return(
        <div>
            <Button className="addNotepadBtn">Add Notepad</Button>

            <Container>
                <Row className="rowWrap">
                    {notepads.map(notepad => {
                        return (
                            <Col lg="auto" className="link-hover" key={String(notepad._id)} >
                                <Link className="link" to={`/notepads/notepad/${notepad._id}`}>
                                        <h3 >{notepad.title}</h3>
                                </Link>
                            </Col>
                        )
                    })}
                </Row>
           
            </Container>
        </div>
    )  
    
}


export default Notepads
import axios from 'axios'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import React from 'react'
import Note from './Note'
import { Container, Col } from 'react-bootstrap'
import '../styles/note.css'

const Notepad = () => {
    const params = useParams()
    const [notepad, setNotepad] = useState({})

    useEffect(() => {
        const getNotepad = async () => {
            const notepad = await axios.get(`/api/notepads/notepad/${params.id}`)
            setNotepad(notepad.data)
        }

        getNotepad()
    }, [])

    return(
            <Container>
                <Col className="notes">
                    <h1>{notepad.title}</h1>
                    <Note notepadID={notepad._id} />
                </Col>
            </Container>
        
    )      
}

export default Notepad
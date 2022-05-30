import axios from 'axios'
import { React, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Col, Button, Row } from 'react-bootstrap'
import Note from './Note'
import '../styles/note.css'
import '../styles/overlay.css'
import NotePopup from './popups/NotePopup'

const Notepad = () => {
    const params = useParams()
    const [ notepad, setNotepad ] = useState({})
    const [ flag, setFlag ] = useState(false)
    const [ notes, setNotes ] = useState([])

    useEffect(() => {
        const getNotepad = async () => {
            const notepad = await axios.get(`/api/notepads/notepad/${params.id}`)
            setNotepad(notepad.data)
        }

        getNotepad()
    }, [])

    const toggleOverlay = () => {
        setFlag(!flag)
    }

    return(
        <div>
            <Container>
                <Col className="notes">
                    <h1>{notepad.title}</h1>
                    <Button onClick={toggleOverlay}>Add Note</Button>
                    <Row className='notesWrap'>
                        <Note notepadID={notepad._id} notes={notes} setNotes={setNotes} />
                    </Row>
                </Col>
            </Container>
            <NotePopup flag={flag} notepad={notepad._id} notes={notes} setNotes={setNotes}/>

            {/* overlay */}
            <div onClick={toggleOverlay} className="overlay" style={
                { visibility: flag ? "visible" : "hidden",
                    opacity: flag ? "50%" : "0",
                    transitionDuration: "0.2s",
                    width: "100%",
                    height: "100%" }}>
            </div>
        </div>
        
    )      
}

export default Notepad
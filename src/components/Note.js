import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { Row } from "react-bootstrap"
import "../styles/note.css"


const Note = ({ notepadID }) => {

    const [ notes, setNotes ] = useState([])

    useEffect(() => {
        const getNotes = async (id) => {
            const grabbedNotes = await axios.get("/api/notes")
            setNotes(grabbedNotes.data)
        }

        getNotes(notepadID)
    }, [])

    return (
        notes.map((note) => {
            return (
                <Row className="note" key={note._id} style={{
                    backgroundColor: note.color
                }}>
                    <p>{note.body}</p>
                </Row>
            )
        })
    )
}

export default Note
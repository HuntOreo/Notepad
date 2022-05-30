import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { Row } from "react-bootstrap"
import "../styles/note.css"


const Note = ({ notepadID, notes, setNotes }) => {

    useEffect(() => {
        const getNotes = async (id) => {
            
            if(id === undefined) return null

            const grabbedNotes = await axios.get(`/api/notepads/${id}/notes`)
            setNotes(grabbedNotes.data)
           
        }

        getNotes(notepadID)
    }, [notepadID])

    return (
        notes.map((note) => {
            return (
                <div className="note" key={note._id} style={{
                    backgroundColor: note.color
                }}>
                    <p>{note.body}</p>
                </div>
            )
        })
    )
}

export default Note
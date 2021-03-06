import React from "react"
import { useEffect } from "react"
import axios from "axios"
import "../styles/note.css"


const Note = ({ notepadID, notes, setNotes, setNote, setColor, setNewFlag, setBody }) => {

    useEffect(() => {
        const getNotes = async (id) => {
            
            if(id === undefined) return null

            const grabbedNotes = await axios.get(`/api/notepads/${id}/notes`)
            setNotes(grabbedNotes.data)
        }

        getNotes(notepadID)
    }, [notepadID])


    const onClick = async (e, thisNote) => {
        const currentlySelected = document.querySelector('.current')

        if (currentlySelected === null) {
            e.target.className = "current"
            
            const { data } = await axios.get(`/api/notes/note/${thisNote}`)

            setBody(data.body)
            setColor(data.color)
            setNote(data)
            setNewFlag(false)
        } else {
            currentlySelected.classList.toggle('current')
            e.target.classList = "current"

            const { data }= await axios.get(`/api/notes/note/${thisNote}`)

            setBody(data.body)
            setColor(data.color)
            setNote(data)
            setNewFlag(false)
        }
    }

    return (
        notes.map((note) => {
            return (
                <div onClick={(e) => {onClick(e, note._id)}} className="note" key={note._id} style={{
                    backgroundColor: note.color
                }}>
                    <p>{note.body}</p>
                </div>
            )
        })
    )
}

export default Note
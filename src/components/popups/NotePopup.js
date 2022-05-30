import { React, useState } from "react"
import { Button } from "react-bootstrap"
import axios from "axios"
import '../../styles/addNote.css'

const NotePopup = ({ flag, notepad, notes, setNotes }) => {

    const [body, setBody] = useState("")

    const onClick = async() => {
        console.log(body)
        const note = await axios.post('/api/post/note', {
            notepadID: notepad,
            body: body,
        })

        console.log(note.data)
        setNotes([...notes, note.data])

       
    } 

    const onInput = (e) => {
        console.log(e.target)
        setBody(e.target.value)
    }

    return (
        <div className="addNote pop-up" style={{ 
            visibility: flag ? "visible" : "hidden",
            opacity: flag ? "100%" : "0",
            transitionDuration: "0.2s"
        }}>
        <Button onClick={onClick} style={{
            border: "1px solid black",
            margin: "10px"
        }}>Add</Button>
        <textarea style={{
                maxHeight: "600px",
                minHeight: "300px",
            }} onInput={onInput} type="text" placeholder='Notepad...'/>
        </div>
    )
}

export default NotePopup
import axios from 'axios'
import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Note from './Note'
import '../styles/flex.css'

const Notepad = () => {

    const params = useParams()
    
    const [ notepad, setNotepad ] = useState({})
    const [ notes, setNotes ] = useState([])
    const [ body, setBody ] = useState('')
    const [ note, setNote ] = useState({})
    const [ color, setColor ] = useState('#EAF3FA')
    const [ newFlag, setNewFlag ] = useState(true)

    useEffect(() => {
        const getNotepad = async () => {
            const notepad = await axios.get(`/api/notepads/notepad/${params.id}`)
            setNotepad(notepad.data)
        }

        getNotepad()
    }, [])

    const addNote = async() => {
        if(newFlag) {
            const newNote = await axios.post(`/api/post/note`, {
                notepadID: params.id,
                body: body
            })
            setNotes([...notes, newNote.data])
        } else {
            const updatedNote = await axios.put(`/api/update/notes/${note._id}`, {
                body: body,
                color: color
            })

            const newNotes = notes.map((note) => {
                if(note._id === updatedNote.data._id){
                    note.body = updatedNote.data.body
                    return note
                } else {
                    return note
                }
            })
            setNotes(newNotes)
        }
    }

    return(
        <div className='notes'>
            <div className='container'>
                <div className='col-main'>
                    <div className='row-1'>
                        <h3>{notepad.title}</h3>
                    </div>

                    <div className='row-2'>
                        <div className='col-1'>
                            <Note notepadID={notepad._id} notes={notes} setNotes={setNotes} setNote={setNote} setColor={setColor} setNewFlag={setNewFlag} setBody={setBody} />
                        </div>
                        <div className='col-2'>
                            <div className='addNoteBody'>
                                <div className='noteOptions'>
                                    <button>New</button>
                                    <button onClick={addNote}>add</button>
                                </div>
                                <textarea style={{"backgroundColor": color}} onInput={(e) => setBody(e.target.value)} value={body}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )      
}

export default Notepad
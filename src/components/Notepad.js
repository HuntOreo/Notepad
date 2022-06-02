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
    const [ note, setNote ] = useState({})

    useEffect(() => {
        const getNotepad = async () => {
            const notepad = await axios.get(`/api/notepads/notepad/${params.id}`)
            setNotepad(notepad.data)
        }

        getNotepad()
    }, [])

    const addNote = async() => {
        const newNote = await axios.post(`/api/post/note`, {
            notepadID: params.id,
            body: note
        })
        setNotes([...notes, newNote.data])
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
                            <Note notepadID={notepad._id} notes={notes} setNotes={setNotes} setNote={setNote} />
                        </div>
                        <div className='col-2'>
                            <div className='addNoteBody'>
                                <div className='noteOptions'>
                                    <button onClick={addNote}>add</button>
                                </div>
                                <textarea onInput={(e) => setNote(e.target.value)} defaultValue={note.body}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )      
}

export default Notepad
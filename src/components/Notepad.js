import axios from 'axios'
import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Note from './Note'
import '../styles/flex.css'

const Notepad = ({colorVisibility, setColorVisibility}) => {

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

        if(notes.length === 0) setNewFlag(true)

        if(newFlag === true) {
            const newNote = await axios.post(`/api/post/note`, {
                notepadID: params.id,
                body: body,
                color: color
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

    const startNewNote = () => {
        const current = document.querySelector('.current')
        current.classList.toggle('current')
        setNewFlag(true)
        setBody('')
        setNote({})
    }

    const deleteNote = async() => {
        await axios.delete(`/api/delete/notes/note/${note._id}`)
        const newNotes = [...notes]
        for(let i = 0; i < notes.length; i++) {
            if(notes[i]._id === note._id) {
                newNotes.splice(i, 1)
            }
        }

        setNewFlag(true)
        setNotes(newNotes)
        setBody('')
    }

    const showColors = () => {
        if(colorVisibility === 'hidden') {
            setColorVisibility('visible')
        } else {
            setColorVisibility('hidden')
        }
    }

    const chooseColor = async (e) => {
        if(newFlag === false) {
            const updatedNote = await axios.put(`/api/update/notes/${note._id}`, {
                color: e.target.style.backgroundColor
            })

            setColor(e.target.style.backgroundColor)

            const { data } = updatedNote

            const newNotes = notes.map(item => {
                if(item._id === data._id) {
                    item.color = data.color
                    return item
                } else {
                    return item
                }
            })

            setNotes([...newNotes])
        } else {
            setColor(e.target.style.backgroundColor)
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
                                    <button onClick={deleteNote}>Delete</button>
                                    <button onClick={startNewNote}>New</button>
                                    <button onClick={addNote}>Add</button>
                                    <button className='toggleColors' onClick={showColors}>Color</button>
                                    <div className='colors' style={{"visibility": `${colorVisibility}`}}>
                                        <button onClick={async (e) => await chooseColor(e)} style={{
                                            "border": "2px solid #f8dddd",
                                            "backgroundColor": "#fcefef"
                                        }}></button>
                                        <button onClick={async (e) => await chooseColor(e)} style={{
                                            "border": "2px solid #73d4b7",
                                            "backgroundColor": "#a1e2cf"
                                        }}></button>
                                        <button onClick={async (e) => await chooseColor(e)} style={{
                                            "border": "2px solid #d46549",
                                            "backgroundColor": "#db7f67"
                                        }}></button>
                                        <button onClick={async (e) => await chooseColor(e)} style={{
                                            "border": "2px solid #f8d83a",
                                            "backgroundColor": "#fcefb0"
                                        }}></button>
                                        <button onClick={async (e) => await chooseColor(e)} style={{
                                            "border": "2px solid #5b639a",
                                            "backgroundColor": "#e8ebed"
                                        }}></button>
                                    </div>
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
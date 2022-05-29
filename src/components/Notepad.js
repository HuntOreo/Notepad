import axios from 'axios'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import React from 'react'

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
        <div>
            <h1>{notepad.title}</h1>
        </div>
    )      
}

export default Notepad
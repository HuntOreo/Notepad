import axios from 'axios'
import React from 'react'
import '../../styles/addNotepad.css'
import '../../styles/popup.css'

const NotepadName = ({ flag, setFlag, myNotepads, setMyNotepads, user }) => {

    const keyPress = async (e) => {
        if (e.key === "Enter") {
            const notepad = await axios.post('/api/post/notepad', {
                title: e.target.value,
                userID: user
            })
            setMyNotepads([...myNotepads, notepad.data])
            setFlag(!flag)
            e.target.value = ""
        }
    }

    return (
        <div className="addNotepad pop-up" style={{ 
                visibility: flag ? "visible" : "hidden",
                opacity: flag ? "100%" : "0",
                transitionDuration: "0.2s"
            }}>
            <h3>Notepad Name</h3>
            <input onKeyDown={keyPress} type="text" placeholder='Notepad...'/>
        </div>
    )
}

export default NotepadName
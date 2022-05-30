import React from 'react'
import '../styles/addNote.css'

const NotepadName = ({ flag }) => {

    return (
        <div className="addNote pop-up" style={{ 
                visibility: flag ? "visible" : "hidden",
            }}>
            <h3>Notepad Name</h3>
            <input type="text" />
        </div>
    )
}

export default NotepadName
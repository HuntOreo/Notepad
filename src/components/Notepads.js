import React from 'react'
import { Link } from "react-router-dom"
import "../styles/links.css"
import "../styles/buttons.css"

const Notepads = ({ notepads, flag, setFlag }) => {

    const onClick = () => {
        setFlag(!flag)
    }

    return(
        <div>
            <button onClick={onClick} className="addNotepadBtn">Add Notepad</button>

            <div className='container'>
                <div className="rowWrap row">
                    {notepads.map(notepad => {
                        return (
                            <div lg="auto" className="link-hover col" key={String(notepad._id)} >
                                <Link className="link" to={`/notepads/notepad/${notepad._id}`}>
                                        <h3 >{notepad.title}</h3>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )  
    
}


export default Notepads
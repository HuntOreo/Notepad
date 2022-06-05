import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Notepads from './Notepads';
import NotepadName from '../components/popups/NotepadName';

import '../styles/home.css'

const Home = ({ user, flag, setFlag }) => {

    const [ myNotepads, setMyNotepads ] = useState([])

    //get user notepads IF user is logged in
    useEffect(() => {
        const getNotepads = async(user) => {
        if(user._id === undefined) return null 

        try {

            const notepads = await axios.get(`/api/${user._id}/notepads`)
            setMyNotepads([...notepads.data])

        } catch(error) {
            console.log(error)
        }        
        }

        getNotepads(user)
    }, [user])

    const onClick = (e) => {
        setFlag(false)
    }

    return (
        
        <div className='home'>
            <div className='column-1'>
                <div>
                    <h2>Hello {user.name}</h2>
                    <Notepads notepads={myNotepads} flag={flag} setFlag={setFlag} />
                </div>

                <NotepadName flag={flag} setFlag={setFlag} user={user._id} setMyNotepads={setMyNotepads} myNotepads={myNotepads}/>
                {/* overlay */}
                <div onClick={onClick} className="overlay" style={
                    { visibility: flag ? "visible" : "hidden",
                        opacity: flag ? "50%" : "0",
                        transitionDuration: "0.2s" }}>
                </div>
            </div>
        </div>
    )
}

export default Home
import './App.css';
import './styles/overlay.css'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'

//Components
import Notepad from './components/Notepad';
import Home from './components/Home'
import Login from './components/Login'
import NotepadName from './components/NotepadName';


function App() {
  const [ user, setUser ] = useState({})
  const [ myNotepads, setMyNotepads ] = useState([])
  const [ notepadNameFlag, setNotepadNameFlag ] = useState(false)

  //login user IF user is not logged in
  useEffect(() => {
    const getUser = async() => {
      if(user._id !== undefined ) return null 

      try {
        const login = await axios.get(`/api/users/user/629255aa175a0e728a651875`)
        setUser({...login.data})    
      } catch (error) {
        console.log(error)
      }
    }
    
    getUser()

  }, [user])

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
    setNotepadNameFlag(false)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user._id !== undefined ? <Home user={user} myNotepads={myNotepads} notepadNameFlag={notepadNameFlag} setNotepadNameFlag={setNotepadNameFlag}/> : <Login />} />
        <Route exact path='/notepads/notepad/:id' element={<Notepad />}/>
      </Routes>
      <NotepadName flag={notepadNameFlag}/>
      <div onClick={onClick} className="overlay pop-up" style={
          { visibility: notepadNameFlag ? "visible" : "hidden"}}>
      </div>
    </div>
  );
}

export default App;

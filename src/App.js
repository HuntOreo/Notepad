import './App.css';
import './styles/popup.css'
import './styles/overlay.css'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'

//Components
import Notepad from './components/Notepad';
import Home from './components/Home'
import Login from './components/Login'



function App() {
  const [ user, setUser ] = useState({})
  const [ flag, setFlag ] = useState(false)

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

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user._id !== undefined ? <Home user={user} flag={flag} setFlag={setFlag}/> : <Login />} />
        <Route exact path='/notepads/notepad/:id' element={<Notepad />}/>
      </Routes>

    </div>
  );
}

export default App;

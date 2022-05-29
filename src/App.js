import './App.css';
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
  const [ myNotepads, setMyNotepads ] = useState([])

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

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user._id !== undefined ? <Home user={user} myNotepads={myNotepads}/> : <Login />} />
        <Route exact path='/notepads/notepad/:id' element={<Notepad />}/>
      </Routes>
    </div>
  );
}

export default App;

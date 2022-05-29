import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import Notepad from './components/Notepad';
import Home from './components/Home'


function App() {
  const [ user, setUser ] = useState({})
  const [ myNotepads, setMyNotepads ] = useState([])

  useEffect(() => {
    const getUser = async() => {
      try {

        const login = await axios.get(`/api/users/user/629255aa175a0e728a651875`)
        setUser({...login.data})
    
      } catch (error) {
        console.log(error)
      }
    }
    
    const getNotepads = async() => {
      try {

        const notepads = await axios.get('/api/notepads')
        setMyNotepads([...notepads.data])

      } catch(error) {
        console.log(error)
      }
    }
    getNotepads()
    getUser()

  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home user={user} myNotepads={myNotepads}/>} />
        <Route exact path='/notepads/notepad/:id' element={<Notepad />}/>
      </Routes>
    </div>
  );
}

export default App;


import './App.css'
// import { useState } from 'react'
import Box from './components/Box.jsx'
import userData from './components/data/userData.jsx'
import Rectangle from './components/Rectangle.jsx'

import { useState, useEffect } from 'react'


function App() {

  const [ users, setUsers] = useState()
  const [ showRemoteData, setShowRemoteData] = useState(false)
  const [ showCollectData, setShowCollectData] = useState(false)
  
  const fetchCollectData = () => {
    fetch('https://collect-data-be.onrender.com/users')
    .then(response => response.json())
    .then(response =>setShowCollectData(response))
  .catch((error)=> {
    console.log((error))
  })
  }

  function handleCollectFetch (){
    fetchCollectData()
  }

  useEffect(()=>{
    fetchCollectData()
  },[])

  const fetchUsers = () => {
    fetch ('http://localhost:2029/users')
    .then(response => response.json())
    .then(response => setUsers(response)
    )
    .catch((error)=> {
      console.log(error)
    })
  }
  useEffect (()=>{
    fetchUsers()
  },[])

  const showRemote = () => {
    setShowRemoteData(!showRemoteData)
  }
  // const [user] = useState(userData)
  // console.log(userData)
  return (
    <div className="app">
      <h1>Local data</h1>
      <div className='row'>
        {userData.map((user, id)=> 
          <Box key={id} user={user}/>
        )} 
      </div>
      <div><button onClick={showRemote}>  fetch local backend data</button></div>
      <div><button onClick={handleCollectFetch}>  fetch Collect data</button></div>
      {showRemoteData ? (
        <div className='app'>
          <h1>Remote Data</h1>
          <div className='row'>
            {users.map((user, id)=> 
              <Box key={id} user={user}/>
            )} 
          </div>
        </div>

      ) : (
        null
        // <div className='row'>
        //   {userData.map((user, id)=> 
        //     <Box key={id} user={user}/>
        //   )}
        // </div>

      )}
      <Rectangle/>
    </div>
  )
}

export default App

// const obj = {}

// const obj2 = {}

// obj === obj2 => false

// const obj3 = obj
// obj2 === obj => true
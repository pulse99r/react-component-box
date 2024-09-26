
import './App.css'
// import { useState } from 'react'
import Box from './components/Box.jsx'
import userData from './components/data/userData.jsx'
import Rectangle from './components/Rectangle.jsx'

import { useState, useEffect } from 'react'


function App() {

  const [ users, setUsers] = useState()
  const [ showRemoteData, setShowRemoteData] = useState(false)
  

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
      {showRemoteData ? (
        <div >
          <div className='row'>
            {userData.map((user, id)=> 
              <Box key={id} user={user}/>
            )} 
          </div>
          <div className='row'>
            {users.map((user, id)=> 
              <Box key={id} user={user}/>
            )} 
          </div>
        </div>

      ) : (
        <div className='row'>
          {userData.map((user, id)=> 
            <Box key={id} user={user}/>
          )}
        </div>

      )}
      <div><button onClick={showRemote}>  fetch remote data</button></div>
      <Rectangle/>
    </div>
  )
}

export default App

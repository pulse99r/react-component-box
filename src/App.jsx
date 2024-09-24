
import './App.css'
// import { useState } from 'react'
import Box from './components/Box.jsx'
import userData from './components/data/userData.jsx'
import Rectangle from './components/Rectangle.jsx'

function App() {
  // const [user] = useState(userData)
  // console.log(userData)
  return (
    <div className="app">
      {userData.map((user, id)=> 
        <Box key={id} user={user}/>
      )}
      <Rectangle/>
    </div>
  )
}

export default App

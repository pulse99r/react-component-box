import './Box.css'
import { useState } from 'react'

const Box = () => {
  const [color, setColor] = useState(false)

  const handleClick = () => {
    console.log("before change:", color)
    setColor(!color)
  }
  return (
    <div onClick={handleClick} 
    id='box' className={color ? 'red':"blue"}>
      {console.log("after change:",color)}
      {color ? (
          <p>
            * * * RED * * *
          </p>
        ) : (
          <p>
            * * * BLUE * * *
          </p>
        )
      }
    </div>
  )
}

export default Box;
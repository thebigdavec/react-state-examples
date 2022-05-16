import React, { useContext } from 'react'
import OurContext from '../OurContext'

export default function MainArea() {
  const { color, size } = useContext(OurContext)
  return (
    <div className="main-area" style={{ color, fontSize: `${size}px` }}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quod
        obcaecati dolore debitis amet aut, excepturi voluptas ratione quibusdam
        laboriosam, optio pariatur provident doloremque consequatur animi?
        Consequuntur, officiis. Explicabo, vel.
      </p>
    </div>
  )
}

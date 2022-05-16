import React from 'react'
import OurContext from '../OurContext'

export default function Sidebar() {
  const { color, size, setColor, setSize } = React.useContext(OurContext)

  return (
    <div className="sidebar">
      <input type="text" value={size} onChange={e => setSize(e.target.value)} />
      <input
        type="text"
        value={color}
        onChange={e => setColor(e.target.value)}
      />
      <button
        onClick={() => {
          setSize(20)
          setColor('pink')
        }}>
        Make the text 20px and pink
      </button>
    </div>
  )
}

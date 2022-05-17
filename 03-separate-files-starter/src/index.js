import React, { useState, useReducer } from 'react'
import { createRoot } from 'react-dom/client'

import Sidebar from './components/Sidebar'
import MainArea from './components/MainArea'
import Footer from './components/Footer'

import OurContext from './OurContext'
import DispatchContext from './DispatchContext'
import ourReducerFunction from './OurReducerFunction'

const initialState = {
  color: 'skyblue',
  size: 25,
  likes: 0
}

function App() {
  const [state, dispatch] = useReducer(ourReducerFunction, initialState)

  return (
    <DispatchContext.Provider value={dispatch}>
      <OurContext.Provider value={state}>
        <div className="grid-parent">
          <div className="header">
            <h1>Welcome To Our App</h1>
            <p>
              The current size is {state.size} and the current color is{' '}
              {state.color}.
            </p>
            <p>
              This page has been liked <strong>{state.likes}</strong> times.
            </p>
          </div>
          <Sidebar />
          <MainArea />
          <Footer />
        </div>
      </OurContext.Provider>
    </DispatchContext.Provider>
  )
}

const root = createRoot(document.querySelector('#app'))
root.render(<App />)

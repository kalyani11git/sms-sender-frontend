import React from 'react';
import { useState } from 'react';
import './App.css'
import SendMessage from './components/SendMessage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SendMessage/>
    </>
  )
}

export default App

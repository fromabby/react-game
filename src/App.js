import React, { useState, useEffect } from 'react'
import Card from './components/dragdrop/Card'
import Wordle from './components/wordle/Wordle'
import Winner from './components/wordle/Winner'
import './App.css'

function App() {
    const [isWon, setIsWon] = useState(false)
    const [displayEnd, setDisplayEnd] = useState(false)

    useEffect(() => {
        if (isWon) {
          const timeout = setTimeout(() => setDisplayEnd(true), 500)
          return () => { clearTimeout(timeout) }
        }
      }, [isWon])

    return (
        <div id="board-container">
            {displayEnd ? <Winner setIsWon={setIsWon} /> : <Wordle word={['b', 'o', 'n', 'a', 'k']} setIsWon={setIsWon} />}
        </div>
    );
}

export default App
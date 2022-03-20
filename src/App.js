import React, { useState } from 'react'
import Card from './components/dragdrop/Card'
import Wordle from './components/wordle/Wordle'
import Winner from './components/wordle/Winner'
import './App.css'

function App() {
    const [isWon, setIsWon] = useState(false)
    return (
        <div id="board-container">
            {isWon ? <Winner setIsWon={setIsWon} /> : <Wordle word={['b', 'o', 'n', 'a', 'k']} setIsWon={setIsWon} />}
        </div>
    );
}

export default App
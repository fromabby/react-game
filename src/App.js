import React, { useState } from 'react'
import Card from './components/dragdrop/Card'
import Wordle from './components/wordle/Wordle'
import './App.css'

function App() {
    const [isWon, setIsWon] = useState(false)

    return (
        isWon ? <h1>You won!</h1> : <Wordle word={['b', 'o', 'n', 'a', 'k']} setIsWon={setIsWon} />
    );
}

export default App;
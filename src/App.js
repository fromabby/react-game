import React, { useState, useEffect } from 'react'
import { words } from './words.js'
import Wordle from './components/wordle/Wordle'
import Winner from './components/wordle/EndScreen'
import './App.css'

function App() {
    const [isWon, setIsWon] = useState(false)
    const [currentRow, setCurrentRow] = useState(0)
    const [displayWinner, setDisplayWinner] = useState(false)
    const [score, setScore] = useState(0)

    const compute = (current, row) => {
        return current + (6 / (row + 1)) * 10
    }

    useEffect(() => {
        if (isWon) {
            setScore(v => compute(v, currentRow))
            const timeout = setTimeout(() => setDisplayWinner(true), 500)
            return () => { clearTimeout(timeout) }
        }
    }, [isWon])

    useEffect(() => {
        if (currentRow === 6) {
            const timeout = setTimeout(() => setDisplayWinner(true), 500)
            return () => { clearTimeout(timeout) }
        }
    }, [currentRow])

    return (
        <div>
            <div id="title-container">
                <h1>MGA WORDS</h1>
                <p>hindi masasama</p>
            </div>
            <div id="board-container">
                {displayWinner ?
                    <Winner
                        setIsWon={setIsWon}
                        isWon={isWon}
                        setCurrentRow={setCurrentRow}
                        setDisplayWinner={setDisplayWinner}
                        setScore={setScore}
                    /> :
                    <div>
                        <p style={{ color: 'white' }}>score: {score}</p>
                        <Wordle
                            question={words[Math.floor(Math.random() * 10)]}
                            setIsWon={setIsWon}
                            setCurrentRow={setCurrentRow}
                            currentRow={currentRow}
                        />

                    </div>
                }
            </div>
        </div>
    );
}

export default App
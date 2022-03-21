import React, { useState, useEffect } from 'react'
import Card from './components/dragdrop/Card'
import Wordle from './components/wordle/Wordle'
import Winner from './components/wordle/EndScreen'
import './App.css'

function App() {
    const [isWon, setIsWon] = useState(false)
    const [currentRow, setCurrentRow] = useState(0)
    const [displayWinner, setDisplayWinner] = useState(false)

    useEffect(() => {
        if (isWon) {
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

    console.log(currentRow)
    console.log(isWon)
    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <h1>WORDLE</h1>
                <h4>start guessing!</h4>
            </div>
            <div id="board-container">
                {displayWinner ?
                    <Winner
                        setIsWon={setIsWon}
                        isWon={isWon}
                        setCurrentRow={setCurrentRow}
                        setDisplayWinner={setDisplayWinner}
                    /> :
                    <Wordle
                        word={['b', 'o', 'n', 'a', 'k']}
                        setIsWon={setIsWon}
                        setCurrentRow={setCurrentRow}
                        currentRow={currentRow}
                    />
                }
            </div>
        </div>
    );
}

export default App
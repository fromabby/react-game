import React from 'react'

const EndScreen = ({ setIsWon, isWon, setCurrentRow, setDisplayWinner, setScore, setUsedLetters, keyboard, setStreak }) => {
    const reset = () => {
        setIsWon(false)
        setCurrentRow(0)
        setDisplayWinner(false)
        setScore(0)
        setUsedLetters(keyboard)
        setStreak(0)
    }

    const nextGame = () => {
        setIsWon(false)
        setCurrentRow(0)
        setDisplayWinner(false)
        setUsedLetters(keyboard)
    }
    return (
        <div id="end-screen-container">
            <h1>{isWon ? "You won!" : "You lost!"}</h1>
            <button className="button" onClick={isWon ? nextGame : reset}>{isWon ? "Next round" : "Try again"}</button>
        </div>
    )
}

export default EndScreen

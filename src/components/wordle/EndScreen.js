import React from 'react'

const EndScreen = ({ setIsWon, isWon, setCurrentRow, setDisplayWinner, setScore }) => {
    return (
        <div>
            {isWon ? <>
                <p>You won!</p>
                <button onClick={() => {
                    setIsWon(false)
                    setCurrentRow(0)
                    setDisplayWinner(false)
                }}>Next round</button>
            </> : <>
                <p>You lost!</p>
                <button onClick={() => {
                    setIsWon(false)
                    setCurrentRow(0)
                    setDisplayWinner(false)
                    setScore(0)
                }}>Try again</button>
            </>}

        </div>
    )
}

export default EndScreen

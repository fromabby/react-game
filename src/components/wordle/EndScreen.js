import React from 'react'

const EndScreen = ({ setIsWon, isWon, setCurrentRow, setDisplayWinner }) => {
    return (
        <div>
            {isWon ? <p>You won!</p> : <p>You failed.</p>}
            <button onClick={() => {
                setIsWon(false)
                setCurrentRow(0)
                setDisplayWinner(false)
            }}>Play again</button>
        </div>
    )
}

export default EndScreen

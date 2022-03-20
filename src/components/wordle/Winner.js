import React from 'react'

const Winner = ({ setIsWon }) => {
    return (
        <div>
            <p>You won!</p>
            <button onClick={() => setIsWon(false)}>Play again</button>
        </div>
    )
}

export default Winner

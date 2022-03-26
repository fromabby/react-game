import React from 'react'
import Key from './Key'

const Row = ({ letters, usedLetters }) => {
    return (
        <div className="key-row">
            {letters.map(letter => (
                <Key letter={letter} usedLetters={usedLetters} key={letter} />
            ))}
        </div>
    )
}

export default Row

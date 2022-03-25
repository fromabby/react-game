import React from 'react'
import Key from './Key'

const Row = ({ letters, usedLetters }) => {
    return (
        <tr>
            <div className="key-row">
                {letters.map(letter => (
                    <Key letter={letter} usedLetters={usedLetters} key={letter}/>
                ))}
            </div>
        </tr>
    )
}

export default Row

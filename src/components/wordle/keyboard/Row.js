import React from 'react'
import Key from './Key'

const Row = ({ letters, usedLetters }) => {
    return (
        <tr>
            <div className="key-row">
                {letters.map((letter, index) => (
                    <Key letter={letter} usedLetters={usedLetters} key={index}/>
                ))}
            </div>
        </tr>
    )
}

export default Row

import React from 'react'
import Key from './Key'

const Row = ({ letters, usedLetters }) => {
    return (
        letters.map(letter => (
            <Key letter={letter} usedLetters={usedLetters} key={letter} />
        ))
    )
}

export default Row

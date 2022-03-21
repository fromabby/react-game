import React, { useState, useEffect, useDebugValue } from 'react'

const Tile = ({ word, letter, column, setPressed, setAnswer, pressed, disabled }) => {

    const [value, setValue] = useState('')
    const [finalLetter, setFinalLetter] = useState('')

    const updateRow = letter => {
        setAnswer(row => {
            let newRow = [...row]
            newRow[column] = letter
            return [...newRow]
        })
        setFinalLetter(letter.toLowerCase())
    }

    useEffect(() => {
        value.length > 1 && setValue(value.substring(1, 2))

        pressed && updateRow(value)

    }, [value, finalLetter, pressed])

    return (
        <td>
            <div className="square" style={{ backgroundColor: letter === finalLetter ? 'green' : word.includes(finalLetter) ? 'yellow' : '#8d8984' }}>
                <input type="text" value={value} onChange={e => {
                    setValue(e.target.value)
                    setPressed(false)
                }} pattern="[a-zA-Z]{1}" disabled={disabled} required />
            </div>
        </td>
    )
}

export default Tile
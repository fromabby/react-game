import React, { useState, useEffect, useDebugValue } from 'react'

const Tile = ({ word, letter, column, setPressed, setRow, pressed, disabled }) => {

    const [value, setValue] = useState('')
    const [bgColor, setBgColor] = useState('black')
    const [finalLetter, setFinalLetter] = useState('')

    const updateRow = letter => {
        setRow(row => {
            let newRow = [...row]
            newRow[column] = letter
            return [...newRow]
        })
        setFinalLetter(letter)
    }

    useEffect(() => {
        if (value.length > 1) {
            setValue(value.substring(0, 1))
        }
        if (pressed) {
            updateRow(value)
        }
    }, [value, pressed])

    useEffect(() => {
        if (pressed) {
            if (letter.toLowerCase() === finalLetter.toLowerCase()) {
                setBgColor('green')
            } else if (word.includes(finalLetter.toLowerCase())) {
                setBgColor('yellow')
            }
            else {
                setBgColor('black')
            }
        }
    }, [finalLetter])

    return (
        <>
            <td style={{ backgroundColor: bgColor }}>
                <input type="text" value={value} onChange={e => {
                    setValue(e.target.value)
                    setPressed(false)
                }} pattern="[a-zA-Z]{1}" disabled={disabled} required/>
            </td>

        </>
    )
}

export default Tile

import React, { useState, useEffect, useDebugValue } from 'react'

const Tile = ({ letter, column, row, setRow }) => {

    const [value, setValue] = useState('')
    const [bgColor, setBgColor] = useState('black')
    const [finalLetter, setFinalLetter] = useState('')

    const onKeyUp = e => {
        if (e.charCode === 13) {
            updateRow(e.target.value)
        }
    }

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
    }, [value])

    useEffect(() => {
        if (letter.toLowerCase() === finalLetter.toLowerCase()) {
            setBgColor('green')
        } else {
            setBgColor('black')
        }
    }, [finalLetter])

    return (
        <>
            <td style={{ backgroundColor: bgColor }}>
                <input type="text" value={value} onChange={e => setValue(e.target.value)} onKeyPress={onKeyUp} pattern="[a-zA-Z]{1}" />
            </td>

        </>
    )
}

export default Tile

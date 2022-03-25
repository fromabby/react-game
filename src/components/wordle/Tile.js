import React, { useState, useEffect } from 'react'

const Tile = ({ word, letter, column, setPressed, setAnswer, pressed, disabled, setUsedLetters }) => {

    const [value, setValue] = useState('')

    const updateRow = x => {
        setAnswer(row => {
            let newRow = [...row]
            newRow[column] = x
            return [...newRow]
        })
        
    setUsedLetters(usedLetters => {
        let letters = [...usedLetters]

        const curr = letters[usedLetters.findIndex(x => x.letter === value)]

        if(curr.bgcolor !== 'green') {
            letters[usedLetters.findIndex(x => x.letter === value)] = {
                letter: value,
                bgcolor: letter === value ? 'green' : word.includes(value) ? 'yellow' : '#8d8984'
            }
        }

        return [...letters]
    })
    
        setValue(x.toLowerCase())
    }

    useEffect(() => {
        value.length > 1 && setValue(value.substring(1, 2))

        pressed && updateRow(value)

    }, [value, pressed])

    return (
        <td>
            <div className="square" style={{ backgroundColor: letter === value ? 'green' : word.includes(value) ? 'yellow' : '#8d8984' }}>
                <input type="text" value={value} onChange={e => {
                    setValue(e.target.value)
                    setPressed(false)
                }} pattern="[a-zA-Z]{1}" disabled={disabled} required />
            </div>
        </td>
    )
}

export default Tile
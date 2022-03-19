import React, { useState, useEffect, useDebugValue } from 'react'

const Tile = ({ letter, column, row, setRow }) => {

    const [value, setValue] = useState('')

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
    }


    useEffect(() => {
        if(value.length > 1) {
            setValue(value.substring(0,1))
            console.log(column)
        }
    }, [value])

    return (
        <>
            <td>{letter}</td>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} onKeyPress={onKeyUp} pattern="[a-zA-Z]{1}" />
        </>
    )
}

export default Tile

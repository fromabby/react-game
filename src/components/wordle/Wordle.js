import React, { useState, useEffect } from 'react'
import TileRow from './TileRow'

const Wordle = ({ word, setIsWon }) => {
    const [currentRow, setCurrentRow] = useState(0)
    const [row, setRow] = useState(['', '', '', '', ''])
    const [rows, setRows] = useState([
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ])

    const compare = (answer, row) => {
        let ctr = 0
        for (var i = 0; i < answer.length; i++) {
            if (answer[i] === '' || answer[i] !== row[i]) {
                ctr++
                console.log('incremented ctr')
            }
        }

        if (ctr !== 0) return false

        return true
    }

    useEffect(() => {
        updateRowsContent(row, currentRow)
        if (compare(row, word)) {
            setIsWon(true)
        }
    }, [row, currentRow])

    const updateRowsContent = (answer, index) => {
        setRows(row => {
            let curr = [...row]
            curr[index - 1] = answer
            return [...curr]
        })
    }

    return (
        [0, 1, 2, 3, 4, 5].map(num => (
            <TileRow
                word={word}
                disabled={currentRow === num ? false : true}
                setCurrentRow={setCurrentRow}
                setRow={setRow}
                key={num}
            />
        ))
    )
}

export default Wordle
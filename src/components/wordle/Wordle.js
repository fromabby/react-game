import React, { useState, useEffect } from 'react'
import TileRow from './TileRow'

const Wordle = ({ word, setIsWon }) => {
    const [currentRow, setCurrentRow] = useState(0)
    const [answer, setAnswer] = useState(['', '', '', '', ''])
    const [rows, setRows] = useState([
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ])

    const compare = (answer, word) => {
        for (var i = 0; i < answer.length; i++) {
            if (answer[i] === '' || answer[i] !== word[i]) return false
        }

        return true
    }

    useEffect(() => {
        updateRowsContent(answer, currentRow)
        compare(answer, word) && setIsWon(true)
    }, [answer, currentRow])

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
                setAnswer={setAnswer}
                key={num}
            />
        ))
    )
}

export default Wordle
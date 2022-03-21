import React, { useState, useEffect } from 'react'
import TileRow from './TileRow'

const Wordle = ({ question, setIsWon, setCurrentRow, currentRow }) => {
    const [answer, setAnswer] = useState(['', '', '', '', ''])
    const [word, setWord] = useState([])
    const [rows, setRows] = useState([
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (loading) {
            let arr = []
            for (var i = 0; i < 5; i++) {
                arr.push(question[i])
            }
            setWord(arr)
            setLoading(false)
        }
    }, [question])

    const compare = (answer, word) => {
        for (var i = 0; i < answer.length; i++) {
            if (answer[i] === '' || answer[i] !== word[i]) return false
        }

        console.log('here')
        return true
    }

    console.log(question)

    useEffect(() => {
        updateRowsContent(answer, currentRow)
        if (compare(answer, word)) {
            if (currentRow > -1) {
                setCurrentRow(v => v - 1)
            }
            setIsWon(true)
        }
    }, [answer, currentRow])

    const updateRowsContent = (answer, index) => {
        if (answer[0] !== '') {
            setRows(row => {
                let curr = [...row]
                curr[index - 1] = answer
                return [...curr]
            })
        }
    }

    return (
        !loading && [0, 1, 2, 3, 4, 5].map(num => (
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
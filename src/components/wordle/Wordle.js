import React, { useState, useEffect } from 'react'
import TileRow from './TileRow'

const Wordle = ({ word }) => {
    const [currentRow, setCurrentRow] = useState(1)
    const [row, setRow] = useState(['', '', '', '', ''])
    // const [row2, setRow2] = useState(['', '', '', '', ''])
    // const [row3, setRow3] = useState(['', '', '', '', ''])
    // const [row4, setRow4] = useState(['', '', '', '', ''])
    // const [row5, setRow5] = useState(['', '', '', '', ''])
    // const [row6, setRow6] = useState(['', '', '', '', ''])

    const [rows, setRows] = useState([
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ])

    let wordList = []

    for (var i = 0; i < word.length; i++) {
        wordList.push(word[i].toLowerCase())
    }

    const compare = (currentRow, row) => {
        let ctr = 0;
        for (var i = 0; i < currentRow.length; i++) {
            if (currentRow[i] === '' || currentRow !== row[i]) {
                ctr++
            }
        }

        if (ctr !== 0) return false

        return true
    }

    useEffect(() => {
        updateRow(row, currentRow)
    }, [currentRow])

    const updateRow = (myNewRow, index) => {
        setRows(row => {
            let curr = [...row]
            curr[index - 2] = myNewRow
            return [...curr]
        })
        console.log(rows)
    }


    // const isEmpty = (row) => {
    //     let ctr = 0;
    //     for (var i = 0; i < row.length; i++) {
    //         if (row[i] !== '') {
    //             ctr++
    //         }
    //     }

    //     if (ctr !== 0) return false

    //     return true
    // }

    //nauupdate yung row value per change    
    // console.log(row)
    // console.log(compare(wordList, row))
    return (
        <>
            <TileRow word={wordList} disabled={currentRow === 1 ? false : true} setCurrentRow={setCurrentRow} setRow={setRow} />
            <TileRow word={wordList} disabled={currentRow === 2 ? false : true} setCurrentRow={setCurrentRow} setRow={setRow} />
            <TileRow word={wordList} disabled={currentRow === 3 ? false : true} setCurrentRow={setCurrentRow} setRow={setRow} />
            <TileRow word={wordList} disabled={currentRow === 4 ? false : true} setCurrentRow={setCurrentRow} setRow={setRow} />
            <TileRow word={wordList} disabled={currentRow === 5 ? false : true} setCurrentRow={setCurrentRow} setRow={setRow} />
            <TileRow word={wordList} disabled={currentRow === 6 ? false : true} setCurrentRow={setCurrentRow} setRow={setRow} />
            <div style={compare(wordList, row) ? null : { display: 'none' }}>
                <p>congrats</p>
            </div>
        </>
    )
}

export default Wordle
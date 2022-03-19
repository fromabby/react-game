import React, { useState, useEffect } from 'react'
import Tile from './Tile'

const Wordle = ({ word }) => {
    let wordList = []

    for (var i = 0; i < word.length; i++) {
        wordList.push(word[i])
    }

    const [firstRow, setFirstRow] = useState(['', '', '', '', ''])
    const [secondRow, setSecondRow] = useState(['', '', '', '', ''])
    const [thirdRow, setThirdRow] = useState(['', '', '', '', ''])
    const [fourthRow, setFourthRow] = useState(['', '', '', '', ''])
    const [fifthRow, setFifthRow] = useState(['', '', '', '', ''])

    console.log(firstRow)
    return (
        <>
            <table>
                <tbody>
                    <tr>{wordList && wordList.map((w, index) => <Tile letter={w} column={index} row={firstRow} setRow={setFirstRow} />)}</tr>
                    {/* <tr>{wordList && wordList.map(w => <Tile letter={w} row={secondRow} setRow={setSecondRow} />)}</tr>
                    <tr>{wordList && wordList.map(w => <Tile letter={w} row={thirdRow} setRow={setThirdRow} />)}</tr>
                    <tr>{wordList && wordList.map(w => <Tile letter={w} row={fourthRow} setRow={setFourthRow} />)}</tr>
                    <tr>{wordList && wordList.map(w => <Tile letter={w} row={fifthRow} setRow={setFifthRow} />)}</tr> */}
                </tbody>
            </table>
        </>
    )
}

export default Wordle
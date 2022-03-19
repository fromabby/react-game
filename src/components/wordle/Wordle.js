import React, { useState, useEffect } from 'react'
import Tile from './Tile'

const Wordle = ({ word }) => {
    let wordList = []

    for (var i = 0; i < word.length; i++) {
        wordList.push(word[i])
    }

    const [firstRow, setFirstRow] = useState(['','','','',''])
    const [secondRow, setSecondRow] = useState(['','','','',''])
    const [thirdRow, setThirdRow] = useState(['','','','',''])
    const [fourthRow, setFourthRow] = useState(['','','','',''])
    const [fifthRow, setFifthRow] = useState(['','','','',''])

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


    // const [firstFirst, setFirstFirst] = useState('')
    // const [secondFirst, setSecondFirst] = useState('')
    // const [thirdFirst, setThirdFirst] = useState('')
    // const [fourthFirst, setFourthFirst] = useState('')
    // const [fifthFirst, setFifthFirst] = useState('')

    // const [firstSecond, setFirstSecond] = useState('')
    // const [secondSecond, setSecondSecond] = useState('')
    // const [thirdSecond, setThirdSecond] = useState('')
    // const [fourthSecond, setFourthSecond] = useState('')
    // const [fifthSecond, setFifthSecond] = useState('')

    // const [firstThird, setFirstThird] = useState('')
    // const [secondThird, setSecondThird] = useState('')
    // const [thirdThird, setThirdThird] = useState('')
    // const [fourthThird, setFourthThird] = useState('')
    // const [fifthThird, setFifthThird] = useState('')

    // const [firstFourth, setFirstFourth] = useState('')
    // const [secondFourth, setSecondFourth] = useState('')
    // const [thirdFourth, setThirdFourth] = useState('')
    // const [fourthFourth, setFourthFourth] = useState('')
    // const [fifthFourth, setFifthFourth] = useState('')

    // const [firstFifth, setFirstFifth] = useState('')
    // const [secondFifth, setSecondFifth] = useState('')
    // const [thirdFifth, setThirdFifth] = useState('')
    // const [fourthFifth, setFourthFifth] = useState('')
    // const [fifthFifth, setFifthFifth] = useState('')



import React, { useState, useEffect } from 'react'
import Tile from './Tile'

const TileRow = ({ word, disabled, setCurrentRow, setAnswer, setUsedLetters }) => {

    const [pressed, setPressed] = useState(false)

    const onKeyUp = e => {
        e.preventDefault()
        setPressed(true)
        setCurrentRow(rowNum => rowNum + 1)
    }

    return (
        <form onSubmit={onKeyUp}>
            <table>
                <tbody>
                    <tr>
                        {word && word.map((letter, column) =>
                            <Tile
                                word={word}
                                letter={letter}
                                column={column}
                                setPressed={setPressed}
                                setAnswer={setAnswer}
                                pressed={pressed}
                                disabled={disabled}
                                setUsedLetters={setUsedLetters}
                                key={column}
                            />
                        )}
                        <td>
                            <input type="submit" value="submit" style={{ display: 'none' }} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export default TileRow
import React, { useState, useEffect } from 'react'
import Tile from './Tile'

const TileRow = ({ word, disabled, setCurrentRow, setAnswer }) => {

    const [pressed, setPressed] = useState(false)

    const onKeyUp = e => {
        e.preventDefault()
        setPressed(true)
        setCurrentRow(v => v + 1)
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
                                key={column}
                            />
                        )}
                        <td>
                            <input type="submit" value="submit" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export default TileRow
import React, { useState, useEffect } from 'react'
import Tile from './Tile'

const TileRow = ({ word, disabled, setCurrentRow, setRow }) => {

    const [pressed, setPressed] = useState(false)

    const onKeyUp = (e) => {
        e.preventDefault()
        setPressed(true)
        setCurrentRow(v => v + 1)
    }

    return (
        <>
            <form onSubmit={onKeyUp}>
                <table>
                    <tbody>

                        <tr>
                            {word && word.map((w, index) => <Tile word={word} letter={w} column={index} setPressed={setPressed} setRow={setRow} pressed={pressed} disabled={disabled} />)}
                            <td>
                                <input type="submit" value="submit" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    )
}

export default TileRow
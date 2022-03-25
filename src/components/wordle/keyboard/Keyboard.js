import React from 'react'
import Row from './Row'

export const Keyboard = ({ usedLetters }) => {
    const letters = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    ]

    return (
        <div className="keyboard">
            <table>
                <tbody>
                    {letters.map(row => (
                        <tr>
                            <Row letters={row} usedLetters={usedLetters}/>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Keyboard
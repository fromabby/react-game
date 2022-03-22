import React from 'react'
import Key from './Key'

const Row = ({ letters }) => {
    return (
        <tr>
            <div className="key-row">
                {letters.map(letter => (
                    <Key letter={letter} />
                ))}
            </div>
        </tr>
    )
}

export default Row

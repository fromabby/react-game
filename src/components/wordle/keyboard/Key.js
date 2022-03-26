import React from 'react'

export const Key = ({ letter, usedLetters }) => {
    const key = usedLetters.find(x => x.letter === letter)
    
    return (
        <td>
            <div className="key" style={{ backgroundColor: key.bgcolor}}>
                {letter}
            </div>
        </td>
    )
}

export default Key
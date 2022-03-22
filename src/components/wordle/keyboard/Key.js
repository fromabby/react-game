import React from 'react'

export const Key = ({ letter }) => {
    return (
        <td>
            <div className="key">
                {letter}
            </div>
        </td>
    )
}

export default Key
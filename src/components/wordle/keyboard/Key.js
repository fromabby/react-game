import React, { useState } from 'react'

export const Key = ({ letter, usedLetters }) => {

    const [value, setValue] = useState({})

    /**
     * 
     * if usedLetters = [{letter, bgcolor}, {letter, bgcolor} ....]
     * or set initialstate of usedLetters to have {letter, bgcolor} set to white as default
     * ==if this^
     *       in keyboard or keyrows loop, pass value as parameter here
     *       then just update state as usual
     * 
     * 
     * ==else if retain this where initialstate = []
     * create for loop to go through each letter // can maybe do this sa row 
     * 
     * 
     */
    return (
        <td>
            <div className="key" style={{ backgroundColor: usedLetters.includes(letter) ? 'red' : 'white'}}>
                {letter}
            </div>
        </td>
    )
}

export default Key
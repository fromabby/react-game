import React, { useState, useEffect } from 'react'
import wordlist from 'wordle-wordlist'
import Wordle from './components/wordle/Wordle'
import EndScreen from './components/wordle/EndScreen'
import Keyboard from './components/wordle/keyboard/Keyboard'
import './App.css'

function App() {
    const [isWon, setIsWon] = useState(false)
    const [currentRow, setCurrentRow] = useState(0)
    const [displayWinner, setDisplayWinner] = useState(false)
    const [score, setScore] = useState(0)
    const [words, setWords] = useState([])
    const [loading, setLoading] = useState(true)
    const [usedLetters, setUsedLetters] = useState([])

    const compute = (current, row) => {
        return current + (6 / (row + 1)) * 10
    }

    useEffect(() => {
        const getWords = async () => {
            try {
                const allowedGuesses = await wordlist.guesses()

                setWords(allowedGuesses)
                setLoading(false)
            } catch (error) {
                window.alert('wrong')
            }
        }

        if (isWon) {
            setScore(v => compute(v, currentRow))
            const timeout = setTimeout(() => setDisplayWinner(true), 500)
            return () => { clearTimeout(timeout) }
        } else {
            getWords()
        }
    }, [isWon])

    useEffect(() => {
        if (currentRow === 6) {
            const timeout = setTimeout(() => setDisplayWinner(true), 500)
            return () => { clearTimeout(timeout) }
        }
    }, [currentRow])

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; // max & min both included 
    }

    return (
        <div>
            <div id="title-container">
                <h1>HULAAN MO</h1>
                <p>subheading here</p>
            </div>
            <div id="board-container">
                {!loading && displayWinner ?
                    <EndScreen
                        setIsWon={setIsWon}
                        isWon={isWon}
                        setCurrentRow={setCurrentRow}
                        setDisplayWinner={setDisplayWinner}
                        setScore={setScore}
                    /> :
                    <div>
                        <p style={{ color: 'white' }}>score: {score}</p>
                        {words && words.length > 0 &&
                            <Wordle
                                question={words[getRandomIntInclusive(0, words.length)]}
                                setIsWon={setIsWon}
                                setCurrentRow={setCurrentRow}
                                currentRow={currentRow}
                                setUsedLetters={setUsedLetters}
                            />
                        }
                    </div>
                }

                <Keyboard usedLetters={usedLetters}/>
            </div>
        </div>
    );
}

export default App
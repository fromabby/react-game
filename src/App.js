import React, { useState, useEffect } from 'react'
import Wordle from './components/wordle/Wordle'
import EndScreen from './components/wordle/EndScreen'
import './App.css'
import wordlist from "wordle-wordlist"
import Keyboard from './components/wordle/keyboard/Keyboard'

function App() {
    const [isWon, setIsWon] = useState(false)
    const [currentRow, setCurrentRow] = useState(0)
    const [displayWinner, setDisplayWinner] = useState(false)
    const [score, setScore] = useState(0)
    const [words, setWords] = useState([])
    const [loading, setLoading] = useState(true)

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
                <h1>MGA WORDS</h1>
                <p>hindi masasama</p>
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
                            />
                        }
                    </div>
                }

                <Keyboard />
            </div>
        </div>
    );
}

export default App
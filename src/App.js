import React, { useState, useEffect } from 'react'
import wordlist from 'wordle-wordlist'
import Wordle from './components/wordle/Wordle'
import EndScreen from './components/wordle/EndScreen'
import Keyboard from './components/wordle/keyboard/Keyboard'
import { keyboard } from './keyboard'
import './App.css'

function App() {
    const [isWon, setIsWon] = useState(false)
    const [currentRow, setCurrentRow] = useState(0)
    const [displayWinner, setDisplayWinner] = useState(false)
    const [score, setScore] = useState(0)
    const [words, setWords] = useState([])
    const [loading, setLoading] = useState(true)
    const [usedLetters, setUsedLetters] = useState(keyboard)
    const [streak, setStreak] = useState(0)
    // const [question, setQuestion] = useState('')

    const compute = (current, row) => {
        return current + (6 / (row + 1)) * 10
    }

    useEffect(() => {
        const getWords = async () => {
            try {
                const allowedGuesses = await wordlist.guesses()

                setWords(allowedGuesses)
                // setQuestion(words[getRandomIntInclusive(0, words.length)])
                setLoading(false)
            } catch (error) {
                window.alert('no words available')
            }
        }

        if (isWon) {
            setScore(v => compute(v, currentRow))
            setStreak(v => v + 1)
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
                <p style={{ color: 'white' }}>score: {score}</p>
                <p style={{ color: 'white' }}>streak: {streak}</p>
            </div>
            <div id="board-container">
                {!loading && displayWinner ?
                    <EndScreen
                        setIsWon={setIsWon}
                        isWon={isWon}
                        setCurrentRow={setCurrentRow}
                        setDisplayWinner={setDisplayWinner}
                        setScore={setScore}
                        setUsedLetters={setUsedLetters}
                        keyboard={keyboard}
                        setStreak={setStreak}
                    /> :
                    <div>
                        {words && words.length > 0 &&
                            <Wordle
                                question={words[getRandomIntInclusive(0, words.length)]}
                                setIsWon={setIsWon}
                                setCurrentRow={setCurrentRow}
                                currentRow={currentRow}
                                setUsedLetters={setUsedLetters}
                                words={words}
                            />
                        }
                        <Keyboard usedLetters={usedLetters} />
                    </div>
                }
            </div>
        </div>
    )
}

export default App
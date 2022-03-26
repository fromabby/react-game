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

    const getRandIndex = (max) => Math.floor(Math.random() * (Math.floor(max) + 1))

    const compute = (current, row) => current + (6 / (row + 1)) * 10

    useEffect(() => {
        const getWords = async () => {
            try {
                const allowedGuesses = await wordlist.guesses()

                setWords(allowedGuesses)
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

    return (
        <div>
            <div id="title-container">
                <h1>WORDLE</h1>
                <div className="row">
                    <div className="col">
                        <p className={displayWinner ? "score-bigger" : "score"}>Score: <span style={{ color: 'green' }}>{score}</span></p>
                    </div>
                    <div className="col">
                        <p className={displayWinner ? "score-bigger" : "score"}>Streak: <span style={{ color: 'yellow' }}>{streak}</span></p>
                    </div>
                </div>
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
                                question={words[getRandIndex(words.length)]}
                                setIsWon={setIsWon}
                                setCurrentRow={setCurrentRow}
                                currentRow={currentRow}
                                setUsedLetters={setUsedLetters}
                            />
                        }
                    </div>
                }
            </div>
            <div id="keyboard-container">
                {!loading && !displayWinner && <Keyboard usedLetters={usedLetters} />}
            </div>
        </div>
    )
}

export default App
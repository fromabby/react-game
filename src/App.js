import React, { useState, useEffect } from 'react'
import Registration from './components/student-portal/Registration'
import Login from './components/student-portal/Login'
import './App.css'

function App() {
    const [page, setPage] = useState('login')
    const [, setUser] = useState()
    const [message, setMessage] = useState({
        text: '',
        color: 'red'
    })

    const displayMessage = (text, color) => setMessage({ text, color })

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify([{
            student_number: '2018119075',
            last_name: 'Bonuan',
            first_name: 'Anne Bernadette',
            middle_name: 'Lagrisola',
            college: 'UST-CICS',
            program: 'IT',
            year_level: '4th year',
            password: '12231999'
        }]))
        setUser(JSON.parse(localStorage.getItem('student')))
    }, [])

    return (
        page === 'login' ?
            <Login setPage={setPage} setUser={setUser} displayMessage={displayMessage} message={message} />
            :
            <Registration setPage={setPage} displayMessage={displayMessage} message={message} />
    )
}

export default App
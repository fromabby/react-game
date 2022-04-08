import React, { useState, useEffect } from 'react'
import Registration from './components/student-portal/Registration'
import Login from './components/student-portal/Login'
import Home from './components/student-portal/Home'
import './App.css'

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [page, setPage] = useState('login')
    const [user, setUser] = useState()

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify([{
            student_number: '2018119075',
            last_name: 'Bonuan',
            first_name: 'Anne Bernadette',
            middle_name: 'Lagrisola',
            college: 'UST-CICS',
            program: 'IT',
            year_level: '4',
            password: '12231999'
        }]))
        setUser(JSON.parse(localStorage.getItem('student')))

        if (user) {
            setIsAuthenticated(true)
        }
    }, [])

    return (
        <div>
            {!isAuthenticated ?
                page === 'login' ? <Login setIsAuthenticated={setIsAuthenticated} setPage={setPage} setUser={setUser} /> :
                    page === 'register' && <Registration setPage={setPage} />
                :
                <Home setIsAuthenticated={setIsAuthenticated} user={user} setUser={setUser} />
            }
        </div>
    )
}

export default App
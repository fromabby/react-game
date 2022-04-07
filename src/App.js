import React, { useState, useEffect } from 'react'
import Registration from './components/student-portal/Registration'
import Login from './components/student-portal/Login'
import Home from './components/student-portal/Home'

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [page, setPage] = useState('')
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
                page === 'login' ? <Login setIsAuthenticated={setIsAuthenticated} setPage={setPage} /> :
                    page === 'register' ? <Registration setPage={setPage} /> :
                        <>
                            <button onClick={() => setPage('login')}>Login</button>
                            <button onClick={() => setPage('register')}>Register now!</button>
                        </>
                :
                <Home setIsAuthenticated={setIsAuthenticated} />
            }
        </div>
    )
}

export default App
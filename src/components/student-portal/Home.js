import React, { useEffect, useState } from 'react'

const Home = ({ setIsAuthenticated, setUser, user }) => {
    const logout = () => {
        setIsAuthenticated(false)
        localStorage.removeItem('student')
        // setUser({})
    }
    // setUser(JSON.parse(localStorage.getItem('student')))

    /**
     * 
     * 1. login
     * 2. home displays user details
     * 3. logout
     * 4. login again
     * 5. not displaying user details
     */

    const localUser = JSON.parse(localStorage.getItem('student'))

    useEffect(() => {
        if (user && user.student_number !== localUser.student_number) {
            setUser(JSON.parse(localStorage.getItem('student')))
        } else if (user) {
            setUser(user)
        } else {
            setUser(JSON.parse(localStorage.getItem('student')))
        }
    }, [localUser])

    return (
        <div style={{ color: 'white', textAlign: 'center' }}>
            <h2>Welcome, {user.first_name} {user.middle_name} {user.last_name}!</h2>
            <p>Student Number: {user.student_number}</p>
            <p>{user.year_level} {user.college} {user.program}
            </p>
            <div className="logout">
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Home

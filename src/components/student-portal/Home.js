import React, { useState, useEffect } from 'react'

const Home = ({ setIsAuthenticated, setUser, user }) => {
    const logout = () => {
        setIsAuthenticated(false)
        localStorage.setItem('student', JSON.stringify({}))
        setUser({})
    }

    // useEffect(() => {
    //     setUsers(JSON.parse(localStorage.getItem('users')))
    //     setCurrentUser(users.find(x => x.student_number !== user.student_number))
    //     setLoading(false)
    // }, [user])

    const users = JSON.parse(localStorage.getItem('users'))
    const currentUser = users.find(x => x.student_number !== user.student_number)

    return (
        <div style={{ color: 'white', textAlign: 'center' }}>
            <h2>Welcome, {currentUser.first_name} {currentUser.middle_name} {currentUser.last_name}!</h2>
            <p>Student Number: {currentUser.student_number}</p>
            <p>{currentUser.year_level} {currentUser.college} {currentUser.program}
            </p>
            <div className="logout">
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Home

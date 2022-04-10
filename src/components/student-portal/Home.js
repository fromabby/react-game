import React, { useEffect } from 'react'

const Home = ({ setIsAuthenticated, setUser, user }) => {
    const logout = () => {
        setIsAuthenticated(false)
        localStorage.setItem('student', JSON.stringify({}))
        setUser({})
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('student')))
    }, [user])
    
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

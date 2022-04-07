import React from 'react'

const Home = ({setIsAuthenticated}) => {
    const logout = () => {
        setIsAuthenticated(false)
        localStorage.setItem('student', JSON.stringify({}))
    }

    return (
        <div>
            home
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Home

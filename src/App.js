import React, { useState } from 'react'
import Registration from './components/student-portal/Registration'
import Login from './components/student-portal/Login'
import Home from './components/student-portal/Home'

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        isAuthenticated ? <Home /> :
            <>
                <Login setIsAuthenticated={setIsAuthenticated} />
                <Registration />
            </>
    )
}

export default App
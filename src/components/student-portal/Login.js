/**
In the login form, the application will require the user to input the Student Id number (as his/her user name), and password.
In the log-in form, the user can click the Log-in button and a message will pop and welcome the user to the Student Portal. The log-in form must also have Cancel Button.
 */

import React, { useState } from 'react'

const Login = ({ setIsAuthenticated }) => {
    const [studentNumber, setStudentNumber] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = e => {
        e.preventDefault()
        setIsAuthenticated(true)
    }
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" value={studentNumber} placeholder="student_number" pattern="[0-9]{10}" onChange={e => setStudentNumber(e.target.value)} />
                <input type="password" value={password} placeholder="password" onChange={e => setPassword(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Login

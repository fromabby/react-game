/**
In the log-in form, the user can click the Log-in button and a message will pop and
welcome the user to the Student Portal.
The log-in form must also have Cancel Button.
 */

import React, { useState } from 'react'

const Login = ({ setIsAuthenticated, setPage }) => {
    const [login, setLogin] = useState({
        studentNumber: '',
        password: ''
    })

    const { studentNumber, password } = login

    const submitHandler = e => {
        e.preventDefault()

        if (!findUser(studentNumber)) {
            window.alert('no user found')
        }

        if (comparePassword(studentNumber, password)) {
            localStorage.setItem('student', JSON.stringify(login))
            setIsAuthenticated(true)
        } else {
            window.alert('invalid credentials')
        }
    }

    const findUser = studentNumber => {
        const users = JSON.parse(localStorage.getItem('users'))
        const user = users.find(x => x.student_number === studentNumber)

        if (user) { return true }

        return false
    }

    const comparePassword = (studentNumber, password) => {
        const users = JSON.parse(localStorage.getItem('users'))
        const user = users.find(x => x.student_number === studentNumber)
        if (user.password === password) { return true }

        return false
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" value={studentNumber} placeholder="student_number" pattern="[0-9]{10}" onChange={e => setLogin({ ...login, studentNumber: e.target.value })} />
                <input type="password" value={password} placeholder="password" onChange={e => setLogin({ ...login, password: e.target.value })} />
                <input type="submit" value="Submit" />
                <input type="button" value="Cancel" onClick={() => setLogin({
                    studentNumber: '',
                    password: ''
                })}/>
            </form>
            <button onClick={() => setPage('')}>Back to home</button>
            <button onClick={() => setPage('register')}>Register</button>
        </div>
    )
}

export default Login

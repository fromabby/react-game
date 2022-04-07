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
        <>
            <div class="container">
                <div class="forms">
                    <div class="form login">
                        <span class="title">Login</span>
                        <form onSubmit={submitHandler}>
                            <div class="input-field">
                                <input type="text" value={studentNumber} placeholder="20xxxxxxxx" pattern="[0-9]{10}" onChange={e => setLogin({ ...login, studentNumber: e.target.value })} maxLength={10} required />
                            </div>
                            <div class="input-field">
                                <input type="password" value={password} placeholder="•••••••••" onChange={e => setLogin({ ...login, password: e.target.value })} required />
                            </div>
                            <div class="input-field button">
                                <input type="submit" value="Submit" />
                            </div>

                            <div style={{ margin: '0 auto', textAlign: 'center' }}>
                                <span className='text signup-link' style={{ textDecoration: 'underline', color: 'blue', fontSize: '0.6rem' }} onClick={() => setLogin({
                                    studentNumber: '',
                                    password: ''
                                })}>Cancel</span>
                            </div>
                            
                            <div style={{ margin: '0 auto', textAlign: 'center' }}>
                                <span className="text signup-link" style={{ textDecoration: 'underline', color: 'blue', fontSize: '0.6rem' }} onClick={() => setPage('')}>Back to home</span>
                            </div>
                            <div className="login-signup">
                                <span className="text">Not a member?
                                    <span className="text signup-link" style={{ textDecoration: 'underline', color: 'blue', paddingLeft: '5px' }} onClick={() => setPage('register')}>Sign up now</span>
                                </span>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Login
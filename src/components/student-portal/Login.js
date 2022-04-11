/**
In the log-in form, the user can click the Log-in button and a message will pop and
welcome the user to the Student Portal.
The log-in form must also have Cancel Button.
 */

import React, { useState } from 'react'

const Login = ({ setIsAuthenticated, setPage, displayMessage, message }) => {
    const [login, setLogin] = useState({
        student_number: '',
        password: ''
    })

    const { student_number, password } = login
    const { text, color } = message
    
    const [loading, setLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const onChange = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
        displayMessage( '', '')
    }

    const users = JSON.parse(localStorage.getItem('users'))

    const submitHandler = e => {
        e.preventDefault()

        setLoading(true)
        if (!findUser(student_number)) {
            setLoading(false)
            displayMessage('User not found', 'red')
        }

        if (comparePassword(password)) {
            displayMessage( 'Logging in...','green')
            setLoading(true)
            setIsSubmitted(true)
            const timeout = setTimeout(() => {
                localStorage.setItem('student', JSON.stringify(fetchUser(student_number)))
                setIsAuthenticated(true)
                setLoading(false)
            }, 2000)
            return () => clearTimeout(timeout)
        } else {
            displayMessage('Invalid credentials','red')
            setLoading(false)
        }
    }

    const findUser = student_number => users.find(x => x.student_number === student_number) ? true : false

    const fetchUser = student_number => users.find(x => x.student_number === student_number)

    const comparePassword = password => users.find(x => x.student_number === student_number).password === password ? true : false

    const resetState = () => {
        setLogin({ student_number: '', password: '' })
        displayMessage( '', '' )
    }

    return (
        <div class="container">
            <div class="forms">
                <div class="form login">
                    <span class="title">Login</span>
                    <form onSubmit={submitHandler}>
                        <div class="input-field">
                            <input type="text" value={student_number} placeholder="20xxxxxxxx" pattern="[0-9]{10}" name="student_number" onChange={onChange} maxLength={10} required />
                        </div>
                        <div class="input-field">
                            <input type="password" value={password} placeholder="•••••••••" name="password" onChange={onChange} required />
                        </div>
                        <div style={{ textAlign: 'center', paddingTop: '10px', color }}>
                            {text}
                        </div>
                        <div class="input-field button">
                            <input type="submit" value="Submit" style={loading ? { color: 'gray', cursor: 'default' } : null} disabled={loading} />
                        </div>
                        <div class="input-field secondary-button">
                            <input type="button" value="Cancel" onClick={() => resetState()} style={isSubmitted ? { color: 'gray', cursor: 'default' } : null} disabled={isSubmitted} />
                        </div>
                        <div className="login-signup">
                            <span className="text">Not a member?
                                <span className="text signup-link" style={{ textDecoration: 'underline', color: '#4070f4', paddingLeft: '5px', cursor: 'pointer' }} onClick={() => setPage('register')}>Sign up now</span>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
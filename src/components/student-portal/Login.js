/**
In the log-in form, the user can click the Log-in button and a message will pop and
welcome the user to the Student Portal.
The log-in form must also have Cancel Button.
 */

import React, { useState } from 'react'

const Login = ({ setIsAuthenticated, setPage }) => {
    const [login, setLogin] = useState({
        student_number: '',
        password: ''
    })

    const { student_number, password } = login
    const [errMsg, setErrMsg] = useState('')

    const onChange = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
        setErrMsg('')
    }

    const submitHandler = e => {
        e.preventDefault()

        if (!findUser(student_number)) {
            setErrMsg('User does not exist')
        }

        if (comparePassword(password)) {
            localStorage.setItem('student', JSON.stringify(fetchUser(student_number)))
            setIsAuthenticated(true)
        }
    }

    const findUser = student_number => {
        const users = JSON.parse(localStorage.getItem('users'))
        
        //hanap ng user with that student number
        const user = users.find(x => x.student_number === student_number)
        // console.log(user)
        if (user) { return true }

        return false
    }

    const fetchUser = student_number => {
        const users = JSON.parse(localStorage.getItem('users'))

        return users.find(x => x.student_number === student_number)
    }

    const comparePassword = password => {
        const users = JSON.parse(localStorage.getItem('users'))
        const user = users.find(x => x.student_number === student_number)
        if (user.password === password) { return true }

        setErrMsg('Invalid credentials')
        return false
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
                        <div style={{textAlign: 'center', paddingTop: '10px', color: 'red'}}>
                            {errMsg}
                        </div>
                        <div class="input-field button">
                            <input type="submit" value="Submit" />
                        </div>
                        <div class="input-field secondary-button">
                            <input type="button" value="Cancel" onClick={() => setLogin({
                                student_number: '',
                                password: ''
                            })} />
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
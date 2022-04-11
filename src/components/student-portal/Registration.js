/**
For the Registration Form, the user can encode his/her details and when he/she click the Submit button,
a message will pop telling the user that the details are being saved.
The registration form must also have the Cancel button.
 */

import React, { useState } from 'react'

const Registration = ({ setPage }) => {
    const [user, setUser] = useState({
        student_number: '',
        last_name: '',
        first_name: '',
        middle_name: '',
        college: '',
        program: '',
        year_level: '',
        password: ''
    })

    const { student_number, last_name, first_name, middle_name, college, program, year_level, password } = user

    const [message, setMessage] = useState({
        text: '',
        color: 'red'
    })

    const { text, color } = message

    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        setMessage({ text: '', color: 'red' })
    }

    const submitHandler = e => {
        e.preventDefault()

        setLoading(true)

        if (!findUser(student_number)) {
            setMessage({
                text: 'User account exists',
                color: 'red'
            })
            setLoading(false)
            return
        }

        if (password === confirmPassword) {
            setMessage({
                text: 'Creating user account...',
                color: 'green'
            })
            const timeout = setTimeout(() => {
                let users = JSON.parse(localStorage.getItem('users'))
                users.push(user)
                localStorage.setItem('users', JSON.stringify(users))
                setPage('login')
                setLoading(false)
            }, 2000)
            return () => clearTimeout(timeout)
        } else {
            setMessage({
                text: 'Passwords do not match',
                color: 'red'
            })
            setLoading(false)
        }

        setLoading(false)
    }

    const findUser = student_number => JSON.parse(localStorage.getItem('users')).find(x => x.student_number === student_number) ? false : true

    const resetState = () => {
        setUser({
            student_number: '',
            last_name: '',
            first_name: '',
            middle_name: '',
            college: '',
            program: '',
            year_level: '',
            password: ''
        })
        setConfirmPassword('')
    }

    return (
        <div class="container-register">
            <div class="forms">
                <div class="form register">
                    <span class="title-register">Register an account</span>
                    <form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="col-12">
                                <div class="input-field">
                                    <input type="text" value={student_number} name="student_number" placeholder="Student number (20xxxxxxxx)" pattern="[0-9]{10}" maxLength={10} onChange={onChange} required />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <div class="input-field">
                                    <input type="text" value={last_name} name="last_name" placeholder="Last name" onChange={onChange} required />
                                </div>
                            </div>
                            <div className="col-5">
                                <div class="input-field">
                                    <input type="text" value={first_name} name="first_name" placeholder="First name" onChange={onChange} required />
                                </div>
                            </div>
                            <div className="col-4">
                                <div class="input-field">
                                    <input type="text" value={middle_name} name="middle_name" placeholder="Middle name" onChange={onChange} required />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-5">
                                <div class="input-field">
                                    <input type="text" value={college} name="college" placeholder="College" onChange={onChange} required />
                                </div>
                            </div>
                            <div className="col-4">
                                <div class="input-field">
                                    <input type="text" value={program} name="program" placeholder="Program" onChange={onChange} required />
                                </div>
                            </div>
                            <div className="col-3">
                                <div class="input-field">
                                    <select value={year_level} name="year_level" placeholder="Year Level" onChange={onChange} required>
                                        <option value=''></option>
                                        <option value='1st Year'>First Year</option>
                                        <option value='2nd Year'>Second Year</option>
                                        <option value='3rd Year'>Third Year</option>
                                        <option value='4th Year'>Fourth Year</option>
                                        <option value='5th Year'>Fifth Year</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div class="input-field">
                                    <input type="password" value={password} name="password" placeholder="Password" onChange={onChange} required />
                                </div>
                            </div>
                            <div className="col-6">
                                <div class="input-field">
                                    <input type="password" value={confirmPassword} name="confirmPassword" placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)} required />
                                </div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', paddingTop: '10px', color }}>
                            {text}
                        </div>
                        <div class="input-field button">
                            <input type="submit" value="Register" style={loading ? { color: 'gray', cursor: 'default' } : null} disabled={loading} />
                        </div>
                        <div class="input-field secondary-button">
                            <input type="button" value="Cancel" onClick={() => resetState()} />
                        </div>
                        <div className="login-signup">c
                            <span className="text">Already have an account?
                                <span className="text signup-link" style={{ textDecoration: 'underline', color: '#4070f4', paddingLeft: '5px', cursor: 'pointer' }} onClick={() => setPage('login')}>Login</span>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration


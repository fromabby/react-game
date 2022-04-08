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

    const [confirmPassword, setConfirmPassword] = useState('')

    const { student_number, last_name, first_name, middle_name, college, program, year_level, password } = user

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()

        if (!findUser(student_number)) {
            return
        }

        if (password === confirmPassword) {
            let users = JSON.parse(localStorage.getItem('users'))
            users.push(user)
            localStorage.setItem('users', JSON.stringify(users))
            window.alert('user account created')
            setPage('login')
        } else {
            window.alert('passwords do not match')
        }
    }

    const findUser = student_number => {
        const users = JSON.parse(localStorage.getItem('users'))

        const existingUser = users.find(x => x.student_number === student_number)

        if (existingUser) {
            window.alert('user account exists')
            return false
        }

        return true
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
                                    <input type="text" value={student_number} name="student_number" placeholder="Student number (20xxxxxxxx)" pattern="[0-9]{10}" onChange={onChange} />
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <div class="input-field">
                                    <input type="text" value={last_name} name="last_name" placeholder="Last name" onChange={onChange} />
                                </div>
                            </div>
                            <div className="col-5">
                                <div class="input-field">
                                    <input type="text" value={first_name} name="first_name" placeholder="First name" onChange={onChange} />
                                </div>
                            </div>
                            <div className="col-4">
                                <div class="input-field">
                                    <input type="text" value={middle_name} name="middle_name" placeholder="Middle name" onChange={onChange} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-5">
                                <div class="input-field">
                                    <input type="text" value={college} name="college" placeholder="College" onChange={onChange} />
                                </div>
                            </div>
                            <div className="col-4">
                                <div class="input-field">
                                    <input type="text" value={program} name="program" placeholder="Program" onChange={onChange} />
                                </div>
                            </div>
                            <div className="col-3">
                                <div class="input-field">
                                    <select value={year_level} name="year_level" placeholder="Year Level" onChange={onChange}>
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
                                    <input type="password" value={password} name="password" placeholder="Password" onChange={onChange} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div class="input-field">
                                    <input type="password" value={confirmPassword} name="confirmPassword" placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div class="input-field button">
                            <input type="submit" value="Register" />
                        </div>
                        <div class="input-field secondary-button">
                            <input type="button" value="Cancel" onClick={() => {
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
                            }} />
                        </div>
                        <div className="login-signup">
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

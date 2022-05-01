/**
For the Registration Form, the user can encode his/her details and when he/she click the Submit button,
a message will pop telling the user that the details are being saved.
The registration form must also have the Cancel button.

student ID number - must be 10 digit number
password be:
at least 8 characters with at least
1 special character
1 uppercase letter
1 number
password and confirm password must be the same value 
all fields are required 
 */

import React, { useState } from 'react'

const Registration = ({ setPage, displayMessage, message }) => {
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
    const { text, color } = message

    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        displayMessage('', '')
    }

    const submitHandler = e => {
        e.preventDefault()

        setLoading(true)

        if (!findUser(student_number)) {
            displayMessage('User account exists', 'red')
            setLoading(false)
            return
        }

        if (password === confirmPassword) {
            if (window.confirm('Your details are being saved...')) {
                displayMessage('Creating user account...', 'green')
                setIsSubmitted(true)
                const timeout = setTimeout(() => {
                    let users = JSON.parse(localStorage.getItem('users'))
                    users.push(user)
                    localStorage.setItem('users', JSON.stringify(users))
                    setPage('login')
                    setLoading(false)
                    resetState()
                }, 2000)

                return () => clearTimeout(timeout)
            }
        } else {
            displayMessage('Passwords do not match', 'red')
            setLoading(false)
        }
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
        displayMessage('', '')
        setLoading(false)
    }

    const validate = (e, message) => {
        if(e._reactName === 'onInvalid') e.target.setCustomValidity(message)
        else e.target.setCustomValidity(message)
    }

    return (
        <div className="container-register">
            <div className="forms">
                <div className="form register">
                    <span className="title-register">Register an account</span>
                    <form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="col-12">
                                <div className="input-field">
                                    <input type="text" value={student_number} name="student_number" placeholder="Student number (20xxxxxxxx)" pattern="[0-9]{10}" maxLength={10} onChange={onChange} required onInvalid={e => validate(e, 'Student number must be a 10 digit number')} onInput={e => validate(e, '')}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <div className="input-field">
                                    <input type="text" value={last_name} name="last_name" placeholder="Last name" onChange={onChange} required />
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="input-field">
                                    <input type="text" value={first_name} name="first_name" placeholder="First name" onChange={onChange} required />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="input-field">
                                    <input type="text" value={middle_name} name="middle_name" placeholder="Middle name" onChange={onChange} required />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-5">
                                <div className="input-field">
                                    <input type="text" value={college} name="college" placeholder="College" onChange={onChange} required />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="input-field">
                                    <input type="text" value={program} name="program" placeholder="Program" onChange={onChange} required />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="input-field">
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
                                <div className="input-field">
                                    <input type="password" value={password} name="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" placeholder="Password" onChange={onChange} onInvalid={e => validate(e, 'Password must be more than 7 characters with at least 1 special character, 1 uppercase letter, and 1 number')} onInput={e => validate(e, '')} minLength={8} required />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="input-field">
                                    <input type="password" value={confirmPassword} name="confirmPassword" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" placeholder="Confirm Password" onChange={e => {
                                        setConfirmPassword(e.target.value)
                                        displayMessage('', '')
                                    }}  onInvalid={e => validate(e, 'Password must be more than 7 characters with at least 1 special character, 1 uppercase letter, and 1 number')} onInput={e => validate(e, '')} minLength={8} required />
                                </div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', paddingTop: '10px', color }}>
                            {text}
                        </div>
                        <div className="input-field button">
                            <input type="submit" value="Register" style={loading ? { color: 'gray', cursor: 'default' } : null} disabled={loading} />
                        </div>
                        <div className="input-field secondary-button">
                            <input type="button" value="Cancel" onClick={() => resetState()} style={isSubmitted ? { color: 'gray', cursor: 'default' } : null} disabled={isSubmitted} />
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


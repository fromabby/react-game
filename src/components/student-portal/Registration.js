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
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" value={student_number} name="student_number" placeholder="student_number" pattern="[0-9]{10}" onChange={onChange} />
                <input type="text" value={last_name} name="last_name" placeholder="last_name" onChange={onChange} />
                <input type="text" value={first_name} name="first_name" placeholder="first_name" onChange={onChange} />
                <input type="text" value={middle_name} name="middle_name" placeholder="middle_name" onChange={onChange} />
                <input type="text" value={college} name="college" placeholder="college" onChange={onChange} />
                <input type="text" value={program} name="program" placeholder="program" onChange={onChange} />
                <input type="text" value={year_level} name="year_level" placeholder="year_level" onChange={onChange} />
                <input type="password" value={password} name="password" placeholder="password" onChange={onChange} />
                <input type="password" value={confirmPassword} name="confirmPassword" placeholder="confirmPassword" onChange={e => setConfirmPassword(e.target.value)} />
                <input type="submit" value="Submit" />
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
            </form>
            <button onClick={() => setPage('')}>Back to home</button>
            <button onClick={() => setPage('login')}>Have an account? Login</button>
        </div>
    )
}

export default Registration

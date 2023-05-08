import React, { Component } from 'react'
import axios from 'axios'

class User extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:8080/user/login', data)
    }

    render()
    {
        return (
        <>
            <div id='heading'>
                <h1>User Login</h1>
            </div>
            <div id='subhead'>
                <p>Please Login To View Profile and Loan Details</p>
            </div>
            <form className='adlogform' onSubmit={this.handleSubmit}>
            <div>
            <label id='lb1'>User E-Mail</label>
            <input
                type="email"
                placeholder="Enter E-Mail"
                id='txtbox'
                value={this.state.email}
                onChange={this.handleEmailChange}
            />
            </div>
            <div>
            <label id='lb2'>Password</label>
            <input
                type="password"
                placeholder="Enter Password"
                id='txtbox'
                value={this.state.password}
                onChange={this.handlePasswordChange}
            />
            </div>
            <div>
            <button type="submit" id='adlogin'>
                LOGIN
            </button>
            </div>
        </form>
        </>
        )
    }
}

export default User;
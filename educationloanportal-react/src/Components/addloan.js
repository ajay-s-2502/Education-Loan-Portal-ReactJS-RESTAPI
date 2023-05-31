import React, { Component } from 'react'
import axios from 'axios'

class AddLoan extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            loanId: '',
            loanType: '',
            applicantName: '',
            applicantAddress: '',
            applicantMobile: '',
            applicantEmail: '',
            applicantAadhaar: '',
            applicantPan: '',
            applicantSalary: '',
            loanAmountRequired: '',
            loanRepaymentMonths: ''
        }
    }
    handleIdChange = (event) => {
        this.setState({loanId: event.target.value})
    }
    handleTypeChange = (event) => {
        this.setState({loanType: event.target.value})
    }

    handleNameChange = (event) => {
        this.setState({applicantName: event.target.value})
    }

    handleAddressChange = (event) => {
        this.setState({applicantAddress: event.target.value})
    }
    handleMobileChange = (event) => {
        this.setState({applicantMobile: event.target.value})
    }
    handleEmailChange = (event) => {
        this.setState({applicantEmail: event.target.value})
    }
    handleAadhaarChange = (event) => {
        this.setState({applicantAadhaar: event.target.value})
    }
    handlePanChange = (event) => {
        this.setState({applicantPan: event.target.value})
    }
    handleSalaryChange = (event) => {
        this.setState({applicantSalary: event.target.value})
    }
    handleRequiredChange = (event) => {
        this.setState({loanAmountRequired: event.target.value})
    }
    handleMonthsChange = (event) => {
        this.setState({loanRepaymentMonths: event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            loanId: this.state.loanId,
            loanType: this.state.loanType,
            applicantName: this.state.applicantName,
            applicantAddress: this.state.applicantAddress,
            applicantMobile: this.state.applicantMobile,
            applicantEmail: this.state.applicantEmail,
            applicantAadhaar: this.state.applicantAadhaar,
            applicantPan: this.state.applicantPan,
            applicantSalary: this.state.applicantSalary,
            loanAmountRequired: this.state.loanAmountRequired,
            loanRepaymentMonths: this.state.loanRepaymentMonths
        }

        axios.post('http://localhost:8080/admin/addLoan', data)
    }

    render()
    {
        return (
        <>
            <div id='heading'>
                <h3>Loan Application</h3>
            </div>
            <div id='subhead'>
                <p>Enter Loan Details To Proceed</p>
            </div>
            <form className='adlogform' onSubmit={this.handleSubmit}>
            <div>
            <label id='lb'>Loan ID</label>
            <input
                type="text"
                placeholder="Enter"
                id='inputform'
                value={this.state.loanId}
                onChange={this.handleIdChange}
            />
            </div>
            <div>
            <label id='lb'>Loan Type</label>
            <input
                type="text"
                placeholder="Enter"
                id='inputform'
                value={this.state.loanType}
                onChange={this.handleTypeChange}
            />
            </div>
            <br></br>
            <div>
            <label id='lb'>Name</label>
            <input
                type="text"
                placeholder="Enter name"
                id='inputform'
                value={this.state.applicantName}
                onChange={this.handleNameChange}
            />
            </div>
            <br></br>
            <div>
            <label id='lb'>Address</label>
            <input
                type="text"
                placeholder="Enter name"
                id='inputform'
                value={this.state.applicantAddress}
                onChange={this.handleAddressChange}
            />
            </div>
            <br></br>
            <div>
            <label id='lb'>mobile</label>
            <input
                type="text"
                placeholder="Enter mobile"
                id='inputform'
                value={this.state.applicantMobile}
                onChange={this.handleMobileChange}
            />
            </div>
            <br></br>
            <div>
            <label id='lb'>Email</label>
            <input
                type="text"
                placeholder="Enter email"
                id='inputform'
                value={this.state.applicantEmail}
                onChange={this.handleEmailChange}
            />
            </div>
            <br></br>
            <div>
            <label id='lb'>Aadhaar</label>
            <input
                type="text"
                placeholder="Enter"
                id='inputform'
                value={this.state.applicantAadhaar}
                onChange={this.handleAadhaarChange}
            />
            </div>
            <br></br>
            <div>
            <label id='lb'>Pan</label>
            <input
                type="text"
                placeholder="Enter"
                id='inputform'
                value={this.state.applicantPan}
                onChange={this.handlePanChange}
            />
            </div>
            <br></br>
            <div>
            <label id='lb'>Salary</label>
            <input
                type="text"
                placeholder="Enter"
                id='inputform'
                value={this.state.applicantSalary}
                onChange={this.handleSalaryChange}
            />
            </div>
            <br></br>
            <div>
            <label id='lb'>required amount</label>
            <input
                type="text"
                placeholder="Enter"
                id='inputform'
                value={this.state.loanAmountRequired}
                onChange={this.handleRequiredChange}
            />
            </div>
            <br></br>
            <div>
            <label id='lb'>Months</label>
            <input
                type="text"
                placeholder="Enter"
                id='inputform'
                value={this.state.loanRepaymentMonths}
                onChange={this.handleMonthsChange}
            />
            </div>
            <div>
            <button type="submit" id='adlogin'>
                Open Loan
            </button>
            </div>
        </form>
        </>
        )
    }
}

export default AddLoan;
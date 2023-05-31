import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

class Table extends Component
{
    state = {
        data: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/admin/getAllLoans')
        .then(response => {
            this.setState({data: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render()
    {
        return(
            <>
                <div id="h">
                <h1 id='t'>Loan Details</h1>
                </div>
                <div className="app-contain">
                <table>
                    <thead>
                    <tr>
                        <th>Loan ID</th>
                        <th>Loan Type</th>
                        <th>Applicant Name</th>
                        <th>Applicant Address</th>
                        <th>Applicant Mobile</th>
                        <th>Applicant E-Mail</th>
                        <th>Applicant Aadhaar</th>
                        <th>Applicant PAN</th>
                        <th>Applicant Salary</th>
                        <th>Loan Amount Required</th>
                        <th>Loan Repayment Months</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((obj) => (
                    <tr>
                        <td>{obj.loanId}</td>
                        <td>{obj.loanType}</td>
                        <td>{obj.applicantName}</td>
                        <td>{obj.applicantAddress}</td>
                        <td>{obj.applicantMobile}</td>
                        <td>{obj.applicantEmail}</td>
                        <td>{obj.applicantAadhaar}</td>
                        <td>{obj.applicantPan}</td>
                        <td>{obj.applicantSalary}</td>
                        <td>{obj.loanAmountRequired}</td>
                        <td>{obj.loanRepaymentMonths}</td>
                    </tr>
                    ))}
                    </tbody>
                </table>
                </div>
                <div id='add'>
                    <button type="submit" id='out'>
                        Add Loan Applicant
                    </button>
                </div>
                <div id='logout'>
                <button type="submit" id='out'>
                    LOGOUT
                </button>
                </div>
            </>
        );
    }
};
export default Table;
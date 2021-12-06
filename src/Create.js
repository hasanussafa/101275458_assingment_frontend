import React, { Component } from 'react'
import axios from 'axios';
const base_url = 'http://localhost:9090/api/v1/employees/'

export default class Create extends Component {

    render() {
        return (
            <div className="dash_board">
                <br /><br /><br />
                <h1>Create New Employee</h1>

                            <div className="paragraph">
                                <form onSubmit={this.onSubmit} action="/view">

                                    <div >
                                        <label>Employee First Name </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.firstName}
                                            onChange={this.onChangeFirstName}
                                        />
                                    </div>

                                    <div>
                                        <label>Employee Last Name </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.lastName}
                                            onChange={this.onChangeLastName}
                                        />
                                    </div>

                                    <div>
                                        <label>Employee Email </label>
                                        <input type="text"
                                            required
                                            className="form-control"
                                            value={this.state.emailid}
                                            onChange={this.onChangeEmailid}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Submit" className="btn button" />
                                    </div>
                                </form>

                                <a href="/view"><button className="btn button" >Cancel</button> </a>

                            </div>
                            <div className="col">
                            </div>                   

            </div >
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            emailid: '',
            employee: []
        }
    }

    componentDidMount = () => {
        axios.get(base_url)
            .then(response => {
                this.setState({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    emailid: response.data.emailid
                })
            })
            // error checking
            .catch(function (error) {
                console.log(error);
            })

        axios.get(base_url)
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        employee: response.data.map(employee => employee.firstName),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    onChangeFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    onChangeLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }
    onChangeEmailid = (e) => {
        this.setState({
            emailid: e.target.value
        })
    }
    onSubmit = (e) => {

        const employees = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailid: this.state.emailid
        }

        console.log(employees);

        axios.post(base_url, employees)
            .then(res => console.log(res.data));

    }

    
}

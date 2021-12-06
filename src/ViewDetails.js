import React, { Component } from 'react'
import axios from 'axios';
const base_url = 'http://localhost:9090/api/v1/employees/';
export default class ViewDetails extends Component {
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
        axios.get(base_url + this.props.match.params.id)
            .then(response => {
                this.setState({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    emailid: response.data.emailid
                })
            })
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

    render() {
        return (
            <div className="dash_board">
                <br />
                <h3>Employee Details</h3>
                <br />
                <div className="paragraph">
                                <div className="form-group">
                                    <strong>Employee First Name :</strong> {this.state.firstName}
                                </div>

                                <div className="form-group">
                                    <strong>Employee Last Name : </strong>{this.state.lastName}
                                </div>
                                <div className="form-group">
                                    <strong>Employee Email : </strong>{this.state.emailid}
                                </div>
                            </div>
                            <div className="col">
                         
                </div>
                <a href="/view"><button className="btn btn-primary" >OK</button> </a>

            </div >
        )
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

        axios.put(base_url + this.props.match.params.id, employees)
            .then(res => console.log(res.data));

    }

  
}

import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const data_url = 'http://localhost:9090/api/v1/employees/';

const Employees = viewEmployee => (
    <tbody>
        <tr>
            <td>{viewEmployee.employee.firstName}</td>
            <td>{viewEmployee.employee.lastName}</td>
            <td>{viewEmployee.employee.emailid}</td>
            <td class="d-flex justify-content-around">
                <Link to={"/update/" + viewEmployee.employee._id} ><button className="button" >Update</button></Link>
                <Link to={"/view"}  >
                    <button className="button" onClick={(e) => { viewEmployee.deleteEmployee(viewEmployee.employee._id) }}>Delete</button>
                </Link>
                <Link to={"/viewDetails/" + viewEmployee.employee._id} ><button className="button">View</button></Link>
            </td>

        </tr>
    </tbody>

)

export default class View extends Component {
    constructor(viewEmployee) {
        super(viewEmployee);
        this.state = { employee: [] };
    }

    componentDidMount() {
        axios.get(data_url)
            .then(response => {
                console.log(response.data)
                const employee = response.data
                this.setState({ employee })
            })
            .catch((error) => {
                console.log(error);
            })


    }

    
    render() {
        return (
            <div className="dash_board">

                <br /><br /><br />
                <h1>List of  Employee</h1>
                <br />
                <Link to={"/create"} ><button className="button">Create New Employee</button></Link>
                <br /><br />

                <div className="paragraph">
                   
                           
                            <div className="col-10">

                                <table className="table table-striped">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Employee First Name</th>
                                            <th>Employee Last Name</th>
                                            <th>Employee Email</th>
                                            <th>Actions</th>
                                        </tr>
                                        
                                    </thead>
                                    {this.employeesList()}
                                </table >
                            </div>                
                </div>
            </div>
        )
    }
    
    deleteEmployee(id) {
        axios.delete(data_url + id)
            .then(response => { console.log(response.data) });

        window.location.reload(false);
    }
    employeesList() {
        return this.state.employee.map(emp => {
            return <Employees className="card-deck card" employee={emp} key={emp._id} deleteEmployee={this.deleteEmployee} />;
        })
    }


}

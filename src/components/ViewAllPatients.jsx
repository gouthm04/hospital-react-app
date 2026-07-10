import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAllPatients = () => {
    const [data,changeData] = useState([])

    const fetchData = () => {
        
            axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/hospital-data.json")
            .then(
                (response) => {
                    changeData(response.data)
                }
            ).catch()
        }
    

    useEffect(
        () => {
            fetchData()
        },[]
    )
  return (
    <div>
        <NavBar/>
        <div className="container mt-3">
            <div className="row">
                <div className="col-12">
                    <table className="table table-hover table-bordered ">
                        <thead className="table-primary">
                            <tr>
                            <th scope="col">Patient ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Blood Group</th>
                            <th scope="col">Doctor</th>
                            <th scope="col">Room</th>
                            <th scope="col">Mobile</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {data.map(
                                (value,index) => {
                                    return (
                                        <tr>
                                            <td>{value.patientId}</td>
                                            <td>{value.name}</td>
                                            <td>{value.age}</td>
                                            <td>{value.gender}</td>
                                            <td>{value.bloodGroup}</td>
                                            <td>{value.doctor}</td>
                                            <td>{value.room}</td>
                                            <td>{value.mobile}</td>
                                        </tr>
                                    )
                                }
                            )}
                            

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAllPatients
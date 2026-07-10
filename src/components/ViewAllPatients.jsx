import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAllPatients = () => {
    const [data,changeData] = useState(
        [ 
            { "patientId": "PT101", "name": "Arun Kumar", "age": 34, "gender": "Male", "bloodGroup": "O+", "doctor": "Dr. Meera", "room": "A101", "mobile": "9876543210" },
            { "patientId": "PT102", "name": "Anjali Nair", "age": 27, "gender": "Female", "bloodGroup": "A+", "doctor": "Dr. Joseph", "room": "A102", "mobile": "9876543211" }, 
            { "patientId": "PT103", "name": "Rahul Das", "age": 41, "gender": "Male", "bloodGroup": "B+", "doctor": "Dr. Suresh", "room": "B201", "mobile": "9876543212" }, 
            { "patientId": "PT104", "name": "Sneha Roy", "age": 30, "gender": "Female", "bloodGroup": "AB+", "doctor": "Dr. Meera", "room": "B202", "mobile": "9876543213" }, 
            { "patientId": "PT105", "name": "Vishnu Prasad", "age": 52, "gender": "Male", "bloodGroup": "O-", "doctor": "Dr. Anand", "room": "C301", "mobile": "9876543214" }, 
            { "patientId": "PT106", "name": "Keerthana S", "age": 24, "gender": "Female", "bloodGroup": "A-", "doctor": "Dr. Joseph", "room": "C302", "mobile": "9876543215" }, 
            { "patientId": "PT107", "name": "Nikhil Menon", "age": 38, "gender": "Male", "bloodGroup": "B-", "doctor": "Dr. Anand", "room": "D401", "mobile": "9876543216" }, 
            { "patientId": "PT108",
                 "name": "Priya Thomas",
                 "age": 46,
                 "gender": "Female",
                 "bloodGroup": "O+",
                 "doctor": "Dr. Suresh",
                 "room": "D402",
                 "mobile": "9876543217" 
            } 
        ]
    )
  return (
    <div>
        <NavBar/>
        <div className="container mt-3">
            <div className="row">
                <div className="col-12">
                    <table class="table table-hover table-bordered ">
                        <thead class="table-primary">
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
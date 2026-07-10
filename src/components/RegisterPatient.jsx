import React from 'react'
import NavBar from './NavBar'

const RegisterPatient = () => {
  return (
    <div>
        <NavBar/>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <div className="row g-3">

              <div className="col-12 col-sm-6">
                <label className="form-label">Patient ID</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6">
                <label className="form-label">Age</label>
                <input type="number" className="form-control" min="0" />
              </div>

              <div className="col-12 col-sm-6">
                <label className="form-label">Gender</label>
                <select className="form-select">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="col-12 col-sm-6">
                <label className="form-label">Blood Group</label>
                <select className="form-select">
                  <option>Select Blood Group</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
              </div>

              <div className="col-12 col-sm-6">
                <label className="form-label">Mobile Number</label>
                <input
                  type="tel"
                  className="form-control"
                  maxLength="10"
                />
              </div>

              <div className="col-12 col-sm-6">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" />
              </div>

              <div className="col-12 col-sm-6">
                <label className="form-label">Doctor Assigned</label>
                <select className="form-select">
                  <option>Select Doctor</option>
                  <option>Dr. John</option>
                  <option>Dr. Sarah</option>
                  <option>Dr. David</option>
                  <option>Dr. Emily</option>
                </select>
              </div>

              <div className="col-12 col-sm-6">
                <label className="form-label">Admission Date</label>
                <input type="date" className="form-control" />
              </div>

              <div className="col-12 col-sm-6">
                <label className="form-label">Room Number</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12">
                <label className="form-label">Disease / Health Complaint</label>
                <textarea
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>

              <div className="col-12">
                <label className="form-label">Address</label>
                <textarea
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>

              <div className="col-12">
                <button className="btn btn-primary">
                  Register Patient
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPatient
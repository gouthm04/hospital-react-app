import React, { useState } from "react";
import NavBar from "./NavBar";

const SearchPatient = () => {


  return (
    <div>
      <NavBar />

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className=" p-4">
              <h3 className="text-center mb-3">Search Patient</h3>

              <label className="form-label">Patient ID</label>
              <input type="text" className="form-control" placeholder="Enter Patient ID"/>

              <button className="btn btn-primary mt-3">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPatient;
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Hospital.</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav gap-5">
                            
                            <Link className="nav-link" to="/">Register Patient</Link>
                            <Link className="nav-link" to="/search">Search Patient</Link>
                            <Link className="nav-link" to="/delete">Discharge Patient</Link>
                            <Link className="nav-link" to="/view">View Patient</Link>
                            
                            
                        </div>
                        </div>
                    </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar
import React from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {

    return (
        <div className="container py-5 h-100" >
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-dark text-white border-style">
                        <div className="card-body p-5 text-center">

                            <div className="mb-md-5 mt-md-4 pb-5">

                                <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                                <p className="text-white-50 mb-5">Please register yourself</p>

                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control bg-dark text-light" id="floatingInput" placeholder="Enter your name" />
                                    <label for="floatingInput">Name</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control bg-dark text-light" id="floatingInput" placeholder="Email address" />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control bg-dark text-light" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                </div>

                                <div className="form-floating">
                                    <input type="password" className="form-control bg-dark text-light" id="floatingPassword" placeholder="Confirm Password" />
                                    <label for="floatingPassword">Confirm Password</label>
                                </div>

                                <div className="small mt-3 mb-5 pb-lg-2">
                                    <div class="form-check form-switch text-align-left">
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                            <label class="form-check-label " for="flexSwitchCheckDefault">I accept Terms and Conditions</label>
                                    </div>
                                </div>

                                <button className="btn btn-outline-light btn-lg px-5" type="submit">Sign Up</button>

                                <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                    <a href="#!" className="text-white"><i className="fab fa-steam fa-lg"></i></a>
                                    <a href="#!" className="text-white"><i className="fab fa-facebook fa-lg mx-4 px-2"></i></a>
                                    <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                </div>

                            </div>

                            <div>
                                <p className="mb-0">Already have an account? <Link to="../signin" className="text-white-50 fw-bold">Sign In</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SignUp
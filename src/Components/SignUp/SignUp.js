import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {
    
    let navigate = useNavigate();
    
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsAndConditionFlag: false
    })

    const handleUser = e => {
        const {name, value} = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        });
    }

    const signUp = async (e) => {
        e.preventDefault()


        const {name, email, password, confirmPassword, termsAndConditionFlag} = userInfo;

        if (!termsAndConditionFlag) {
            alert("Please accept our terms and conditions")
            return
        }

        if (password != confirmPassword) {
            alert('Password mismatch')
            return;
        }

        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })

        

        if (response.status == 201) {
            const jsonResponse = await response.json()
            localStorage.setItem('authToken', jsonResponse.authToken)
            navigate('/')
        }
        
    }

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
                                    <input type="email" className="form-control bg-dark text-light" value={userInfo.name} onChange={handleUser} id="name" name="name" placeholder="Enter your name" />
                                    <label htmlFor="name">Name</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control bg-dark text-light" value={userInfo.email} onChange={handleUser} id="email" name="email" placeholder="Email address" />
                                    <label htmlFor="email">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control bg-dark text-light" value={userInfo.password} onChange={handleUser} id="password" name="password" placeholder="Password" />
                                    <label htmlFor="password">Password</label>
                                </div>

                                <div className="form-floating">
                                    <input type="password" className="form-control bg-dark text-light" value={userInfo.confirmPassword} onChange={handleUser} id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                </div>

                                <div className="small mt-3 mb-5 pb-lg-2">
                                    <div className="form-check form-switch text-align-left">
                                        <input className="form-check-input" type="checkbox" role="switch" id="tcSwitch" name="tcSwitch"  onClick={() => setUserInfo({...userInfo, termsAndConditionFlag: !userInfo.termsAndConditionFlag})} />
                                            <label className="form-check-label " htmlFor="tcSwitch">I accept Terms and Conditions</label>
                                    </div>
                                </div>

                                <button className="btn btn-outline-light btn-lg px-5" onClick={ e => signUp(e) } type="submit">Sign Up</button>

                                <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                   <a href="" onClick={e => e.preventDefault() } className="text-white"><i className="fab fa-steam fa-lg"></i></a>
                                    <a href="" onClick={e => e.preventDefault() } className="text-white"><i className="fab fa-facebook fa-lg mx-4 px-2"></i></a>
                                    <a href="" onClick={e => e.preventDefault() } className="text-white"><i className="fab fa-google fa-lg"></i></a>
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
import React, { useState, useEffect } from 'react'
import { Link , useNavigate} from 'react-router-dom'

const SignIn = (props) => {
    
    const [creds, setCreds] = useState({
        email: '',
        password: ''
    })
    
    const login = async (e) => {
        e.preventDefault()

        const {email, password} = creds;

        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })

        if (response.status == 200) {
            const jsonResponse = await response.json()
            localStorage.setItem('authToken', jsonResponse.authToken)
            navigate('/')
        }
    }


    const handleInput = e => {
        const {name, value} = e.target;
        setCreds({
            ...creds,
            [name]: value
        });
    } 

    const navigate = useNavigate()
    const auth = localStorage.getItem('authToken')

    useEffect(() => {
      if (auth)
        navigate('/')
    }, [])
    

    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-dark text-white border-style">
                        <div className="card-body p-5 text-center">

                            <div className="mb-md-5 mt-md-4 pb-5">

                                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control bg-dark text-light" value={creds.email} onChange={handleInput} id="email" name="email"  placeholder="name@example.com" />
                                    <label htmlFor="email">Email address</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control bg-dark text-light" value={creds.password} onChange={handleInput} id="password" name="password" placeholder="Password" />
                                    <label htmlFor="password">Password</label>
                                </div>

                                <p className="small mt-3 mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                <button className="btn btn-outline-light btn-lg px-5" type="button" onClick={(e) => login(e)}>Login</button>

                                <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                    <a href="" onClick={e => e.preventDefault() } className="text-white"><i className="fab fa-steam fa-lg"></i></a>
                                    <a href="" onClick={e => e.preventDefault() } className="text-white"><i className="fab fa-facebook fa-lg mx-4 px-2"></i></a>
                                    <a href="" onClick={e => e.preventDefault() } className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                </div>

                            </div>

                            <div>
                                <p className="mb-0">Don't have an account? <Link to="../signup" className="text-white-50 fw-bold">Sign Up</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
    
    export default SignIn
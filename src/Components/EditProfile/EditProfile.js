import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './EditProfile.css'

const EditProfile = (props) => {

    const [userProfile, setUserProfile] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('authToken')

        if (!auth) {
            navigate('/')
            return
        }

        fetch('http://localhost:5000/api/auth/getuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': auth
            }
        }).then(res => res.json()).then(res_json => {
            setUserProfile({
                name: res_json.name,
                email: res_json.email,
                picture: res_json.picture
            })
        })


    }, [])


    const handleInput = e => {
        const { name, value } = e.target;
        setUserProfile({
            ...userProfile,
            [name]: value
        });
    }

    const updateProfile = async (e) => {
        e.preventDefault()

        const auth = localStorage.getItem('authToken')

        if (!auth) {
            navigate('/')
            return
        }

        const res = await fetch('http://localhost:5000/api/auth/updateprofile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': auth
            },
            body: {
                name: userProfile.name,
                picture: userProfile.picture
            }
        })

        const res_json = await res.json()



    }

    return (
        <div className='container text-light bg-dark'>
            <div className='row g-4'>
                <div className='col-sm-12 col-md-6 h-600 d-flex justify-content-center align-items-center'>
                    <img className='rounded-circle' src={userProfile.picture} alt={userProfile.picture}  width='300px' height='300px' />
                </div>

                <div className='col-sm-12 col-md-6'>
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="card bg-dark text-white border-style">
                            <div className="card-body p-5 text-center">

                                <h2 className="fw-bold mb-2 text-uppercase">PROFILE</h2>
                                <p className="text-white-50 mb-5">Update your profile</p>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control bg-dark text-light" value={userProfile.name} onChange={handleInput} id="name" name="name" placeholder="name@example.com" />
                                    <label htmlFor="name">Name</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control bg-dark text-light" value={userProfile.picture} onChange={handleInput} id="picture" name="picture" placeholder="name@example.com" />
                                    <label htmlFor="picture">Image URL</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control bg-dark text-light" value={userProfile.email} id="email" name="email" placeholder="name@example.com" />
                                    <label htmlFor="email">Email address</label>
                                </div>

                                <button className="btn btn-outline-light btn-lg px-5" onClick={e => updateProfile(e)} type="button">Update</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default EditProfile

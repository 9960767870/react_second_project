import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom';

export default function ExceptionPage({ isLoggedIn, setIsLoggedIn }) {

    const onSubmit = () => {
        // Assuming login is successful, update the login status
        //   isLoggedIn.current=true;
        //  console.log(isLoggedIn.current)
        setIsLoggedIn(true);
        console.log(isLoggedIn)
        alert("Login Successfully");

    };
    return (
        <>
            <div className='container p-4 mt-5' style={{ height: "220px", borderRadius: "20px" }}>
                <div className="row">
                    <h2 style={{ textAlign: "center" }}>User is not logged in</h2>
                </div>

                <div className="row">
                    <p style={{ textAlign: "center" }}>Please try again by logging in.</p>
                </div>

                <div className="row">
                    <div className='' style={{ textAlign: "center" }}>
                        {!isLoggedIn ? (
                            <>
                                <Login />
                            </>
                        ) : (
                            
                            <Link to='/'>
                                <button type="button" className="btn btn-primary">Go To Home Page</button>
                            </Link>
                        )}
                    </div>
                </div>

            </div>

            {/* Login Modal */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="loginModalLabel">Login Here</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword" className="form-label">UserName</label>
                                    <input type="text" className="form-control" id="exampleInputPassword" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>

                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="button" className="btn btn-primary" onClick={onSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

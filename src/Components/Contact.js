import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

export default function Contact({ isLoggedIn, setIsLoggedIn }) {
    return (
        <div>
            {/* Conditionally render ExceptionPage if isLoggedIn is false */}
            {!isLoggedIn ? (
               <div className='container p-4 mt-5' style={{ height: "220px", borderRadius: "20px" }}>
               <div className="row">
                   <h2 style={{ textAlign: "center" }}>User is not logged in</h2>
               </div>

               <div className="row">
                   <p style={{ textAlign: "center" }}>Please try again by logging in.</p>
               </div>

               <div className="row">
                   <div className='' style={{ textAlign: "center" }}>

                       <Link style={{ textAlign: "center" }} to='/exception'>Please Login First</Link>
                   </div>
               </div>
           </div>
            ) : (
                <>
                   <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                    <a className="navbar-brand" href="#">Rushi<span style={{ color: "red" }}>.in</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active"  aria-current="page" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${isLoggedIn ? '' : ''}`} aria-current="page" to="/about">
                            About
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link
                            className="nav-link"
                            to="/technology"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Technology
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {isLoggedIn ? (
                                <>
                                    <li>
                                        <a className="dropdown-item" href="https://www.javatpoint.com/" rel="noopener noreferrer" target="_blank">
                                            Technology
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="https://www.codewithharry.com/videos/" rel="noopener noreferrer" target="_blank">
                                            Web-Development
                                        </a>
                                    </li>
                                </>
                            ) : (
                                <li className="dropdown-item disabled">
                                    Technology
                                </li>
                            )}
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">
                            Contact-Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog">
                            Blog
                        </Link>
                    </li>
                </ul>
                <div className="">
                  
                    <Login/>
                    
                </div>
                </div>
            </nav>
                    <h2 className='my-4' style={{textAlign:"center"}}>Contact-Us</h2>

                    <div className="container my-4" style={{ border: "1px solid black" }}>

                        <form>
                        <div className="mb-3 my-3">
                                <label htmlFor="exampleInputText" className="form-label">UserName</label>
                                <input type="text" className="form-control" id="exampleInputText" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="form-group">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='textarea'></textarea>
                            </div>

                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>


                    </div>

                </>
            )}
        </div>
    )
}

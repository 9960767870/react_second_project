import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

export default function About({ isLoggedIn }) {
    { console.log("About " + isLoggedIn) }
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
                                    <Link className="nav-link active" aria-current="page" to="/">
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

                                <Login />

                            </div>
                        </div>
                    </nav>
                    <div className='container' style={{backgroundColor:'#7C81AD', marginTop:"150px"}}>
                    <main className="px-3">
                        <h1>About-Us.</h1>
                        <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                        <p className="lead">
                            <a href="#" className="btn btn-lg btn-secondary fw-bold border-black bg-black" >Learn more</a>
                        </p>
                    </main>
                    </div>
                </>
            )}
        </div>




    )
}

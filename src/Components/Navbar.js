
import image1 from './1.jpg'
import image2 from './2.jpeg'
import image3 from './3.jpg'
import { Link  } from 'react-router-dom'
import Login from './Login'
import ExceptionPage from './ExceptionPage'


export default function Navbar({isLoggedIn,setIsLoggedIn}) {
    // Step 1: Create a state variable to track login status
    

//    const isLoggedIn = useRef(false);
   console.log("8888888888888"+isLoggedIn)
   
    const onSubmit = () => {
        // Assuming login is successful, update the login status
     //   isLoggedIn.current=true;
      //  console.log(isLoggedIn.current)
      setIsLoggedIn(true);
      console.log(isLoggedIn)
        alert("Login Successfully");
       
    };

    const chengeState=()=>{
        setIsLoggedIn(false);
        console.log(isLoggedIn)
          alert("user is logged out");

    }

    return (
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
                        <Link className={`nav-link ${isLoggedIn ? '' : <ExceptionPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} onSubmit={onSubmit}/>}`} aria-current="page" to="/about">
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
                <div className="">
                  
                <button type="button" className="btn btn-outline-danger mx-2" onClick={chengeState}>Logout</button>
                    
                </div>
                </div>
            </nav>

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


            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image1} className="d-block w-100 " style={{ height: "500px" }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>This is my website</h2>
                            <p>Some representative placeholder content for the first slide.</p>
                            <a href="https://www.javatpoint.com/" rel="noopener noreferrer" target='_blank'>
                                <button className="btn btn-primary">Technology</button>
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block w-100 " style={{ height: "500px" }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>This is my web-side</h2>
                            <p>Some representative placeholder content for the second slide.</p>
                            <a href="https://www.javatpoint.com/" rel="noopener noreferrer" target='_blank'>
                                <button className="btn btn-primary">Technology</button>
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100 " style={{ height: "500px" }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>This is my web-site</h2>
                            <p>Some representative placeholder content for the third slide.</p>
                            <a href="https://www.javatpoint.com/" rel="noopener noreferrer" target='_blank'>
                                <button className="btn btn-primary">Technology</button>
                            </a>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="col-lg-8 mx-auto p-3 py-md-5">
                <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
                    <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fillRule="evenodd" clipRule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
                        <span className="fs-4">Starter template</span>
                    </a>
                </header>

                <main>
                    <h1>Get started with Rushi project</h1>
                    <div className="mb-5">
                        <a href="/docs/5.0/examples/" className="btn btn-primary btn-lg px-4">Download examples</a>
                    </div>

                    <hr className="col-3 col-md-2 mb-5" />

                    <div className="row g-5">
                        <div className="col-md-6">
                            <h2>Starter projects</h2>
                            <p>Ready to beyond the starter template? Check out these open source projects that you can quickly duplicate to a new GitHub repository.</p>
                            <ul className="icon-list">
                                <li><a href="https://github.com/twbs/bootstrap-npm-starter" rel="noopener noreferrer" target="_blank">Bootstrap npm starter</a></li>
                                <li className="text-muted">Rushi.in Parcel starter (coming soon!)</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h2>Guides</h2>
                            <p>Read more detailed instructions and documentation on using or contributing to Bootstrap.</p>
                            <ul className="icon-list">
                                <li><a href="/docs/5.0/getting-started/introduction/">Rushi.in quick start guide</a></li>
                                <li><a href="/docs/5.0/getting-started/webpack/">Rushi.in Webpack guide</a></li>
                                <li><a href="/docs/5.0/getting-started/parcel/">Rushi.in Parcel guide</a></li>
                                <li><a href="/docs/5.0/getting-started/build-tools/">Contributing to Rushi.in</a></li>
                            </ul>
                        </div>
                    </div>
                </main>
                <footer className="pt-5 my-5 text-muted border-top">
                    <b>Created by the Rushi Bhosale · © 2023</b>
                </footer>
            </div>
        </>
    )
}

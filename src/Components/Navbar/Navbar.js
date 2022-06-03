import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = (props) => {
    const { currentPage, currentPageSetter, isLoggedIn, isLoggedInSetter } = props;
    return (
        <header className="navbar navbar-expand-md navbar-dark bd-navbar bg-dark">
            <nav className="container-xxl flex-wrap flex-md-nowrap">
                <a className="navbar-brand p-0 me-2" href="/" aria-label="Bootstrap">
                    <span className="fs-4">Skin-noir</span>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="bi" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>

                </button>

                <div className="collapse navbar-collapse" id="bdNavbar">
                    <ul className="navbar-nav flex-row flex-wrap bd-navbar-nav pt-2 py-md-0">
                        <li className="nav-item col-6 col-md-auto">
                            <Link className={"nav-link p-2" + (currentPage === "home" ? " active" : "")} onClick={() => currentPageSetter("home")} to="/" >Home</Link>
                        </li>
                        <li className="nav-item col-6 col-md-auto">
                            <Link className={"nav-link p-2" + (currentPage === "browse" ? " active" : "")} onClick={() => currentPageSetter("browse")} to="/browse">Browse</Link>

                        </li>
                        <li className="nav-item col-6 col-md-auto">
                            <Link className={"nav-link p-2" + (currentPage === "community" ? " active" : "")} onClick={() => currentPageSetter("community")} to="/community" >Community</Link>
                        </li>
                        <li className="nav-item col-6 col-md-auto">
                            <Link className={"nav-link p-2" + (currentPage === "faqs" ? " active" : "")} onClick={() => currentPageSetter("faqs")} to="/faqs">FAQs</Link>
                        </li>
                        <li className="nav-item col-6 col-md-auto">
                            <Link className={"nav-link p-2" + (currentPage == "about" ? " active" : "")} onClick={() => currentPageSetter("about")} to="/about" >About</Link>
                        </li>
                    </ul>

                    <hr className="d-md-none text-white-50" />

                    <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
                        <li className="nav-item col-6 col-md-auto">
                            <a className="nav-link p-2" href="https://www.facebook.com" target="_blank" rel="noopener">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="navbar-nav-svg d-inline-block align-text-top bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                                <small className="d-md-none ms-2">Facebook</small>
                            </a>
                        </li>
                        <li className="nav-item col-6 col-md-auto">
                            <a className="nav-link p-2" href="https://www.twitter.com" target="_blank" rel="noopener">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" className="navbar-nav-svg d-inline-block align-text-top" viewBox="0 0 512 416.32" role="img"><title>Twitter</title><path fill="currentColor" d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92" /></svg>
                                <small className="d-md-none ms-2">Twitter</small>
                            </a>
                        </li>
                        <li className="nav-item col-6 col-md-auto">
                            <a className="nav-link p-2" href="https://www.instagram.com" target="_blank" rel="noopener">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="navbar-nav-svg d-inline-block align-text-top bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                </svg>
                                <small className="d-md-none ms-2">Instagram</small>
                            </a>
                        </li>

                    </ul>

                    {isLoggedIn && <div className="dropdown text-end">
                        <a href="#" className="d-block link-light text-decoration-none dropdown-toggle show" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="true">
                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
                        </a>
                        <ul className="dropdown-menu text-small show avatar-dropdown" aria-labelledby="dropdownUser1"  data-popper-placement="bottom-start">
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><a className="dropdown-item" href="#">Inventory</a></li>
                            <li><a className="dropdown-item" href="#">Wallet</a></li>
                            <li><a className="dropdown-item" href="#">Account Preferences</a></li>                            
                        </ul>
                    </div>}

                    {isLoggedIn && <Link className="btn btn-bd-signin d-lg-inline-block my-2 my-md-0 ms-md-3" to="/" onClick={() => isLoggedInSetter(false)}>Sign Out</Link>}
                    {!isLoggedIn && <Link className="btn btn-bd-signin d-lg-inline-block my-2 my-md-0 ms-md-3" to="/signin">Sign In</Link>}
                    {!isLoggedIn && <Link className="btn btn-bd-signup d-lg-inline-block my-2 my-md-0 ms-3" to="/signup">Sign Up</Link>}
                </div>
            </nav>

        </header>
    )
}

export default Navbar
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const searchButton = {
        position: 'absolute',
        right: "130px"
    }
    const navLink = {
        marginRight: '15px',
        textDecoration: 'none',
        color: 'white'
    }
    return (
        <Fragment>
            <header className="menu fixed" id="myHeader">
                <nav className="navbar navbar-expand-lg">
                    <Link className="navbar-brand" to="https://academy.babastudio.com">
                        <img src={require('../images/Logo Baba Studio.png')} alt="babastudio" className="img-fluid" />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-white" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="/"><i className="fa fa-th" aria-hidden="true"></i> Categories</Link>
                                <div className="dropdown-menu" role="menu" aria-labelledby="navbarDropdown">
                                    <Link to="https://academy.babastudio.com/course-package-frontend?category=4" className="dropdown-item">Design</Link>
                                    <Link to="https://academy.babastudio.com/course-package-frontend?category=5" className="dropdown-item">Digital Marketing</Link>
                                    <Link to="https://academy.babastudio.com/course-package-frontend?category=9" className="dropdown-item">Progamming Front End</Link>
                                    <Link to="https://academy.babastudio.com/course-package-frontend?category=10" className="dropdown-item">Progamming Back End</Link>
                                    <Link to="https://academy.babastudio.com/course-package-frontend?category=11" className="dropdown-item">Mobile</Link>
                                    <Link to="https://academy.babastudio.com/course-package-frontend?category=12" className="dropdown-item">Video Editing</Link>
                                    <Link to="https://academy.babastudio.com/course-package-frontend?category=13" className="dropdown-item">Database</Link>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0" action="https://academy.babastudio.com/course-package-frontend" method="get">
                            <input type="text" name="search" class="form-control mr-sm-2 rounded-pill w-75" placeholder="Search for Courses..." required />
                            <button type="submit" class="btn my-2 my-sm-0" style={searchButton}><i class="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                        <ul className="nav navbar-nav navbar-right font-thin">
                            <li className="nav-item">
                                <Link to="/" style={navLink}>Techfor Community</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" style={navLink}><i className="fa icon fa-shopping-cart" aria-hidden="true"></i></Link>
                            </li>
                            <li className="nav-item login">
                                <Link to="https://academy.babastudio.com/login" className="board-rad" style={navLink}><span>Login</span></Link>
                            </li>
                            <li className="nav-item signup bab-nav">
                                <Link to="https://academy.babastudio.com/register" className="board-rad" style={navLink}><span>Sign Up</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </Fragment>
    );
}

export default Header;
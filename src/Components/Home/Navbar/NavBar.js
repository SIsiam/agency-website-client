import React from 'react';
import logo from '../../../images/sponsor/logo-me.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (

        <div className="container">

            <nav className="navbar navbar-expand-lg navbar-light bg-white py-2">
                <div data-testid="test-1" className="container">
                    <Link className="" to="/home">
                        <img src={logo} style={{ width: '80px' }} alt="" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item active">
                                <Link to="/home" className="nav-link mr-5 font-weight-bold">Home </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/orderList" className="nav-link mr-5 font-weight-bold">Order List</Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link mr-5 font-weight-bold" href="#contactUs">Contact Us</a>
                            </li>

                            <li className="nav-item">
                                <Link to="/AdminSevice" className="nav-link mr-5 font-weight-bold">Admin</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/login" className="nav-link mr-5 font-weight-bold">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default NavBar;
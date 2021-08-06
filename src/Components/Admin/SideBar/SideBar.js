import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHdd, faPlus, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './SideNav.css'


const SideBar = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);


    useEffect(() => {
        fetch(`http://localhost:5000/admin?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    const newUser = { ...loggedInUser };
                    newUser.setUser = true;
                    setLoggedInUser(newUser)
                }
                else {
                    const newUser = { ...loggedInUser };
                    newUser.setUser = false;
                    setLoggedInUser(newUser)
                }
            })
    }, [])




    return (
        <div className="sidebar py-5 px-4 " x>

            <ul className="list-unstyled">

                {
                    loggedInUser.setUser ?
                        <div>
                            <li>
                                <Link to="/adminSevice" className="text-success" style={{ textDecoration: 'none' }}>
                                    <FontAwesomeIcon icon={faHdd} /> <span>Admin Sevice</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/addService" className="text-primary" style={{ textDecoration: 'none' }}>
                                    <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/addAdmin" className="text-warning" style={{ textDecoration: 'none' }}>
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/manageService" className="text-info" style={{ textDecoration: 'none' }}>
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Manage Services</span>
                                </Link>
                            </li>
                        </div>

                        :

                        <div>
                            <li>
                                <Link to="/orderList" className="text-warning" style={{ textDecoration: 'none' }}>
                                    <FontAwesomeIcon icon={faShoppingCart} /> <span>User Order List</span>
                                </Link>
                            </li>
                   
                            <li>
                                <Link to="/home" className="text-danger" style={{ textDecoration: 'none' }}>
                                    <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
                                </Link>
                            </li>

                        </div>
                }
            </ul>
            <div>
            </div>
        </div>
    );
};
export default SideBar;
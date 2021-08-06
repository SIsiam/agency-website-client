import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../../Admin/SideBar/SideBar';
import UserOrder from '../UserOrder/UserOrder';
import CircularProgress from '@material-ui/core/CircularProgress';
import './UserOrderList.css'

const ServiceList = () => {
    const { loggedInUser, newOrder } = useContext(UserContext);
    const [userEmail, setUserEmail] = useState([]);

    useEffect(() => {
        fetch(`https://agency-website-server.herokuapp.com/specificOrder?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUserEmail(data)
            })

    }, [])
    return (

        <div className="order-container">
            <div className="d-flex container-fluid p-3 my-order">
            <SideBar />
                <h4 className="text-center">Your Order List</h4>
                <h5 className="ml-auto">{loggedInUser.name}</h5>
            </div>
            <div>

                {
                    !userEmail.length ? <div className="text-center" >
                        <h3 className="text-warning" >Loading please wait.. <CircularProgress color="secondary" /> </h3>
                    </div>
                        :
                        <div className="userOrder-container container" style={{ width: '70vw', marginTop: '5%' }}>

                            {
                                userEmail.map(order => <UserOrder order={order} />)
                            }

                        </div>
                }


            </div>
        </div>
    );
};

export default ServiceList;
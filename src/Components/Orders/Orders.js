import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import SideBar from '../Admin/SideBar/SideBar';
import PaymentProcess from '../PaymentProcess/PaymentProcess'
import './Order.css'

const Order = () => {
    const { id } = useParams();
    document.title = "Photography Services - Orders";
    const { loggedInUser, newOrder, setNewOrder } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const history = useHistory();
    const [serviceData, setServiceData] = useState(null);


    const onSubmit = (data) => {
        setServiceData(data)
        console.log(data);

    }

    const paymentSuccess = (paymentId, billing_details) => {

        const formData = new FormData();
        const image = JSON.stringify(serviceData.image)
        formData.append('image', image);
        formData.append('status', 'pending');
        formData.append('service', newOrder.name);
        formData.append('details', newOrder.details);
        formData.append('serviceImg', newOrder.image.img);
        formData.append('email', loggedInUser.email);
        formData.append('name', loggedInUser.name);
        formData.append('serviceData', serviceData);
        formData.append('paymentId', paymentId);
        formData.append('billing_details', billing_details);




        fetch('http://localhost:5000/placeOrder', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result) {
                    alert('Your Order Has been send SuccesFully')
                    history.replace('/orderList')
                }
            })
            .catch(err => console.log(err))

    }


    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setNewOrder(data)
            })
    }, [])


    return (
        <div className="order-container">
            <div className="d-flex container-fluid p-3 order-container-sidebar">
                <SideBar />
                <h4 className="ml-auto text-light"> Welcome {loggedInUser.name}</h4>
            </div>

            <div className="container container-fluid" >
                <h2 style={{ marginLeft: "20vw" }} className="text-light">Order</h2>
                <div className="row ">

                    <div style={{ display: serviceData ? 'none' : 'block' }} className="col-md-6 m-5">

                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="form-group">
                                <input name="name" defaultValue={loggedInUser.name} className="form-control p-4" />
                            </div>

                            <div className="form-group">
                                <input name="email" defaultValue={loggedInUser.email} className="form-control p-4" /> <br />
                            </div>

                            <div className="form-group">
                                <input name="service" defaultValue={newOrder.name} className="form-control p-4" />
                            </div>

                            <div className="form-group">
                                <input name="details" defaultValue={newOrder.details} className="form-control p-4" />
                            </div>

                            <div className="form-group">
                                <input type="submit" value="Submit" className="btn btn-primary btn-lg btn-block" />
                            </div>

                        </form>
                    </div>
                </div>


                <div className="row">

                    <div style={{ display: serviceData ? 'block' : 'none' }} className="col-md-6 m-5 text-light">
                        <h4> {newOrder.name} Wil Be Charged {newOrder.price} Per Day   </h4>
                        <br />
                        <p> Don't Worry This Is Just Test Porpuse. Use 42424242424242 12/312/32132</p>
                        <br />
                        <PaymentProcess handlePayment={paymentSuccess} />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Order;
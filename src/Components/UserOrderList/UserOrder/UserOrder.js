import React from 'react';

const UserOrder = ({ order }) => {
    document.title = "Photography Services - Order List";
    console.log(order);
    const { serviceImg, service, description, status, details } = order;
    return (
        <div className="">
            <div className="mb-5">
                <img src={`data:image/png;base64,${serviceImg}`}  height="auto" class="card-img-top w-50" alt="" />
                <div>
                    <h4 class="card-title p-2">{service}</h4>
                    <p class="card-text">{description}</p>
                    <p class="card-text p-2">{details}</p>
                </div>
                <button className="btn btn-warning btn-lg text-light mt-3 ">{status}</button>
            </div>
        </div>
    );
};

export default UserOrder;
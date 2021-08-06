import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import SideBar from '../SideBar/SideBar';
import './Admin.css'



const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('https://agency-website-server.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('New Admin Added successfully')
                }
            })
    }

    return (
        <div className="admin-service">
            <div className="container-fluid">
                <div className="row">
                    <div className="d-flex container-fluid p-3 col-md-3">
                        <SideBar />
                    </div>
                    <div className="col-md-9">
                        <div className="d-flex justify-content-around">
                            <h2>Add Admin</h2>
                        </div>
                        <form className="container container-fluid" onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '5%' }} >
                            <div className="form-group">
                                <input className="form-control col-md-6 p-4 m-3" name="email" placeholder="New Admin Email" {...register("email", { required: true })} /><br />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input className="form-control col-md-6 p-4 m-3" name="password" placeholder="Admin Secret Password" {...register("password", { required: true })} /><br />
                                {errors.password && <span className="text-danger">This field is required</span>}
                            </div>
                            <button type="submit" className="btn btn-outline-info btn-lg text-light">Add Admin</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default MakeAdmin;
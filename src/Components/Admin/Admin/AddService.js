import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import SideBar from '../SideBar/SideBar';

const AddService = () => {
    document.title = "Photography Services - Add Service";
    const [file, setFile] = useState(null);
    const { loggedInUser } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();

    const onSubmit = (data) => {
        const formData = new FormData();
        const image = JSON.stringify(data.image)
        formData.append('file', file);
        formData.append('image', image);
        formData.append('name', data.name);
        formData.append('details', data.details);
        formData.append('number', data.number);
        fetch('http://localhost:5000/addServices', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {

                if (result) {
                    alert('Your Added Service Succesfully')
                    history.replace('/')
                }

            })
            .catch(err => console.log(err))


    }

    const fileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    return (
        <div className="admin-service">

            <div className="d-flex container-fluid p-3">
            <SideBar />
                <h4 style={{ marginLeft: "10vw" }}>Add Services</h4>
                <h5 className="ml-auto">Welcome {loggedInUser.name}</h5>
            </div>
            <main className="container container-fluid " style={{ marginLeft: '20vw', width:'70vw' }}>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-container">
                        <input name="name" placeholder='service title' {...register("name", { required: true })} className="form-control p-4" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <br />
                    <div className="form-group">
                        <input name="details" placeholder="Description" {...register("details", { required: true })} className="form-control p-4" /> <br />
                        {errors.details && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="number" name="number" placeholder="Price" {...register("number", { required: true })} className="form-control p-4" /> <br />
                        {errors.number && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="">
                        <label htmlFor="exampleInput">Upload a image</label>
                        <input name="image" type="file" onChange={fileChange} id="exampleInput" required className=" p-4" />
                    </div>
                    <div className="">
                        <button type="submit" className="btn btn-outline-info btn-lg text-light">Add Service</button>
                    </div>

                </form>
            </main>

        </div>
    );
};

export default AddService;
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';


const ManageService = () => {
    const history = useHistory()
    document.title = "Photography Services - Admin";
    const [allService, setAllService] = useState([]);
    const { loggedInUser } = useContext(UserContext);


    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllService(data)
            })
    }, [])


    const deleteService = (_id) => {
        console.log(_id);
        const URL = `http://localhost:5000/allServices/${_id}`
        console.log(URL);
        fetch(URL, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        alert('Service deleted successfully')
        history.push('/')
    }


    return (
        <div className="admin-service">
            <div className="d-flex container-fluid p-3">
                <SideBar />
                <h4 style={{ marginLeft: "10vw" }}>Manage Your Services</h4>
                <h5 className="ml-auto">Welcome Admin {loggedInUser.name}</h5>
            </div>
            <table className="table Admin-table " style={{ marginLeft: '20vw', width: '70vw' }}>
                <thead className="thead thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allService.length === 0 && <div style={{ width: '100%', padding: '200px 100px' }}>
                            <h3 className="text-warning" >Loading please wait.. <CircularProgress color="secondary" /> </h3>
                        </div>

                    }
                    {
                        allService.map(user => <tr className="bg-light" key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.price}</td>
                            <td>  <Button variant="outlined" color="secondary" onClick={() => deleteService(user._id)}> delete</Button> </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageService;
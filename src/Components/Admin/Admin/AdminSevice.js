import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import CircularProgress from '@material-ui/core/CircularProgress';


const options = [
    { value: 'Pending', label: 'Pending' },
    { value: 'On Going', label: 'On Going' },
    { value: 'Done', label: 'Done' }
]
const AdminSevice = () => {
    document.title = "Photography Services - Admin Page";
    const [all, setAll] = useState([]);
    const [admin, setAdmin] = useState({});
    const { id } = useParams();
    const [status, setStatus] = useState('status');

    const { loggedInUser, newOrder, setNewOrder, setLoggedInUser } = useContext(UserContext);


    useEffect(() => {
        fetch(`http://localhost:5000/admin?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {

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

    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`)
            .then(res => res.json())
            .then(data => setNewOrder(data))
    }, [])




    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                const normalStatus = data.map(statusData => ({ ...statusData, status: 'pending' }))
                setAll(normalStatus);
            })
    }, [])

    const updates = (status) => {
        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(status)
        })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/admin?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [])


    const change = (e, id) => {
        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: e.value })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Updated User Status')
                }
            })
    }
    const defaultOption = options[0];

    return (
        <div className="admin-service">

            <div className="d-flex container-fluid p-2">
                <SideBar />
                <h5 className="ml-auto">Welcome Admin {loggedInUser.name}</h5>
            </div>
            {loggedInUser.setUser ?
                <div>
                    <table className="table" style={{ marginLeft: '20vw', width: '70vw', }}>

                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Service</th>
                                <th scope="col">Pay With</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                all.length === 0 && <div style={{ width: '100%', padding: '200px 100px' }}>
                                    <h3 className="text-warning" >Loading please wait.. <CircularProgress color="secondary" /> </h3>
                                </div>

                            }
                            {
                                all.map(client =>

                                    <tr className="bg-light" key={client._id}>
                                        <td>{client.name}</td>
                                        <td>{client.email}</td>
                                        <td>{client.service}</td>
                                        <td>Creadit Card</td>
                                        <td >
                                            <Dropdown options={options} onChange={(e) => { change(e, `${client._id}`) }} value={defaultOption} placeholder="Select an option" />
                                        </td>
                                    </tr>)

                            }

                        </tbody>

                    </table>
                </div>

                :

                <main className="container container-fluid text-center p-3">
                    <div className="text-center p-5 m-5">
                        <h2> Opps! Sorry This Page Only Admin Purpose</h2>
                        <br />
                        <Link to="/" className="nav-link mr-5 font-weight-bold">
                            <h4 className="text-warning"> Logout Please</h4>
                        </Link>
                    </div>
                </main>
            }

        </div>
    );
};

export default AdminSevice;
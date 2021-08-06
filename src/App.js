import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders';
import UserOrderList from './Components/UserOrderList/UserOrderList/UserOrderList';
import PrivateRoute from './Components/Login/PrivateRoute';
// import Review from './Components/AddReview/AddReview';
import AdminSevice from './Components/Admin/Admin/AdminSevice';
import MakeAdmin from './Components/Admin/Admin/MakeAdmin';
import AdminAddService from './Components/Admin/Admin/AddService';
import ManageService from './Components/Admin/Admin/ManageService';
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NotFound/NotFound';


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [loggedInAdmin, setloggedInAdmin] = useState({});
  const [newOrder, setNewOrder] = useState([]);

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, loggedInAdmin, setloggedInAdmin, newOrder, setNewOrder }} >
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/order/:id">
            <Orders />
          </PrivateRoute>

          <PrivateRoute path="/orderList">
            <UserOrderList />
          </PrivateRoute>
   
          <PrivateRoute path="/adminSevice">
            <AdminSevice />
          </PrivateRoute>

          <PrivateRoute path="/manageService">
            <ManageService />
          </PrivateRoute>

          <PrivateRoute path="/addAdmin">
            <MakeAdmin />
          </PrivateRoute>

          <PrivateRoute path="/addService">
            <AdminAddService />
          </PrivateRoute>

          <Route path="*">
              <NotFound/>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

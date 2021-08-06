// import React, { useContext } from 'react';
// import  firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebaseConfig';
// import { Link, useHistory, useLocation } from 'react-router-dom';
// import Glogo from '../../images/google.png';
// import { UserContext } from '../../App';
// import './Login.css'

// const Login = () => {
//     if (firebase.apps.length === 0) {
//         firebase.initializeApp(firebaseConfig);
//     }

//     let history = useHistory();
//     let location = useLocation();

//     let { from } = location.state || { from: { pathname: "/" } };




//     const { setLoggedInUser } = useContext(UserContext);
//     const auth = firebase.auth();
//     const googleProvider = new firebase.auth.GoogleAuthProvider()
//     const signInWithGoogle = () => {
//         auth.signInWithPopup(googleProvider)
//             .then((res) => {
//                 const { displayName, email, photoURL } = res.user;
//                 const signInUser = { name: displayName, email, img: photoURL }
//                 setLoggedInUser(signInUser)
//                 history.replace(from);
//             })
//             .catch((error) => {
//                 console.log(error.message)
//             })
//     }



//     return (
//         <div className="text-center login-form">

//             <div className="google-btn d-flex justify-content-center align-items-center">
//                 <button className="btn btn-social" onClick={signInWithGoogle}>
//                     <img className="social-logo" src={Glogo} alt="google" />
// 							Log In
// 						</button>
//             </div>
//         </div>
//     );
// };

// export default Login;

























import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import 'firebase/auth';
import { UserContext } from '../../App';
import './Login.css';
// import facebook from '../../Icon/fb.png';
import firebaseConfig from './firebaseConfig';
import logo from '../../images/google.png';
import { Link, useHistory, useLocation } from 'react-router-dom';



if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}





const Login = () => {
	const { loggedInUser, setLoggedInUser } = useContext(UserContext);

	let history = useHistory();
	let location = useLocation();

	let { from } = location.state || { from: { pathname: "/" } };

	const [user, setUser] = useState({
		email: '',
		password: ''
	});

	const handleEmailPass = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
		setLoggedInUser({
			...loggedInUser,
			[e.target.name]: e.target.value
		});
	};

	const formSubmit = (e) => {
		e.preventDefault();
		if (!user.email && !user.password) {
			document.getElementById('error').innerText = 'Sorry 😟 Try Again ';
			return;
		}
		firebase
			.auth()
			.signInWithEmailAndPassword(user.email, user.password)
			.then((result) => {
				setLoggedInUser({
					email: user.email,
					password: user.password
				});
				history.replace(from);
			})
			.catch((error) => {
				document.getElementById('error').innerText = error.message;
			});
	};








	const auth = firebase.auth();
	const googleProvider = new firebase.auth.GoogleAuthProvider()

	const signInWithGoogle = () => {
		auth.signInWithPopup(googleProvider)
			.then((res) => {
				const { displayName, email, photoURL } = res.user;
				const signInUser = { name: displayName, email, img: photoURL }
				setLoggedInUser(signInUser)
				history.replace(from);
			})
			.catch((error) => {
				console.log(error.message)
			})
	}











	// const googleSign = () => {
	// 	firebase
	// 		.auth()
	// 		.signInWithPopup(provider)
	// 		.then((result) => {
	// 			var user = result.user;
	// 			setUser({
	// 				email: user.email,
	// 				name: user.displayName
	// 			});
	// 			setLoggedInUser({
	// 				email: user.email,
	// 				name: user.displayName
	// 			});
	// 		})
	// 		.catch((error) => {
	// 			console.error(error.message);
	// 		});
	// };


	return (
		<div className="login">
			<div className="container">

				<div className="row justify-content-center align-items-center">
					<div className="mt-5 col-md-8">
						<form className="mt-4" onSubmit={formSubmit}>
							<div className="form-group col-md-8 p-3">
								<label htmlFor="email">Email address</label>
								<input
									type="email"
									className="form-control"
									name="email"
									value={user.email}
									onChange={handleEmailPass}
									placeholder="Username or Email"
									required
								/>
							</div>
							<div className="form-group col-md-8 p-3">
								<label htmlFor="password">Password</label>
								<input
									type="password"
									name="password"
									className="form-control"
									placeholder="password"
									value={user.password}
									onChange={handleEmailPass}
									required
								/>
							</div>
							<div className="col-md-8 text-center">
								<input className=" btn btn-social" type="submit" value="Admin Log In With Email" />
							</div>
						</form>
				

						<div className="text-center">
							<p className="errText" id="error" />
							<div className="col-md-8 text-center google-btn">
								<button className="btn btn-social" onClick={signInWithGoogle}>
									<img className="social-logo" src={logo} alt="google" />
									Continue With Google
								</button>
							</div>
						</div>
					</div>

				</div>
			</div>

		</div>

	);
};

export default Login;

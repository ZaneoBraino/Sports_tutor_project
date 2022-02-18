import React, { useState } from "react";
import "../css/style.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function CoachSignUp() {
	const [values, setValues] = useState({
		name: "",
		email: "",
		img: "",
		location: "",
		sports: "",
		twitter: "",
		password: "",
		password2: "",
		errors: {},
	});

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setValues((values) => ({ ...values, [name]: value }));
	};

	const buttonHandler = (evt) => {
		evt.preventDefault();
		console.log(values);
		axios.post("/api/coaches/register", values).then(SignUpSuccess);
	};

	const SignUpSuccess = (res) => {
		if (res.status === 200) {
			toast.success("Welcome to Coached Up !!!", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};
	return (
		<div className="register-screen">
			<ToastContainer></ToastContainer>
			<form className="register-screen_form">
				<h3 className="register-screen_title">Coach SignUp</h3>
				<div className="form-group">
					<label htmlFor="name">Full Name</label>
					<input
						type="text"
						required
						id="firstname"
						placeholder="Enter your first name"
						name={"name"}
						value={values.name}
						onChange={handleChange}
					></input>
				</div>
				<div className="form-group">
					<label htmlFor="name">Email</label>
					<input
						type="email"
						required
						id="email"
						placeholder="Enter Email"
						name={"email"}
						value={values.email}
						onChange={handleChange}
					></input>
				</div>
				<div className="form-group">
					<label htmlFor="name">Img</label>
					<input
						type="text"
						id="img"
						name={"img"}
						value={values.img}
						onChange={handleChange}
					></input>
				</div>
				<div className="form-group">
					<label htmlFor="name">Location</label>
					<input
						type="text"
						id="location"
						name={"location"}
						value={values.location}
						onChange={handleChange}
					></input>
				</div>
				<div className="form-group">
					<label htmlFor="name">Sports</label>
					<input
						type="text"
						id="sports"
						name={"sports"}
						value={values.sports}
						onChange={handleChange}
					></input>
				</div>

				<div className="form-group">
					<label htmlFor="name">Twitter</label>
					<input
						type="text"
						name={"twitter"}
						value={values.twitter}
						onChange={handleChange}
					></input>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						required
						id="password"
						placeholder="Enter Password"
						name={"password"}
						value={values.password}
						onChange={handleChange}
					></input>
				</div>
				<div className="form-group">
					<label htmlFor="passwrord2">Confirm Password</label>
					<input
						type="password"
						required
						id="confirm password"
						placeholder="Enter confirm password"
						name={"password2"}
						value={values.password2}
						onChange={handleChange}
					></input>
				</div>
				<button
					type="submit"
					className="btn btn-primary"
					onClick={buttonHandler}
				>
					Sign Up
				</button>
			</form>
		</div>
	);
}

export default CoachSignUp;

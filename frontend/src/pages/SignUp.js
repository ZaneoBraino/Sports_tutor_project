import React from "react";
import "./component/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function CoachSignUp() {
	return (
		<div className="register-screen">
			<form className="register-screen_form">
				<h3 className="register-screen_title">Coach SignUp</h3>

				<div className="form-group">
					<label htmlFor="name">First Name</label>
					<input
						type="text"
						required
						id="firstname"
						placeholder="Enter your first name"
					></input>
				</div>

				<div className="form-group">
					<label htmlFor="name">Last Name</label>
					<input
						type="text"
						required
						id="lastname"
						placeholder="Enter your lastname"
					></input>
				</div>

				<div className="form-group">
					<label htmlFor="name">User Name</label>
					<input
						type="text"
						required
						id="name"
						placeholder="Choose a username"
					></input>
				</div>

				<div className="form-group">
					<label htmlFor="name">Email</label>
					<input
						type="text"
						required
						id="email"
						placeholder="Enter Email"
					></input>
				</div>

				<div className="form-group">
					<label htmlFor="name">Password</label>
					<input
						type="text"
						required
						id="password"
						placeholder="Enter Password"
					></input>
				</div>

				<div className="form-group">
					<label htmlFor="name">Confirm Password</label>
					<input
						type="text"
						required
						id="confirm password"
						placeholder="Enter confirm password"
					></input>
				</div>

				<button type="submit" className="btn btn-primary">
					Sign Up
				</button>
			</form>
		</div>
	);

}

export default CoachSignUp;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loginBackground from "../../assets/soccer-field-photo.jpg";

const Login = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};

	const login = (e) => {
		e.preventDefault();
		console.log(user);
		axios.post("/api/users/login", user).then((res) => {
			//add a setTimeout
			navigate("/");
		});
	};
	return (
		<>
			<style
				dangerouslySetInnerHTML={{
					__html: ` #intro { background-image: url(${loginBackground});height: 100vh;     }      /* Height for devices larger than 576px */      @media (min-width: 992px) {       #intro {          margin-top: -58.59px;       }      }      .navbar .nav-link {        color: #fff !important;      }    `,
				}}
			/>
			{/* Background image */}
			<div id="intro" className="bg-image shadow-2-strong">
				<div
					className="mask d-flex align-items-center h-100"
					style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
				>
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-xl-5 col-md-8">
								<form className="bg-white rounded shadow-5-strong p-5">
									{/* Email input */}
									<div className="form-outline mb-4">
										<input
											type="email"
											name="email"
											id="sign-in-email"
											className="form-control"
											onChange={handleChange}
											value={user.email}
										/>
										<label
											className="form-label"
											htmlFor="form-email"
										>
											Email address
										</label>
									</div>
									{/* Password input */}
									<div className="form-outline mb-4">
										<input
											type="password"
											id="sign-in-password"
											name="password"
											value={user.password}
											onChange={handleChange}
											className="form-control"
										/>
										<label
											className="form-label"
											htmlFor="form-password"
										>
											Password
										</label>
									</div>
									{/* 2 column grid layout for inline styling */}
									<div className="row mb-4">
										<div className="col d-flex justify-content-center">
											{/* Checkbox */}
											<div className="form-check">
												<input
													className="form-check-input"
													type="checkbox"
													defaultValue=""
													id="form1Example3"
													defaultChecked=""
												/>
												<label
													className="form-check-label"
													htmlFor="form1Example3"
												>
													Remember me
												</label>
											</div>
										</div>
										<div className="col text-center">
											{/* Simple link */}
											<a href="#!">Forgot password?</a>
										</div>
									</div>
									{/* Submit button */}
									<button
										type="submit"
										className="btn btn-primary btn-block"
										onClick={login}
									>
										Sign in
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Login;

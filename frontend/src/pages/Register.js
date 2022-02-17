import { React, useState } from "react";
import axios from "axios";
import "./register.css";
import backgroundOne from "../assets/tennis-photo.jpg";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

//register function
function Register() {
	let navigate = useNavigate();
	const [newUser, setNewUser] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
		errors: {},
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewUser({
			...newUser,
			[name]: value,
		});
	};
	const onSubmit = (e) => {
		e.preventDefault();
		axios.post("/api/users/register", newUser).then(RegisterSuccess);
	};

	const RegisterSuccess = (res) => {
		if (res.status === 200) {
			toast.success("Welcome to CoachedUp!!!", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			setTimeout(navigate("/"), 5000);
		}
	};

	return (
		<>
			<ToastContainer />
			<section
				className="vh-100 bg-image"
				style={{
					backgroundImage: `url(${backgroundOne})`,
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="mask d-flex align-items-center h-100 gradient-custom-3">
					<div className="container ">
						<div className="row d-flex justify-content-center align-items-center h-100">
							<div className="col-12 col-md-9 col-lg-7 col-xl-6">
								<div
									className="card-register"
									style={{
										borderRadius: 15,
										marginBottom: "6rem",
									}}
								>
									<div className="card-body p-5">
										<h2 className="text-uppercase text-center mb-5">
											Create an account
										</h2>
										<form>
											<div className="form-outline mb-4">
												<input
													type="text"
													id="user-name"
													className="form-control form-control-lg"
													name="name"
													value={newUser.name}
													onChange={handleChange}
												/>
												<label
													className="form-label"
													htmlFor="name"
												>
													Your Name
												</label>
											</div>
											<div className="form-outline mb-4">
												<input
													type="email"
													id="user-email"
													className="form-control form-control-lg"
													name="email"
													value={newUser.email}
													onChange={handleChange}
												/>
												<label
													className="form-label"
													htmlFor="email"
												>
													Your Email
												</label>
											</div>
											<div className="form-outline mb-4">
												<input
													type="password"
													id="user-password"
													className="form-control form-control-lg"
													name="password"
													value={newUser.password}
													onChange={handleChange}
												/>
												<label
													className="form-label"
													htmlFor="password"
												>
													Password
												</label>
											</div>
											<div className="form-outline mb-4">
												<input
													type="password"
													id="user-password2"
													className="form-control form-control-lg"
													name="password2"
													value={newUser.password2}
													onChange={handleChange}
												/>
												<label
													className="form-label"
													htmlFor="password2"
												>
													Repeat your password
												</label>
											</div>
											<div className="form-check d-flex justify-content-center mb-5">
												<input
													className="form-check-input me-2"
													type="checkbox"
													defaultValue=""
													id="form2Example3cg"
												/>
												<label
													className="form-check-label"
													htmlFor="form2Example3g"
												>
													I agree all statements in{" "}
													<a
														href="#!"
														className="text-body"
													>
														<u>Terms of service</u>
													</a>
												</label>
											</div>
											<div className="d-flex justify-content-center">
												<button
													type="button"
													className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
													onChange={handleChange}
													onClick={onSubmit}
												>
													Register
												</button>
											</div>
											<p className="text-center text-muted mt-5 mb-0">
												Have already an account?{" "}
												<a
													href="#!"
													className="fw-bold text-body"
												>
													<Link to="/login">
														<u>Login here</u>
													</Link>
												</a>
											</p>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
export default Register;

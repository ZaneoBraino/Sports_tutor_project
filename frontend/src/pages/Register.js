import React, { useState } from "react";
import axios from "axios";
import "./register.css";
import backgroundOne from "../assets/tennis-photo.jpg";

//register function
function Register() {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user, //spread operator
			[name]: value,
		});
	};
	const { name, email, password } = user;
	if (name && email && password) {
		axios
			.post("http://localhost:300/Register", user)
			.then((res) => console.log(res));
	} else {
		// alert("invalid input");
	}
	return (
		<>
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
									className="card"
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
													id="form3Example1cg"
													className="form-control form-control-lg"
												/>
												<label
													className="form-label"
													htmlFor="form3Example1cg"
												>
													Your Name
												</label>
											</div>
											<div className="form-outline mb-4">
												<input
													type="email"
													id="form3Example3cg"
													className="form-control form-control-lg"
												/>
												<label
													className="form-label"
													htmlFor="form3Example3cg"
												>
													Your Email
												</label>
											</div>
											<div className="form-outline mb-4">
												<input
													type="password"
													id="form3Example4cg"
													className="form-control form-control-lg"
												/>
												<label
													className="form-label"
													htmlFor="form3Example4cg"
												>
													Password
												</label>
											</div>
											<div className="form-outline mb-4">
												<input
													type="password"
													id="form3Example4cdg"
													className="form-control form-control-lg"
												/>
												<label
													className="form-label"
													htmlFor="form3Example4cdg"
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
													<u>Login here</u>
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

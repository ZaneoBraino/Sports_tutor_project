import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<nav class="navbar navbar-dark bg-dark">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
					Menu
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div class="navbar-nav">
						<Link to="/">
							<a
								class="nav-link active"
								aria-current="page"
								href="#"
							>
								Home
							</a>
						</Link>
						<Link to="/">
							<a class="nav-link" href="#">
								Training Tips
							</a>
						</Link>
						<Link to="/coaches">
							<a class="nav-link" href="#">
								Coaches
							</a>
						</Link>
						<Link to="/">
							<a class="nav-link" href="#">
								Pricing
							</a>
						</Link>
						<Link to="/about">
							<a class="nav-link">About Us</a>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Header;

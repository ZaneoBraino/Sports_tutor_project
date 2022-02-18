import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Coaches() {
	let [coaches, setCoaches] = useState([]);
	let [data, setData] = useState([]);

	useEffect(
		function getCoaches() {
			axios({
				method: "get",
				url: "/api/coaches/getCoaches",
			})
				.then((response) => {
					console.log(response);
					setData(response.data);
				})
				.catch((response) => console.log(response));
		},
		[coaches]
	);

	console.log(data);

	const mappedCard = data.map(cardMapper);
	function cardMapper(aCoach) {
		let results = (
			<div className="col row-col-xl-4">
				<div className="card">
					<div className="card h-100">
						<img src={aCoach.img} className="card-img-top" alt="" />
						<div className="card-body">
							<h5 className="card-title">Coach {aCoach.name}</h5>
							<p className="card-text">
								{aCoach.location}
								<br></br>
								{aCoach.sports}
							</p>
							<div>
								<a
									class="btn btn-outline-light btn-floating m-1"
									href={aCoach.twitter}
									role="button"
								>
									<i class="fa fa-twitter"></i>
								</a>
								<a
									class="btn btn-outline-light btn-floating m-1"
									href={aCoach.instagram}
									role="button"
								>
									<i class="fa fa-instagram"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
		return results;
	}

	return (
		<div class="container-fluid justify-center">
			<h1>Our Amazing Coaches</h1>
			<div class="row">{mappedCard}</div>
			<div className="col">
				<h2 className="mb-10">Want to delete your card?</h2>
				<Link to="/deletion">Go</Link>
			</div>
		</div>
	);
}

export default Coaches;

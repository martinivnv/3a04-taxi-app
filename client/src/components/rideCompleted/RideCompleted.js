import { useEffect, useState } from "react";
import PageTemplate from "../pageTemplate/PageTemplate";
import { Link, useLocation } from "react-router-dom";

const RideCompleted = () => {
	const [fare, setFare] = useState("");
	const [points, setPoints] = useState("");
	const location = useLocation();
	const { destination, otherRider } = location.state;

	const handleSubmit = (e) => {
		e.preventDefault();
		window.alert(`Thank you for rating ${otherRider}!`);
	};

	useEffect(() => {
		setFare("$13.30");
		setPoints("12");
	}, []);

	return (
		<PageTemplate>
			<div>
				<div
					style={{
						borderStyle: "solid",
						borderWidth: "medium",
						borderColor: "#FF7518",
						padding: "0 2em 2em 2em",
						width: "290px",
						marginTop: "5vh",
					}}
					className="rounded-corners"
				>
					<h1>You have arrived at {destination}!</h1>
					<p style={{ fontSize: "1.2em" }}>
						Thank you for riding with{" "}
						<span style={{ fontWeight: "bold" }}>Qurb</span>! We hope you had a
						great experience!
					</p>
					<div style={{ lineHeight: 0.5 }}>
						<h2>Calculated Price</h2>
						<p
							style={{
								color: "limegreen",
								fontWeight: "bold",
								fontSize: "1.5em",
							}}
						>
							{fare}
						</p>
					</div>
					<div style={{ lineHeight: 0.5 }}>
						<h2>Points Earned: </h2>
						<p
							style={{
								color: "limegreen",
								fontWeight: "bold",
								fontSize: "1.5em",
							}}
						>
							{points}
						</p>
					</div>

					<h2>Rate your fellow rider(s):</h2>
					<form
						onSubmit={handleSubmit}
						style={{ display: "flex", flexDirection: "column", gap: "0.5em" }}
					>
						<label for="rider1">Rate {otherRider}:</label>
						<select id="rider1" name="rider1">
							<option value="5">5 stars</option>
							<option value="4">4 stars</option>
							<option value="3">3 stars</option>
							<option value="2">2 stars</option>
							<option value="1">1 star</option>
						</select>

						<button type="submit">Submit</button>
					</form>
				</div>
				<Link
					to="/main"
					className="looksLikeButton"
					style={{ width: "60%", marginTop: "2em" }}
				>
					Return to Map
				</Link>
			</div>
		</PageTemplate>
	);
};

export default RideCompleted;

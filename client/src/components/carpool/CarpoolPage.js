import { useEffect, useState } from "react";
import PageTemplate from "../pageTemplate/PageTemplate";
import OfferCarpool from "./OfferCarpool";
import AvailableCarpool from "./AvailableCarpool";
import { Link, useLocation, useNavigate } from "react-router-dom";
import taxiGif from "../../images/taxi_gif.gif";

const CarpoolPage = () => {
	const [offers, setOffers] = useState([]);
	const location = useLocation();
	const { destination } = location.state;
	const [currentlyOffering, setCurrentlyOffering] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		setOffers([
			{ user: "dennis", minutesAway: 4 },
			{ user: "housam", minutesAway: 7 },
		]);
	}, []);

	const onOfferCarpool = () => {
		setCurrentlyOffering(true);
	};

	const onOfferAccepted = (otherRider) => {
		navigate("/rideComplete", {
			state: { destination: destination, otherRider: otherRider },
		});
	};

	return (
		<PageTemplate>
			{currentlyOffering ? (
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						margin: "10vh 2em",
						padding: "0 1em 1em 1em",
						borderRadius: "0.5em",
						backgroundColor: "#8c8c8c5e",
					}}
				>
					<h2>Your offer has been posted!</h2>
					<img src={taxiGif} alt="taxiGif" style={{ width: "340px" }} />
					<p>Waiting for someone to accept...</p>
					<button onClick={() => setCurrentlyOffering(false)}>
						❌ Cancel Offer
					</button>
				</div>
			) : (
				<div style={{ display: "flex", flexDirection: "column" }}>
					<h2>🚕 Carpools 🚕</h2>
					<OfferCarpool
						destination={destination}
						onOfferCarpool={onOfferCarpool}
					/>
					<div>
						<h3>Available Carpools</h3>
						{offers.length > 0 ? (
							offers.map((o) => (
								<AvailableCarpool
									user={o.user}
									minutesAway={o.minutesAway}
									onOfferAccepted={onOfferAccepted}
								/>
							))
						) : (
							<p style={{ margin: "0 2em" }}>
								No carpool offers to{" "}
								<span style={{ fontWeight: "bold" }}>{destination}</span>{" "}
								available at this time...
							</p>
						)}
					</div>
					<div>
						<Link
							to="/main"
							className="looksLikeButton"
							style={{ width: "60%", marginBottom: "2em" }}
						>
							Return to Map
						</Link>
					</div>
				</div>
			)}
		</PageTemplate>
	);
};

export default CarpoolPage;

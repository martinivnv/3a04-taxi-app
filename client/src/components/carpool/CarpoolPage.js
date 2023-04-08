import { useEffect, useState } from "react";
import PageTemplate from "../pageTemplate/PageTemplate";
import OfferCarpool from "./OfferCarpool";
import AvailableCarpool from "./AvailableCarpool";
import { useLocation } from "react-router-dom";

const CarpoolPage = () => {
	const [offers, setOffers] = useState([]);
	// const [destination, setDestination] = useState("");
	const location = useLocation();
	const { destination } = location.state;

	useEffect(() => {
		setOffers([
			{ user: "dennis", minutesAway: 4 },
			{ user: "housam", minutesAway: 7 },
		]);
		// setDestination()
	}, []);

	return (
		<PageTemplate>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<h2>🚕 Carpools 🚕</h2>
				<OfferCarpool destination={destination} />
				<div>
					<h3>Available Carpools</h3>
					{offers.length > 0 ? (
						offers.map((o) => (
							<AvailableCarpool user={o.user} minutesAway={o.minutesAway} />
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
					<button style={{ width: "60%", marginBottom: "2em" }}>
						Return to Map
					</button>
				</div>
			</div>
		</PageTemplate>
	);
};

export default CarpoolPage;

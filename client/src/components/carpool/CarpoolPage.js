import { useEffect, useState } from "react";
import PageTemplate from "../pageTemplate/PageTemplate";
import OfferCarpool from "./OfferCarpool";
import AvailableCarpool from "./AvailableCarpool";

const CarpoolPage = ({ destination }) => {
	const [offers, setOffers] = useState([]);

	useEffect(() => {
		setOffers([
			{ user: "dennis", minutesAway: 4 },
			{ user: "housam", minutesAway: 7 },
		]);
	}, []);

	return (
		<PageTemplate>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<h2>🚕 Carpools 🚕</h2>
				<OfferCarpool destination={destination} />
				<div>
					<h3>Available Carpools</h3>
					{offers ? (
						offers.map((o) => (
							<AvailableCarpool user={o.user} minutesAway={o.minutesAway} />
						))
					) : (
						<p>No carpool offers available to {destination} at this time</p>
					)}
				</div>
			</div>
		</PageTemplate>
	);
};

export default CarpoolPage;

const OfferCarpool = ({ destination, onOfferCarpool }) => {
	return (
		<div
			style={{
				margin: "1em",
				padding: "0 1em 1em 1em",
				borderRadius: "0.5em",
				backgroundColor: "#8c8c8c5e",
			}}
		>
			<p>
				Offer a carpool to{" "}
				<span style={{ fontWeight: "bold" }}>{destination}</span>?
			</p>
			<button onClick={onOfferCarpool}>🚖 Offer Carpool</button>
		</div>
	);
};

export default OfferCarpool;

import { useState } from "react";

const AvailableCarpool = ({ user, minutesAway, onOfferAccepted }) => {
	const onAccept = () => {
		window.alert(
			`You have accepted ${user}'s carpool offer. They will pick you up in ${minutesAway} minutes.`
		);
		onOfferAccepted(user);
	};

	const [display, setDisplay] = useState(true);

	return (
		display && (
			<div
				style={{
					margin: "1em",
					padding: "0.5em 1em 1em 1em",
					borderRadius: "0.5em",
					backgroundColor: "#8c8c8c5e",
				}}
			>
				<div>
					<p>
						{user} is{" "}
						<span style={{ fontWeight: "bold" }}>{minutesAway} minutes</span>{" "}
						away
					</p>
					<div>
						<button onClick={onAccept}>✅ Accept</button>
						<button
							style={{ marginLeft: "0.4em" }}
							onClick={() => setDisplay(false)}
						>
							❌ Reject
						</button>
					</div>
				</div>
			</div>
		)
	);
};

export default AvailableCarpool;

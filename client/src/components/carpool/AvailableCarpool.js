const AvailableCarpool = ({ destination, user, minutesAway }) => {
	return (
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
					<span style={{ fontWeight: "bold" }}>{minutesAway} minutes</span> away
				</p>
				<div>
					<button>✅ Accept</button>
					<button style={{ marginLeft: "0.4em" }}>❌ Reject</button>
				</div>
			</div>
		</div>
	);
};

export default AvailableCarpool;

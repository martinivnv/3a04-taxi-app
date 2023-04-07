import Map from "./Map";
import PageTemplate from "../pageTemplate/PageTemplate";
import { useState } from "react";

const MainPage = () => {
	const [destination, setDestination] = useState("");

	const handleDestinationChange = (e) => {
		setDestination(e.target.value);
	};

	const handleSearchClicked = (e) => {
		console.log(destination);
	};

	return (
		<PageTemplate>
			<div style={{ width: "100%", height: "100%" }}>
				<div
					style={{
						display: "flex",
						position: "absolute",
						top: 90,
						left: 0,
						width: "100%",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<input
						name="search"
						type="text"
						value={destination}
						onChange={handleDestinationChange}
						placeholder="Enter your destination..."
						style={{
							fontSize: "1em",
							width: "70%",
							zIndex: 10,
							borderRadius: "1em",
							padding: "1em",
						}}
					/>
					<button
						style={{ borderRadius: "1em", marginLeft: "0.5em" }}
						onClick={handleSearchClicked}
					>
						Search
					</button>
				</div>

				<Map />
			</div>
		</PageTemplate>
	);
};

export default MainPage;

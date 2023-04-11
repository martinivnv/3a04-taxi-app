import Map from "./Map";
import PageTemplate from "../pageTemplate/PageTemplate";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
	const [destination, setDestination] = useState("");

	const handleDestinationChange = (e) => {
		setDestination(e.target.value);
	};

	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

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
							width: "65%",
							zIndex: 10,
							borderRadius: "1em",
							padding: "1em",
						}}
					/>
					<Link
						to="/carpools"
						state={{ destination: destination }}
						style={{ borderRadius: "1em", marginLeft: "0.5em" }}
						className="looksLikeButton"
					>
						Search
					</Link>
				</div>

				<Map />

				<Link
					to="/share"
					className="looksLikeButton"
					style={{
						position: "absolute",
						bottom: "20px",
						right: "20px",
						fontSize: "1.2em",
						color: "white",
						backgroundColor: "#ff7518",
						boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
					}}
				>
					🎯 Share Location
				</Link>
			</div>
		</PageTemplate>
	);
};

export default MainPage;

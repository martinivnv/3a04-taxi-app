import { useState } from "react";
import PageTemplate from "../pageTemplate/PageTemplate";
import { Link, useNavigate } from "react-router-dom";

const ShareLocation = () => {
	const [ContactName, setContactName] = useState("");
	const [ContactPhone, setContactPhone] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		window.alert(`Location Shared to ` + ContactName);
		setContactName("");
		setContactPhone("");
		navigate("/share");
	};

	const handleContactName = (e) => {
		setContactName(e.target.value);
	};
	const handleContactPhone = (e) => {
		setContactPhone(e.target.value);
	};

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
						margin: "1em 0",
					}}
					className="rounded-corners"
				>
					<body>
						<h1>Share Location</h1>
						<h4 align="left">Enter Contact</h4>
						<form
							onSubmit={handleSubmit}
							style={{ display: "flex", flexDirection: "column", gap: "1.1em" }}
						>
							<input
								type="Info"
								placeholder="Contact Name"
								name="Contact Name"
								value={ContactName}
								onChange={handleContactName}
								required="required"
							/>

							<input
								type="Info"
								placeholder="Contact Phone"
								value={ContactPhone}
								onChange={handleContactPhone}
								name="Contact Phone"
								required="required"
							/>
							<button type="submit" style={{ fontSize: "1em" }}>
								Share Location{" "}
							</button>
						</form>
					</body>
				</div>
				<Link
					to="/main"
					className="looksLikeButton"
					style={{ width: "60%", marginBottom: "2em" }}
				>
					Return to Map
				</Link>
			</div>
		</PageTemplate>
	);
};

export default ShareLocation;

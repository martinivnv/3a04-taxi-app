import logo from "../../images/Qurb logo.png";

const NavBar = () => {
	return (
		<div
			style={{
				width: "100vw",
				position: "sticky",
				top: "0px",
				display: "flex",
				flexDirection: "row",
				backgroundColor: "#FF7518",
				boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					paddingLeft: "1em",
					alignItems: "center",
				}}
			>
				<img
					src={logo}
					alt="QurbLogo"
					style={{ height: "59px", width: "50px", marginRight: "0.2em" }}
				/>
				<h1>Qurb</h1>
			</div>
		</div>
	);
};

export default NavBar;

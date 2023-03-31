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
				style={{ display: "flex", flexDirection: "row", paddingLeft: "2em" }}
			>
				<h1 style={{ color: "white", marginRight: "0.5em" }}>Logo</h1>
				<h1>Qurb</h1>
			</div>
		</div>
	);
};

export default NavBar;

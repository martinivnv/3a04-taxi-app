import { Link } from "react-router-dom";
import logo from "../../images/Qurb logo.png";

const NavBar = ({ showSettings }) => {
	if (showSettings){
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
					justifyContent: "space-between",
					alignItems: "center",
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
				<div>
					<Link
						to="/share"
						style={{
							textDecoration: "none",
							fontSize: "3em",
							color: "white",
							marginRight: "2em",
						}}
					>
						🎯
					</Link>
            	</div>

				<div>
					<Link
						to="/settings"
						style={{
							textDecoration: "none",
							fontSize: "3em",
							color: "white",
							marginRight: "0.5em",
						}}
					>
						⚙
					</Link>
				</div>
				
			</div>
		);
	} else {
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
					justifyContent: "space-between",
					alignItems: "center",
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
	}
	
};

export default NavBar;

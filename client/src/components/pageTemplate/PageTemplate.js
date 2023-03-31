import NavBar from "../navbar/NavBar";

const PageTemplate = ({ children }) => {
	return (
		<div>
			<NavBar />
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: "20vh",
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default PageTemplate;

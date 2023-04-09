import NavBar from "../navbar/NavBar";

const PageTemplate = ({ children, showSettings=true }) => {
	return (
		<div>
			<NavBar showSettings={showSettings}/>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default PageTemplate;

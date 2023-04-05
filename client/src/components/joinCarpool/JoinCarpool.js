import{ useState } from "react";
import PageTemplate from "../pageTemplate/PageTemplate";

const JoinCarpool = () => {
	const [DestAddress, setdestinationaddresss] = useState("");
	const [StartAddress , setstartAddress] = useState("");
  


	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleDestAddressChange = (e) => {
		setdestinationaddresss(e.target.value);
	};

	const handleStartAdressChange = (e) => {
		setstartAddress(e.target.value);
	};


    return (
		<PageTemplate>
			<div
				style={{
					borderStyle: "solid",
					borderWidth: "medium",
					borderColor: "#FF7518",
					padding: "0 2em 2em 2em",
					width: "290px",
				}}
			>
				<h2>Join a Carpool</h2>
				<form
					onSubmit={handleSubmit}
					style={{ display: "flex", flexDirection: "column", gap: "1.5em" }}
				>

					<input
						name="Start Address"
						type="text"
						value={StartAddress}
						onChange={handleStartAdressChange}
						placeholder="Starting Address.."
						style={{ fontSize: "1em" }}
					/>

					<input
						name="Destination Address"
						type="text"
						value={DestAddress}
						onChange={handleDestAddressChange}
						placeholder="Enter your Destination Address..."
						style={{ fontSize: "1em" }}
					/>
					


					<button type="submit" style={{ fontSize: "1em" }}>
						Join a Carpool
					</button>
				</form>
			</div>
		</PageTemplate>
	);
};

export default JoinCarpool;

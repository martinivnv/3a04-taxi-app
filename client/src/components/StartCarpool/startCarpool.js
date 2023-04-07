import{ useState } from "react";
import PageTemplate from "../pageTemplate/PageTemplate";

const StartCarpool = () => {
	const [DestAddress, setdestinationaddresss] = useState("");
	const [StartAddress , setstartAddress] = useState("");
    const [TaxiCode , setTaxiCode] = useState("");
    const [seats , setSeats] = useState("");



	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleDestAddressChange = (e) => {
		setdestinationaddresss(e.target.value);
	};

	const handleStartAdressChange = (e) => {
		setstartAddress(e.target.value);
	};

    const handlesTaxiCodeChange =(e)=>{
        setTaxiCode(e.target.value)
    }

    const handleseatsChange =(e)=>{
        setSeats(e.target.value)
    }

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
				<h2>Start a Carpool</h2>
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
					

                        <input
						name="Taxi Code"
						type="text"
						value={TaxiCode}
						onChange={handlesTaxiCodeChange}
						placeholder="Taxi Code .."
						style={{ fontSize: "1em" }}
					/>

                        <input
						name="Seats Avaliable "
						type="text"
						value={seats}
						onChange={handleseatsChange}
						placeholder="Seats Avaliable.."
						style={{ fontSize: "1em" }}
					/>

					<button type="submit" style={{ fontSize: "1em" }}>
						Start Carpool
					</button>
				</form>
			</div>
		</PageTemplate>
	);
};

export default StartCarpool;

import { useState } from "react";
import PageTemplate from "../pageTemplate/PageTemplate";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePassChange = (e) => {
		setPassword(e.target.value);
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
				<h2>Login</h2>
				<form
					onSubmit={handleSubmit}
					style={{ display: "flex", flexDirection: "column", gap: "1.5em" }}
				>
					<input
						name="emailOrUsername"
						type="text"
						value={email}
						onChange={handleEmailChange}
						placeholder="Enter your email..."
						style={{ fontSize: "1em" }}
					/>
					<input
						name="password"
						type="password"
						value={password}
						onChange={handlePassChange}
						placeholder="Enter your password..."
						style={{ fontSize: "1em" }}
					/>
					<button type="submit" style={{ fontSize: "1em" }}>
						Log in
					</button>
				</form>
			</div>
		</PageTemplate>
	);
};

export default Login;

import { useState } from "react";
import PageTemplate from "../pageTemplate/PageTemplate";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		window.alert(`Welcome back, ${email}!`);
		navigate("/main");
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePassChange = (e) => {
		setPassword(e.target.value);
	};

	return (
		<PageTemplate>
			<div style={{ marginTop: "20vh" }}>
				<div
					style={{
						borderStyle: "solid",
						borderWidth: "medium",
						borderColor: "#FF7518",
						padding: "0 2em 2em 2em",
						width: "290px",
					}}
					className="rounded-corners"
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
					<p style={{ marginBottom: "0.2em" }}>Don't have an account?</p>
					<Link to="/">Register</Link>
				</div>
			</div>
		</PageTemplate>
	);
};

export default Login;

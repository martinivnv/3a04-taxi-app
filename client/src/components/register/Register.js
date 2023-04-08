import { useState } from "react";
import PageTemplate from "../pageTemplate/PageTemplate";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		window.alert(`Thank you for registering, ${email}!`);
		navigate("/main");
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePassChange = (e) => {
		setPassword(e.target.value);
	};

	const handleConfirmPassChange = (e) => {
		setConfirmPassword(e.target.value);
	};

	return (
		<PageTemplate>
			<div style={{ marginTop: "5vh" }}>
				<h1>Welcome to Qurb!</h1>
				<h4>The easiest way to share a taxi.</h4>
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
					<h2>Register</h2>
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
						<input
							name="password"
							type="password"
							value={confirmPassword}
							onChange={handleConfirmPassChange}
							placeholder="Confirm password..."
							style={{ fontSize: "1em" }}
						/>
						<button type="submit" style={{ fontSize: "1em" }}>
							Register
						</button>
					</form>
					<p style={{ marginBottom: "0.2em" }}>Already have an account?</p>
					<Link to="/login">Login</Link>
				</div>
			</div>
		</PageTemplate>
	);
};

export default Register;

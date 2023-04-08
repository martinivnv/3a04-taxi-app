import { useState } from "react";
import PageTemplate from "../pageTemplate/PageTemplate";

const AccountSettings = () => {
	const [oldPass, setOldPass] = useState("");
	const [newPass1, setNewPass1] = useState("");
	const [newPass2, setNewPass2] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleCurrPassChange = (e) => {
		setOldPass(e.target.value);
	};
	const handleNewPassChange = (e) => {
		setNewPass1(e.target.value);
	};
	const handleNewPass2Change = (e) => {
		setNewPass2(e.target.value);
	};

	function confirmDelete() {
		if (window.confirm("Are you sure you want to delete your account?")) {
			window.alert("Account successfully deleted.");
		} else {
			window.alert("Deletion cancelled.");
		}
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
					margin: "1em 0",
				}}
				className="rounded-corners"
			>
				<head>
					<title>Settings</title>
				</head>
				<body>
					<h1>Settings</h1>
					<h4 align="left">Change Password</h4>
					<form
						onSubmit={handleSubmit}
						style={{ display: "flex", flexDirection: "column", gap: "1.1em" }}
					>
						<input
							type="Password"
							placeholder="Current Password"
							name="Password"
							value={oldPass}
							onChange={handleCurrPassChange}
							required="required"
						/>

						<input
							type="Password"
							placeholder="New Password"
							value={newPass1}
							onChange={handleNewPassChange}
							name="newPassword"
							required="required"
						/>

						<input
							type="Password"
							placeholder="Confirm new Password"
							value={newPass2}
							onChange={handleNewPass2Change}
							name="confirmnnewPassword"
							required="required"
						/>

						<button type="submit" style={{ fontSize: "1em" }}>
							Change Password{" "}
						</button>
					</form>

					<h4 align="left">Carpool Preferences</h4>
					<form
						onSubmit={handleSubmit}
						style={{ display: "flex", flexDirection: "column", gap: "1em" }}
					>
						<label align="left"> Maximum Time Increase to Trip :</label>
						<select name="time">
							<option value="5 minutes">5 min</option>
							<option value="10 minutes">10 min</option>
							<option value="20 minutes">20 min</option>
							<option value="30 minutes">30 min</option>
						</select>
						<label align="left"> Rider Gender Preferences:</label>
						<select name="gender">
							<option value="Female">Female</option>
							<option value="Male">Male</option>
							<option value="No Preferences">No Preferences</option>
						</select>

						<button type="submit" style={{ fontSize: "1em" }}>
							Save Changes
						</button>
					</form>
					<h4 align="left">Delete Account</h4>
					<label>
						Warning: Deleting your account will permanently delete your account
						and cannot be undone. Are you sure you want to proceed?
					</label>
					<p>
						<button
							type="submit"
							onClick={confirmDelete}
							style={{ fontSize: "1em" }}
						>
							Delete Account
						</button>
					</p>
				</body>
			</div>
		</PageTemplate>
	);
};

export default AccountSettings;

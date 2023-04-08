import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import MainPage from "./components/main/MainPage";
import CarpoolPage from "./components/carpool/CarpoolPage";
import AccountSettings from "./components/accountSettings/AccountSettings";
import RideCompleted from "./components/rideCompleted/RideCompleted";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Register />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/main" element={<MainPage />}></Route>
					<Route path="/carpools" element={<CarpoolPage />}></Route>
					<Route path="/rideComplete" element={<RideCompleted />}></Route>
					<Route path="/settings" element={<AccountSettings />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

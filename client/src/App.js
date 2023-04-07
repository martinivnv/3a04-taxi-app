import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import MainPage from "./components/main/MainPage";
import CarpoolPage from "./components/carpool/CarpoolPage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<CarpoolPage destination="Doughbox Pizza, Main Street, Hamilton" />
			</BrowserRouter>
		</div>
	);
}

export default App;

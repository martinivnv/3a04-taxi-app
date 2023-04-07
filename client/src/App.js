import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import MainPage from "./components/main/MainPage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<MainPage />
			</BrowserRouter>
		</div>
	);
}

export default App;

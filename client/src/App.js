import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Register />
			</BrowserRouter>
		</div>
	);
}

export default App;

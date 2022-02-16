import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Routes>
					<Route path={"/"} element={<Home />}></Route>
					<Route path={"/Register"} element={<Register />}></Route>
					<Route path={"/Login"} element={<Login />}></Route>
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;

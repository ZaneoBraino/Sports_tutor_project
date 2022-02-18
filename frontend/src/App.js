import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/navigation/Header";
import Footer from "./pages/navigation/Footer";
import Register from "./pages/userPages/Register";
import Login from "./pages/userPages/Login";
import CoachSignUp from "./pages/coachPages/SignUp";
import About from "./pages/About";
import Coaches from "./pages/coachPages/Coaches";
import Landing_page from "./pages/LandingPage";
import Deletion from "./pages/coachPages/Deletion";
import Linked from "./pages/coachPages/Linked";

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Routes>
					<Route path={"/"} element={<Landing_page />}></Route>
					<Route path={"/signup"} element={<CoachSignUp />}></Route>
					<Route path={"/about"} element={<About />}></Route>
					<Route path={"/coaches"} element={<Coaches />}></Route>
					<Route path={"/linked"} element={<Linked />}></Route>
					<Route path={"/register"} element={<Register />}></Route>
					<Route path={"/login"} element={<Login />}></Route>
					<Route path={"/deletion"} element={<Deletion />}></Route>
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;

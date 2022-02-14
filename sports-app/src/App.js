import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path={"/"} element={<Home />}></Route>
					{/* <Route path={"/signin"} element={<SignInSide />}></Route> */}
				</Routes>
			</Router>
		</div>
	);
}

export default App;

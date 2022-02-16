import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CoachSignUp from "./pages/SignUp";
import About from "./pages/About";
import Coaches from "./pages/Coaches";
import Landing_page from "./pages/Landing_page";

function App() {
 return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path={"/"} element={<Landing_page />}></Route>
          <Route path={"/SignUp"} element={<CoachSignUp />}></Route>
          <Route path={"/about"} element={<About />}></Route>
          <Route path={"/coaches"} element={<Coaches />}></Route>          
					<Route path={"/Register"} element={<Register />}></Route>
					<Route path={"/Login"} element={<Login />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

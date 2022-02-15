import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import CoachSignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/SignUp"} element={<CoachSignUp />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

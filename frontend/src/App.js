import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/about"} element={<About />}></Route>
          {/* <Route path={"/signin"} element={<SignInSide />}></Route> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

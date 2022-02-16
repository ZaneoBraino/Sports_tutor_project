import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Coaches from "./pages/Coaches";
import Landing_page from "./pages/Landing_page";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/about"} element={<About />}></Route>
          <Route path={"/coaches"} element={<Coaches />}></Route>
          <Route path={"/Landing_page"} element={<Landing_page />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

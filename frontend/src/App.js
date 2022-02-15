import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Landing_page from "./pages/Landingpage";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          {/* <Route path={"/"} element={<Home />}></Route> */}
          {/* <Route path={"/signin"} element={<SignInSide />}></Route> */}
          <Route path={"/landingpage"} element={<Landing_page />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

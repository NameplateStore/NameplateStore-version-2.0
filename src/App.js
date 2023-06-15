import "./App.css";

import Header from "./components/Header";
import Home from "./layouts/Home";
import Footer from "./components/Footer";
import Scrolltop from "./components/Scrolltop";
import Mobile from "./components/Mobile";
import Signmodal from "./components/Signmodal";

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="page-wrapper">
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home/>}></Route>

      </Routes>
      
      
      <Footer></Footer>
      <Scrolltop></Scrolltop>
      <Mobile></Mobile>
      <Signmodal></Signmodal>
    </div>
    </Router>
  );
}

export default App;

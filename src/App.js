import "./App.css";
import styled from "styled-components";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
      </Routes>
    </Router>
  );
}

export default App;

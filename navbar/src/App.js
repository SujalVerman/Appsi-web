import './App.css';
import Navbar from './MyComponents/Navbar';
import {PageNext} from "./MyComponents/PageNext"
import StartBtn from "./MyComponents/StartBtn"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/home" element={<PageNext />} />
                <Route path="/start" element={<StartBtn />} />
            </Routes>
        </Router>
  );
}
export default App;
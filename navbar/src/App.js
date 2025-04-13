import './App.css';
import Community from './MyComponents/Community';
import Navbar from './MyComponents/Navbar';
import { PageNext } from "./MyComponents/PageNext";
import StartBtn from "./MyComponents/StartBtn";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import TopBar from './Studiopart/TopBar';
import TemplateBar from './TemplatePageStudio/TemplateBar'; 
import './Template.css'

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}


function MainLayout() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/community" || location.pathname === "/studio" || location.pathname === "/templatepage";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/home" element={<PageNext />} />
        <Route path="/start" element={<StartBtn />} />
        <Route path="/community" element={<Community />} />
        <Route path="/studio" element={<TopBar />} />
        <Route path="/templatepage" element={<TemplateBar />} /> 
      </Routes>
    </>
  );
}


export default App;

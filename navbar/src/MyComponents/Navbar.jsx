import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null); 
  const navigate = useNavigate();
  const toggleMenu = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu)); 
  };

  return (
    <div>
      <header>
        <nav className="navbar"> 
          <ul className="nav-left">
            <img onClick={() => navigate("/home")}
              src="/logo3.png"  
              alt="Logo" 
              width="40" 
              height="40" 
              className="d-inline-block align-text-top mx-4 my-1"
              style={{cursor:"pointer"}}
            />
            
            <li className="position-relative" onClick={() => toggleMenu("product")}>
              Product
              {activeMenu === "product" && (
                <div className="popup-card">
                  <div className="content">
                    <div className="category">
                      <h6>CREATION</h6>
                      <hr />
                      <p className="item">Website Design</p>
                      <p className="itemSmall">Create your site with intuitive design features.</p>
                      <p className="item">Website Template</p>
                      <p className="itemSmall">Choose from 1000+ website templates.</p>
                      <p className="item">AI Website Builder</p>
                      <p className="itemSmall">Create your site in no time with AI.</p>
                    </div>
                    <div className="category">
                      <h6>BUSINESS</h6>
                      <div className="coloumn2">
                        <p className="item">eCommerce</p>
                        <p className="itemSmall">Run & grow your eCommerce website.</p>
                        <p className="item">Scheduling</p>
                        <p className="itemSmall">Manage appointments, staff & clients.</p>
                        <p className="item">Restaurants</p>
                        <p className="itemSmall">Manage your menus, orders & reservations.</p>
                      </div>
                    </div>
                    <div className="category">
                      <div className="coloumn3">
                        <p className="item">Blog</p>
                        <p className="itemSmall">Share ideas & grow your traffic.</p>
                        <p className="item">Portfolio</p>
                        <p className="itemSmall">Showcase your work with an online portfolio.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li className="position-relative" onClick={() => toggleMenu("solution")}>
              Solution
              {activeMenu === "solution" && (
                <div className="popup-card">
                  <div className="content">
                    <div className="category">
                      <h6>MANAGEMENT</h6>
                      <hr />
                      <p className="item">Payment solution</p>
                      <p className="itemSmall">Accept & manage payment online.</p>
                      <p className="item">Mobile app</p>
                      <p className="itemSmall">Run your business from your mobile.</p>
                      <p className="item">All business features</p>
                      <p className="itemSmall">Explore all business management features.</p>
                    </div>
                    <div className="category">
                      <h6>GROWTH</h6>
                      <div className="coloumn2">
                        <p className="item">CRM system</p>
                        <p className="itemSmall">Build & manage customer relationships.</p>
                        <p className="item">Website analytics</p>
                        <p className="itemSmall">Get reports with actionable data & insights.</p>
                        <p className="item">Email Marketing</p>
                        <p className="itemSmall">Create email marketing campaigns.</p>
                      </div>
                    </div>
                    <div className="category">
                      <div className="coloumn3">
                        <p className="item">SEO tools</p>
                        <p className="itemSmall">Optimize your website for search engines.</p>
                        <p className="item">All marketing features</p>
                        <p className="itemSmall">Explore all growth & marketing features.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li>Studio</li>
            <li>|</li>
            <li>Community</li>
            <li>Startup</li>
            <li>Appsi Store</li>
          </ul>

          <div className="nav-right">
            <span className="mx-4" style={{ cursor: "pointer", marginTop: "10px" }}>
              <i className="bi bi-globe text-white"></i>
            </span>
            <p className="my-2 text-white" style={{ marginRight: "30px" }}>|</p>
            <button className="login-btn mx-2">Log In</button>
            <button className="trial-btn mx-2" onClick={() => navigate("/start")} >Start Free Trial</button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

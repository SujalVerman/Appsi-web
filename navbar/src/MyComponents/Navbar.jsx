import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    name: "Product",
    submenu: [
      {
        title: "CREATION",
        items: [
          { name: "Website Design", desc: "Create your site with intuitive design features." },
          { name: "Website Template", desc: "Choose from 1000+ website templates." },
          { name: "AI Website Builder", desc: "Create your site in no time with AI." }
        ]
      },
      {
        title: "BUSINESS",
        items: [
          { name: "eCommerce", desc: "Run & grow your eCommerce website." },
          { name: "Scheduling", desc: "Manage appointments, staff & clients." },
          { name: "Restaurants", desc: "Manage your menus, orders & reservations." }
        ]
      },
      {
        title: "",
        items: [
          { name: "Blog", desc: "Share ideas & grow your traffic." },
          { name: "Portfolio", desc: "Showcase your work with an online portfolio." }
        ]
      }
    ]
  },
  {
    name: "Solution",
    submenu: [
      {
        title: "MANAGEMENT",
        items: [
          { name: "Payment solution", desc: "Accept & manage payment online." },
          { name: "Mobile app", desc: "Run your business from your mobile." },
          { name: "All business features", desc: "Explore all business management features." }
        ]
      },
      {
        title: "GROWTH",
        items: [
          { name: "CRM system", desc: "Build & manage customer relationships." },
          { name: "Website analytics", desc: "Get reports with actionable data & insights." },
          { name: "Email Marketing", desc: "Create email marketing campaigns." }
        ]
      },
      {
        title: "",
        items: [
          { name: "SEO tools", desc: "Optimize your website for search engines." },
          { name: "All marketing features", desc: "Explore all growth & marketing features." }
        ]
      }
    ]
  }
];

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
            <img
              onClick={() => navigate("/home")}
              src="/logo3.png"
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-text-top mx-4 my-1"
              style={{ cursor: "pointer" }}
            />
            {menuItems.map((menu) => (
              <li key={menu.name} className="position-relative" onClick={() => toggleMenu(menu.name)}>
                {menu.name}
                {activeMenu === menu.name && (
                  <div className="popup-card">
                    <div className="content">
                      {menu.submenu.map((category, index) => (
                        <div key={index} className="category">
                          {category.title && <h6>{category.title}</h6>}
                          {category.title && <hr />}
                          {category.items.map((item, idx) => (
                            <React.Fragment key={idx}>
                              <p className="item">{item.name}</p>
                              <p className="itemSmall">{item.desc}</p>
                            </React.Fragment>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
            <li onClick={()=>[navigate("/templatepage")]}>Studio</li>
            <li >|</li>
            <li onClick={() => navigate("/community")}>Community</li>
            <li>Startup</li>
            <li>Appsi Store</li>
          </ul>
          <div className="nav-right">
            <span className="mx-4" style={{ cursor: "pointer", marginTop: "10px" }}>
              <i className="bi bi-globe text-white"></i>
            </span>
            <p className="my-2 text-white" style={{ marginRight: "30px" }}>|</p>
            <button className="login-btn mx-2">Log In</button>
            <button className="trial-btn mx-2" onClick={() => navigate("/start")}>
              Start Free Trial
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

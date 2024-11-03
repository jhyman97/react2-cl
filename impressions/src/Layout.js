import { Outlet, NavLink } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/Layout.css";


const Layout = () => {
    return (
        <>
            <Header />

            <nav id="main-nav">
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                    <div class="dropdown">
                    <li><NavLink to="/dresses" className={({ isActive }) => isActive ? "active" : ""}>Clothing</NavLink></li>
                            <div class="dropdown-content">
                              <a><NavLink to="/Dresses">Dresses</NavLink></a>
                              <a><NavLink to="/Outfits">Outfits</NavLink></a>
                              <a><NavLink to="/Rompers">Rompers</NavLink></a>
                              <a><NavLink to="/Leggings">Leggings</NavLink></a>
                              <a><NavLink to="/Shorts">Shorts</NavLink></a>
                              <a><NavLink to="/Skorts">Skorts</NavLink></a>
                            </div>
                        </div>
                    <div class="dropdown">
                    <li><NavLink to="/anime" className={({ isActive }) => isActive ? "active" : ""}>Keychains</NavLink></li>
                            <div class="dropdown-content">
                            <a><NavLink to="/Anime">Anime</NavLink></a>
                            <a><NavLink to="/Cartoon">Cartoon</NavLink></a>
                            </div>
                        </div>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
                </ul>
            </nav>
            
            <Outlet />

            <Footer />
        </>
    );
};

export default Layout;

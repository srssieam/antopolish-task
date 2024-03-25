import { AiOutlineShoppingCart } from "react-icons/ai";
import "./headerStyle.css"
const Navbar = () => {
    return (
        <div className="header">
            <div>
                <h1 className="logo-title">Taste now</h1>
            </div>
            <nav>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#about-us">About us</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact us</a></li>
                        <li><a href="#contact"><AiOutlineShoppingCart className="cart-icon" /></a></li>
                        {/* <li ></li> */}
                    </ul>
                </nav>
              
                <button className="btn">sign up</button>
            </nav>
        </div>
    );
};

export default Navbar;
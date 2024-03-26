import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./headerStyle.module.css"
const Navbar = () => {
    const pathName = window.location.pathname;
    // console.log(pathName)
    return (
        <div className={styles.header}>
            <div>
                <h1 className={styles.logoTitle}>Taste now</h1>
            </div>
            <nav>
                <nav>
                    <ul>
                        <li><a href="/" className={`${pathName === "/" ? styles.active : ""}`}>Home</a></li>
                        <li><a href="/about-us" className={`${pathName === "/about-us" ? styles.active : ""}`}>About us</a></li>
                        <li><a href="/blog" className={`${pathName === "/blog" ? styles.active : ""}`}>Blog</a></li>
                        <li><a href="/contact" className={`${pathName === "/contact" ? styles.active : ""}`}>Contact us</a></li>
                        <li><a href="/cart" className={`${pathName === "/cart" ? styles.active : ""}`}><AiOutlineShoppingCart className={styles.cartIcon} /></a></li>
                    </ul>
                </nav>

                <button className="btn">sign up</button>
            </nav>
        </div>
    );
};

export default Navbar;
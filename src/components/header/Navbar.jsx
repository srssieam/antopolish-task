import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaXmark } from "react-icons/fa6";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import styles from "./headerStyle.module.css"
import { useState } from "react";
const Navbar = () => {
    const pathName = window.location.pathname;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${styles.header} ${isOpen=== false? styles.padding :""}`}>
            <div className={`${styles.row} container`}>

                {/* navbar leftSide */}
                <div className={`${styles.logoTitle} ${isOpen === true ? styles.hidden : ""}`}>
                    {/* menu bar for medium and small device */}
                    <HiOutlineMenuAlt2 onClick={() => setIsOpen(true)} className={styles.barIcon} />
                    <h1 >Taste now</h1>
                </div>
                <div>
                    <a href="/cart" className={`${styles.cartButton} ${isOpen === true ? styles.hidden : ""}`}><AiOutlineShoppingCart className={styles.cartIcon} /></a>
                </div>

                {/* navbar right side */}
                <div className={`${styles.navbar} ${isOpen === true ? styles.open : ""}`}>

                    {/* crossbar for small device*/}
                    <FaXmark onClick={() => setIsOpen(false)} className={`${styles.crossIcon}`} />

                    {/* navbar heading for small device */}
                    <div>
                        <h1 >Taste now</h1>
                    </div>

                    {/* nav menus */}
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
                </div>
            </div>

        </div>
    );
};

export default Navbar;
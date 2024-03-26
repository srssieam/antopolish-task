import styles from "./FooterStyle.module.css"

import { ImFacebook2, ImTwitter, ImInstagram, ImYoutube } from "react-icons/im";

const Footer = () => {
    return (
        <div className={styles.footerBody}>
            <div className={`${styles.footerHeading}`}>
                    <h1>Taste now</h1>
            </div>
            <div className={`container ${styles.footerContainer}`}>
                <div className={`${styles.gridItem} ${styles.hidden}`}>
                    <h1>Taste now</h1>
                    <div className={styles.footerIcons}>
                        <ImFacebook2 />
                        <ImInstagram />
                        <ImTwitter />
                        <ImYoutube />
                    </div>
                </div>
                <div className={styles.gridItem}>
                    <ul>
                        <li><a href="#">Seslendirme ve Alt Jazz</a></li>
                        <li><a href="#">Media Market</a></li>
                        <li><a href="#">Gillie</a></li>
                        <li><a href="#">Size Last</a></li>
                    </ul>
                </div>
                <div className={styles.gridItem}>
                    <ul>
                        <li><a href="#">Self Betimes</a></li>
                        <li><a href="#">Yatırımcı İlişkileri</a></li>
                        <li><a href="#">Basal Himmler</a></li>
                        <li><a href="#">Size Last</a></li>
                    </ul>
                </div>
                <div className={styles.gridItem}>
                    <ul>
                        <li><a href="#">Yard Market</a></li>
                        <li><a href="#">Is İmkanları</a></li>
                        <li><a href="#">Car Tercihleri</a></li>
                    </ul>
                </div>
                <div className={styles.gridItem}>
                    <ul>
                        <li><a href="#">Hedge Karla</a></li>
                        <li><a href="#">Mullein Koşulları</a></li>
                        <li><a href="#">Autumnal Bulgier</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Footer;
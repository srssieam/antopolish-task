import bannerImg from "../../assets/bannerImg.png"
import bannerImg2 from "../../assets/bannerBg.png"
import styles from "./bannerStyle.module.css"
const Banner = () => {
    return (
        <div className={styles.bannerBody}>
            <div className={styles.bannerLeft}>
                <h1 className={styles.bannerTitle}>Experience food <br /> <span className="common-pink">Delivery</span> like no other</h1>
                <p className={styles.bannerDesc}>
                    We deliver the food of your choice wherever, whenever.
                    Select your food from only the top restaurants in the area, and get it in a flash.
                    Download the app now to discover more.
                </p>
            </div>
            <div className={styles.bannerRight}>
                <img className={styles.topImage} src={bannerImg} alt="banner-img" />
            </div>
            <img className={styles.bottomImage} src={bannerImg2} alt="banner-img2" />
        </div>
    );
};

export default Banner;
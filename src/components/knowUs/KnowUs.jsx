import styles from "./knowUsStyle.module.css"
import knowUs1 from "../../assets/know-us-1.jpg"
import knowUs2 from "../../assets/know-us-2.jpg"

const KnowUs = () => {
    return (
        <div>
            <h1 className="commonHeading">Get to know <span className="common-pink">us</span></h1>
            <div className={styles.container}>

                {/* first row */}
                <div className={styles.leftSide}>
                    <img  src={knowUs1} alt="know us img" />
                </div>
                <div className={styles.rightSide}>
                    <h2 className="commonHeading" style={{ fontSize: "36px" }}><span className="common-pink">Teamwork</span> is the key to our success</h2>
                    <p>At TasteNow we make sure that every decision is determined by a team of us. Everyone´s opinion matters, and as group, we are stronger. We firmly belive that team work, makes the dream work.</p>
                </div>

                {/* second row */}
                <div className={styles.rightSide}>
                    <h2 className="commonHeading" style={{ fontSize: "36px" }}>We are all in for the <span className="common-pink">environment</span></h2>
                    <p>TasteNow donates $1 penny for every purchase made from the app to an organization that takes care of our enviromet. We belive that with everyone´s help, we can make a better world. </p>
                </div>
                <div className={styles.leftSide}>
                    <img  src={knowUs2} alt="know us img" />
                </div>
                
            </div>
        </div>
    );
};

export default KnowUs;
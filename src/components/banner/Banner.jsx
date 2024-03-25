import bannerImg from "../../assets/bannerImg.png"
import bannerImg2 from "../../assets/bannerBg.png"
import "./bannerStyle.css"
const Banner = () => {
    return (
        <div className="banner-body">
            <div className="banner-left">
                <h1 className="banner-title">Experience food <br /> <span className="common-pink">Delivery</span> like no other</h1>
                <p className="banner-desc">
                    We deliver the food of your choice wherever, whenever.
                    Select your food from only the top restaurants in the area, and get it in a flash.
                    Download the app now to discover more.
                </p>
            </div>
            <div className="banner-right">
                <img className="top-image" src={bannerImg} alt="banner-img" />
            </div>
            <img className="bottom-image" src={bannerImg2} alt="banner-img2" />
        </div>
    );
};

export default Banner;
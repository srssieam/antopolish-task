import { MdOutlineStarPurple500 } from "react-icons/md";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Category = ({ foodItem, styles }) => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={10}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 15
                }
            }}
            pagination={{
                clickable: true,
            }}
            navigation={{
                clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className={styles.mySwiper}
        >
            {
                foodItem?.map((item, idx) => (
                    <SwiperSlide className={styles.foodCard} key={idx}>
                        <div className={styles.imageContainer}>
                            <img src={item.image} alt="food image" />
                        </div>
                        <div className={styles.cardBody}>
                            <h3>{item.itemName}</h3>
                            <p>{item.chef}</p>
                            <p>${item.price}</p>
                            <button className='btn'>Add to cart</button>
                        </div>
                        <div className={styles.ribbon}>
                            <MdOutlineStarPurple500 />
                            <p>{item.rating}</p>
                            </div>


                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default Category;
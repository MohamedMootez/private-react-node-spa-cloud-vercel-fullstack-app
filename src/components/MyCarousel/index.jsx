import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { hero, hero1, hero2, hero3, hero4 } from "../../constant/imageData";
import { useTranslation } from "react-i18next"; // Import translation hook
import styles from "./carouselCss.module.css";

const MyCarousel = () => {
  const { t } = useTranslation(); // Translation function

  const slides = [hero4, hero, hero1, hero2, hero3];

  return (
    <div className={styles.slidecontainer}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={slides.length > 2}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className={styles.mySwiper}
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.slideContent}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className={styles.slideImage}
              />
              <div className={styles.overlayText}>
                <h2>{t("El_WaeedCulinatifLabe")}</h2>
                <p>{t("La_PassionLabel")}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MyCarousel;

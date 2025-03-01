// import { Container, Image } from "react-bootstrap";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import styles from "./CHReviews.module.css";
// import clsx from "clsx";
// import { useTranslation } from "react-i18next";
// import { reviewsSwiperData } from "../../../constant/data";

// export const CHReviews = () => {
//   const { t } = useTranslation();

//   return (
//     <>
//       <section
//         className={clsx(styles.reviewSection, "section-py position-relative")}
//       >
//         <Container className="z-1">
//           <div className="reviewSectionHeadlines">
//             <span className="primary-title d-block mb-4">{t("TeamLabel")}</span>
//             <h2 className="secondary-title text-white">{t("RenLabel")} </h2>
//           </div>
//           <div className={styles.reviewsSwiperWrapper}>
//             <Swiper
//               centeredSlides={true}
//               slidesPerView={reviewsSwiperData.length === 2 ? 2 : "auto"}
//               spaceBetween={reviewsSwiperData.length === 2 ? 30 : 15}
//               breakpoints={{
//                 0: { slidesPerView: 1, spaceBetween: 15 },
//                 576: {
//                   slidesPerView: reviewsSwiperData.length === 2 ? 2 : 2,
//                   spaceBetween: 20,
//                 },
//                 992: {
//                   slidesPerView: reviewsSwiperData.length === 2 ? 2 : 3,
//                   spaceBetween: 30,
//                 },
//               }}
//               autoplay={{ delay: 3000 }}
//               loop={reviewsSwiperData.length > 2}
//               modules={[Autoplay]}
//               className={styles.reviewSwiper}
//             >
//               {reviewsSwiperData.map((slider, index) => {
//                 return (
//                   <SwiperSlide key={index}>
//                     <div
//                       className={clsx(
//                         styles.reviewSwiperCard,
//                         "ch-bg-white text-center d-flex flex-column justify-content-space-between gap-3"
//                       )}
//                     >
//                       <div>
//                         <div
//                           className={clsx(
//                             styles.reviewAvatarCard,
//                             "d-flex align-items-center justify-content-center mx-auto rounded-circle overflow-hidden"
//                           )}
//                         >
//                           <Image
//                             src={slider.imgSrc}
//                             className={
//                               "flex-0-auto w-100 h-100 object-fit-cover"
//                             }
//                             alt={`swiper-img-${index + 1}`}
//                           />
//                         </div>
//                         <p className="big font-josefin text-ellipsis line-clamp-4">
//                           {t(slider.reviewMessage)}
//                         </p>
//                       </div>
//                       <span className="p sm d-block text-lemon-curry font-josefin mt-auto text-uppercase">
//                         {slider.name}
//                       </span>
//                     </div>
//                   </SwiperSlide>
//                 );
//               })}
//             </Swiper>
//           </div>
//         </Container>
//       </section>
//     </>
//   );
// };
import { Container, Image } from "react-bootstrap";
import styles from "./CHReviews.module.css";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { reviewsSwiperData } from "../../../constant/data";

export const CHReviews = () => {
  const { t } = useTranslation();

  return (
    <section
      className={clsx(styles.reviewSection, "section-py position-relative")}
    >
      <Container className="z-1">
        <div className="reviewSectionHeadlines text-center">
          <span className="primary-title d-block mb-4">{t("TeamLabel")}</span>
          <h2 className="secondary-title text-white">{t("RenLabel")}</h2>
        </div>

        <div
          className={clsx(
            styles.reviewsWrapper,
            "d-flex justify-content-center align-items-stretch gap-4 flex-wrap"
          )}
        >
          {reviewsSwiperData.map((slider, index) => (
            <div
              key={index}
              className={clsx(
                styles.reviewCard,
                "ch-bg-white text-center d-flex flex-column justify-content-space-between gap-3 p-4 rounded"
              )}
              style={{ maxWidth: "350px", minWidth: "280px" }}
            >
              <div>
                <div
                  className={clsx(
                    styles.reviewAvatarCard,
                    "d-flex align-items-center justify-content-center mx-auto rounded-circle overflow-hidden"
                  )}
                  style={{ width: "80px", height: "80px" }}
                >
                  <Image
                    src={slider.imgSrc}
                    className="w-100 h-100 object-fit-cover"
                    alt={`review-avatar-${index + 1}`}
                  />
                </div>
                <p className="big font-josefin text-ellipsis line-clamp-4 mt-3">
                  {t(slider.reviewMessage)}
                </p>
              </div>
              <span className="p sm d-block text-lemon-curry font-josefin mt-auto text-uppercase">
                {slider.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

import MyCarousel from "../../../components/MyCarousel";
// import styles from "./CHHeroSection.module.css";
// import { hero, hero1, hero2 } from "../../../constant/imageData";

// export const CHHeroSection = () => {
//   const { t } = useTranslation();

//   return (
//     <div className={styles.heroSection}>
//       <Container>
//         {/* Headline at the Top */}
//         <div className="styles headline">
//           <span className="h1 small font-satisfy text-lemon-curry fw-normal text-center d-block mb-4 pb-1">
//             {t("El_WaeedCulinatifLabe")}
//           </span>
//           <h1 className="text-uppercase fw-bold text-white text-center font-josefin">
//             {t("La_PassionLabel")}
//           </h1>
//         </div>
//         {/* Carousel */}
//         <div className={styles.carouselWrapper}>
//           <Carousel>
//             <Carousel.Item>
//               <img
//                 className={`d-block w-100 ${styles.carouselImage}`}
//                 src={hero}
//                 alt="First slide"
//               />
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className={`d-block w-100 ${styles.carouselImage}`}
//                 src={hero1}
//                 alt="Second slide"
//               />
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className={`d-block w-100 ${styles.carouselImage}`}
//                 src={hero2}
//                 alt="Third slide"
//               />
//               <Carousel.Caption>
//                 <h3>Example Caption</h3>
//                 <p>A small description for this slide...</p>
//               </Carousel.Caption>
//             </Carousel.Item>

//             <Carousel.Item>
//               <img
//                 className={`d-block w-100 ${styles.carouselImage}`}
//                 src={hero4}
//                 alt="Third slide"
//               />
//               <Carousel.Caption>
//                 <h3>Example Caption</h3>
//                 <p>A small description for this slide...</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className={`d-block w-100 ${styles.carouselImage}`}
//                 src={hero5}
//                 alt="Third slide"
//               />
//               <Carousel.Caption>
//                 <h3>Example Caption</h3>
//                 <p>A small description for this slide...</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className={`d-block w-100 ${styles.carouselImage}`}
//                 src={hero6}
//                 alt="Third slide"
//               />
//               <Carousel.Caption>
//                 <h3>Example Caption</h3>
//                 <p>A small description for this slide...</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//           </Carousel>
//         </div>

//         {/* Button at the Bottom */}
//         <div className={styles.carouselFooter}>
//           <a href="#deliciousMenuSection" className="d-inline-block">
//             <CHButton CHBtnClassname="text-uppercase">
//               {t("Au_cœurLabel")}
//             </CHButton>
//           </a>
//         </div>
//       </Container>
//     </div>
//   );
// };

export const CHHeroSection = () => {
  return (
    <div>
      <MyCarousel />
    </div>
    // <div className={styles.heroSection}>
    //   {/* Headline at the Top */}
    //   <div className={styles.headline}>
    //     <span className="h1 small font-satisfy text-lemon-curry fw-normal text-center d-block mb-4 pb-1">
    //       {t("El_WaeedCulinatifLabe")}
    //     </span>
    //     <h1 className="text-uppercase fw-bold text-white text-center font-josefin">
    //       {t("La_PassionLabel")}
    //     </h1>
    //   </div>

    //   {/* Carousel */}
    //   <div className={styles.carouselWrapper}>
    //     <Carousel>
    //       <Carousel.Item>
    //         <img
    //           className={`d-block w-100 ${styles.carouselImage}`}
    //           src={hero}
    //           alt="First slide"
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img
    //           className={`d-block w-100 ${styles.carouselImage}`}
    //           src={hero1}
    //           alt="First slide"
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img
    //           className={`d-block w-100 ${styles.carouselImage}`}
    //           src={hero2}
    //           alt="First slide"
    //         />
    //       </Carousel.Item>
    //     </Carousel>
    //   </div>

    //   {/* Button at the Bottom */}
    //   {/* <div className={styles.carouselFooter}>
    //     <a href="#deliciousMenuSection" className="d-inline-block">
    //       <CHButton CHBtnClassname="text-uppercase">
    //         {t("Au_cœurLabel")}
    //       </CHButton>
    //     </a>
    //   </div> */}
    // </div>
  );
};

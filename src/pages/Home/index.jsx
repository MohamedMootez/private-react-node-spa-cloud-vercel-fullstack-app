import { TopNavigationBar } from "./TopNavigationBar";

import { CHDiscover } from "./CHDiscover/CHDiscover";
import { CHHeroSection } from "./CHHeroSection";
import { CHOurSpecialities } from "./CHOurSpecialities/CHOurSpecialities";
import { CHFooter } from "../../components";
import { CHContactForm } from "./CHContactForm";
import { CHDeliciousMenu } from "./CHDeliciousMenu";

import { CHReviews } from "./CHReviews";

const Home = () => {
  return (
    <>
      <TopNavigationBar />

      <CHHeroSection />

      <CHDiscover />
      <CHOurSpecialities />
      <CHDeliciousMenu />

      <CHReviews />
      <CHContactForm />
      <CHFooter />
    </>
  );
};

export default Home;

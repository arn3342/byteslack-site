import React from "react";
import Footer from "../components/Footer/Footer";
import CaseStudy from "../components/Home/CaseStudy/CaseStudy";
import Intro from "../components/Home/Intro/Intro";
import QualityDriven from "../components/Home/QualityDriven/QualityDriven";
import Recommendation from "../components/Home/Recommendation/Recommendation";
import TechStack from "../components/Home/TechStack/TechStack";
import Testimonial from "../components/Home/Testimonial/Testimonial";
import Navbar from "../components/Navbar/Navbar";
import "../global/style.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Intro btnText="Estimate Project" />
        <TechStack />
        <QualityDriven />
        <CaseStudy />
        <Recommendation />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import CaseStudy from "../../components/Home/CaseStudy/CaseStudy";
import Footer from "../../components/Home/Footer/Footer";
import Intro from "../../components/Home/Intro/Intro";
import Navbar from "../../components/Home/Navbar/Navbar";
import QualityDriven from "../../components/Home/QualityDriven/QualityDriven";
import Recommendation from "../../components/Home/Recommendation/Recommendation";
import Service from "../../components/Home/Service/Service";
import Testimonial from "../../components/Home/Testimonial/Testimonial";
import "../../global/style.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
        <Service />
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

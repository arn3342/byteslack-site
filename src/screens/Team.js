import React from "react";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Home/Intro/Intro";
import Navbar from "../components/Navbar/Navbar";
import TeamC from "../components/Team/Team";
import "../global/style.scss";

const Team = () => {
  return (
    <>
      <Navbar />
      <main>
        <Intro btnText="Hire Our Team" />
        <TeamC/>
      </main>
      <Footer />
    </>
  );
};

export default Team;

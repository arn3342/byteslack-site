import React from 'react';
import Footer from "../components/Footer/Footer";
import Intro from "../components/Home/Intro/Intro";
import Navbar from "../components/Navbar/Navbar";
import TeamProfileC from "../components/TeamProfile/TeamProfile";

const TeamProfile = () => {
    return (
        <>
      <Navbar />
      <main>
        <Intro btnText="Hire Our Team" />
        <TeamProfileC/>
      </main>
      <Footer />
    </>
    );
};

export default TeamProfile;
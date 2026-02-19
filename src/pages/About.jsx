import Navbar from "../components/Navbar";
import CoachSection from "../components/CoachSection";
import Achievements from "../components/Achievements";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import FinalCTA from "../components/FinalCTA";
import "../styles.css";

function About() {
  return (
    <>
      <Navbar />
      <CoachSection />
      <Achievements />
      <Stats />
      <FinalCTA />
      <Footer />
    </>
  );
}

export default About;
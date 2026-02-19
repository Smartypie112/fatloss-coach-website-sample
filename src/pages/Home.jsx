import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SocialProof from "../components/SocialProof";
import WhyStruggle from "../components/WhyStruggle";
import Testimonials from "../components/Testimonials";
import CoachSection from "../components/CoachSection";
import FeaturesSection from "../components/FeaturesSection";
import CallBooking from "../components/CallBooking";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import "../styles.css";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SocialProof />
      <WhyStruggle />
      <FeaturesSection />
      <CoachSection />
      <Testimonials />
      <CallBooking />
      <FinalCTA />
      <Footer />
    </>
  );
}

export default Home;
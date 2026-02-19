import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PageLayout({ Component }) {
  return (
    <>
      <Navbar />
      <Component />
      <Footer />
    </>
  );
}
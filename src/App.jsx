import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ResultsPage from "./pages/ResultsPage";
import FAQSPage from "./pages/FAQSPage";
import ResultsVid from "./components/ResultsVid";
import OneToOneSession from './components/OneToOneSession';
import TwelveWeekTransformation from './components/TwelveWeekTransformationComp';
import GroupClasses from './components/GroupClasses';
import Services from './components/Services';
import NoSlotsAvailable from './components/NoSlotsAvailable';
import ThankYouSection from './components/ThankYouSection';
import FAQs from './components/FAQs';
import Booking from './components/Booking';
import CallBooking from './components/CallBooking';
import Payment from './components/Payment';
import PaymentSuccess from './components/Payment-Success';
import BodyAnalysisSection from './components/BodyAnalysisSection';
import OneCompPageLayout from "./pages/OneCompPageLayout";
import UpiPayment from './components/UpiPayment';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upi-payment" element={<UpiPayment />} />
      <Route path="/booking/:serviceType" element={<Booking />} />
      <Route path="/about" element={<About />} />
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="/services/one-on-one" element={<OneCompPageLayout Component={OneToOneSession} />} />
      <Route path="/analyser" element={<BodyAnalysisSection/>} />
      <Route path="/services/weight-loss-program" element={<OneCompPageLayout Component={TwelveWeekTransformation} />} />
      <Route path="/services/group-classes" element={<OneCompPageLayout Component={GroupClasses} />} />
      <Route path="/payment/:serviceType" element={<Payment />} />
      <Route path="/faqs" element={<FAQSPage/>} />
      <Route path="/services" element={<OneCompPageLayout Component={Services} />} />
      <Route path="/results" element={<ResultsPage />} />
<Route path="/form" element={<OneCompPageLayout Component={CallBooking} />} />
      <Route path="/no-slots" element={<OneCompPageLayout Component={NoSlotsAvailable} />} />
      <Route path="/thank-you" element={<OneCompPageLayout Component={ThankYouSection} />} />
    </Routes>
  );
}

export default App;
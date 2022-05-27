import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import WhyUs from "../components/WhyUs";
import StartRent from "../components/StartRent";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <WhyUs />
      <StartRent />
      <Faq />
      <Footer />
    </div>
  );
}

export default LandingPage;

import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import OurServices from "../components/OurServices";
import WhyUs from "../components/WhyUs";
import Testimonial from "../components/Testimonial";
import Sewa from "../components/Sewa";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Homepage";
  }, []);

  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="container">
        <OurServices />
        <WhyUs />
      </div>
      <Testimonial />
      <div className="container">
        <Sewa />
        <Faq />
        <Footer />
      </div>
    </>
  );
};

export default Home;

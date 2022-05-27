import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import Footer from "../components/Footer";
import FindCarForm from "../components/FindCarForm";
import CarCollection from "../components/CarCollection";

function FindCar() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <FindCarForm />
      <CarCollection />
      <Footer />
    </div>
  );
}

export default FindCar;

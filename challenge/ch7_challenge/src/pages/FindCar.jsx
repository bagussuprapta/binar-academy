import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import Footer from "../components/Footer";
import FindCarForm from "../components/FindCarForm";

function FindCar() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <FindCarForm />
      <Footer />
    </div>
  );
}

export default FindCar;

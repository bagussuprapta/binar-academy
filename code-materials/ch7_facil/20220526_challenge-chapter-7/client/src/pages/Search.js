import { useEffect } from "react";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import JumbotronNoButton from "../components/JumbotronNoButton";
import Navbar from "../components/Navbar";

const Search = () => {
  useEffect(() => {
    document.title = "Search Cars";
  }, []);
  return (
    <>
      <Navbar />
      <JumbotronNoButton />
      <Filter />
      <div className="container">
        <Footer />
      </div>
    </>
  );
};

export default Search;

import AboutUs from "./layout/about/About";
import Footer from "./layout/footer/Footer";
import Hero from "./layout/hero/Hero";
import Navbar from "./layout/navbar/Navbar";
import Portfolio from "./layout/portfolio/Portfolio";


function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Portfolio />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;

import AboutUs from "./layout/about/About";
import Contact from "./layout/contact/Contact";
import Hero from "./layout/hero/Hero";
import Navbar from "./layout/navbar/Navbar";
import Portfolio from "./layout/portfolio/Portfolio";


function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Portfolio />
      <AboutUs />
      <Contact />
    </div>
  );
}

export default App;

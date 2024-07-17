import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Location } from "./pages/Location";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="" index element={<About />} />
        <Route path="locations"  element={<Location />} />        
        <Route path="contact"  element={<Contact />} />
        <Route path="*"  element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

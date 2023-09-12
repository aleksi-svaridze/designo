import Footer from "./layout/footer/Footer";
import Navbar from "./layout/navbar/Navbar";
import Main from "./pages/Main";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebDesign from "./pages/WebDesign";
import AppDesign from "./pages/AppDesign";
import GraphicDesign from "./pages/GraphicDesign";


function App() {
  return (
    <BrowserRouter>
      <div>
          <Navbar />
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='web-design' element={<WebDesign />} />
              <Route path='app-design' element={<AppDesign />} />
              <Route path='graphic-design' element={<GraphicDesign />} />
            </Routes>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

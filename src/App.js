import Footer from "./layout/footer/Footer";
import Navbar from "./layout/navbar/Navbar";
import Main from "./pages/Main";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Works from "./pages/Works";


function App() {
  return (
    <BrowserRouter>
      <div>
          <Navbar />
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='web-design' element={<Works />} />
            </Routes>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

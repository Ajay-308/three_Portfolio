import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import About from "./pages/Aboutme"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
const App = () => {
  return (
    <Router>
      <main className="overlay">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>

      </main>

    </Router>
  );
};

export default App;


import Services from "./components/Services";
// import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

// import {createBrowserRouter , RouterProvider} from 'react-router-dom';

import "./App.css";
import About from "./About";
import Contact from "./Contact";
function App() {


  return (
    <div>
      
      <Router>
        {/* <Navbar /> */}

        {/* Define Routes */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />


        </Routes>

        {/* Footer */}
        {/* <Footer /> */}
      </Router>

    </div>
  );
}

export default App;

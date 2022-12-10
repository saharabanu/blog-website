import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Client/Home/Home/Home";
import NotFound from "./Components/Client/Pages/NotFound/NotFound";
import Dashboard from "./Components/Client/Dashboard/Dashboard/Dashboard";
import SingleBlog from "./Components/Client/Pages/SingleBlog/SingleBlog";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import About from "./Components/Client/Pages/About/About";
import Contact from "./Components/Client/Pages/Contact/Contact";


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="text-center loading">
          <BeatLoader
            // cssOverride={override}
            size={30}
            color={"#9932cc"}
            loading={loading}
            // speedMultiplier={1.5}
          />
        </div>
      ) : (
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
           
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/:dash" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
       
      )}
    </div>
  );
}

export default App;

// https://preview.themeforest.net/item/bloggable-modern-blog-elementor-template-kit/full_screen_preview/35760021?_ga=2.48019488.629312048.1656664917-1016280525.1656664917
//

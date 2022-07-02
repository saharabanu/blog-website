import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Client/Home/Home/Home";
import NotFound from "./Components/Client/Pages/NotFound/NotFound";
import Login from "./Components/Client/Login/Login/Login";
import SignUp from "./Components/Client/Login/SignUp/SignUp";
import Dashboard from "./Components/Client/Dashboard/Dashboard/Dashboard";
import SingleBlog from "./Components/Client/Pages/SingleBlog/SingleBlog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// https://preview.themeforest.net/item/bloggable-modern-blog-elementor-template-kit/full_screen_preview/35760021?_ga=2.48019488.629312048.1656664917-1016280525.1656664917
//

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./About";
import Main from "./Main";
import Booking from "./Book";
import Footer from "./components/Footer";
import Contact from "./Contact";
import Header from "./components/Header";
import ProgressBar from "@badrap/bar-of-progress";


function App() {
  const loadcontent=()=>{
    const progress = new ProgressBar();
    progress.start();
    setTimeout(() => {
      let location = window.location.pathname;
      let home = document.getElementById("home")
      let contact = document.getElementById("contact")
      let about = document.getElementById("about")
      if(location==="/")
      {
        home.classList.remove("passive")

        about.classList.add("passive")
        contact.classList.add("passive")

        home.classList.add("active");
      }
      else if(location==="/about")
      {
        about.classList.remove("passive")

        home.classList.add("passive")
        contact.classList.add("passive")
        
        
        about.classList.add("active");
        
      }
      else if(location==="/contact")
      {
        contact.classList.remove("passive")

        home.classList.add("passive")
        about.classList.add("passive")
        
        
        contact.classList.add("active");
      }
      else if(location==="/book")
      {
        contact.classList.add("passive")
        about.classList.add("passive")
        home.classList.add("passive")

      }
    }, 1);
    setTimeout(() => {
      progress.finish();
    }, 300);
  };
  return (
    <>

    <div className="max-w-7xl  mx-auto">
    
    <BrowserRouter>
      <Header load={loadcontent} />
      <Routes>
        <Route path="/" element={<Main load={loadcontent}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/book" element={<Booking />} />
      </Routes>
    </BrowserRouter>
</div>
      <Footer/>
    </>
  );
}

export default App;
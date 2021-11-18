import "./sass/main.css";
import { motion } from "framer-motion";

// React Router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

// Components
import Search from "./components/Search";
import Weather from "./components/Weather";
import CurrentLocationWeather from "./components/CurrentLocationWeather";
import Error from "./components/Error";

function App() {
  return (
    <>
    <div className="title">
      <motion.h1
        initial={{y: -50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{type: "just", duration: 1}}
      >
        WEATHER APP
      </motion.h1>
    </div>
    <div className="main-container">        
        <Router>
          <Routes>
            <Route path="/" element={<Search/>}/>
            <Route path="weather/:city" element={<Weather/>}/> 
            <Route path="weather/current" element={<CurrentLocationWeather/>}/> 
            <Route path="*" element={<Error/>}/>   
          </Routes>
        </Router>
    </div>
    </>
  );
}

export default App;

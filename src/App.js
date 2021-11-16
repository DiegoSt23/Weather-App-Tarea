import "./sass/main.css";

// React Router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

// Components
import Search from "./components/Search";
import Weather from "./components/Weather";
import Error from "./components/Error";

function App() {
  return (
    <div className="main-container">  
      <h1>WEATHER APP</h1>
        <Router>
          <Routes>
            <Route path="/" element={<Search/>}/>
            <Route path="weather/:city" element={<Weather/>}/>  
            <Route path="*" element={<Error/>}/>   
          </Routes>
        </Router>
    </div>
  );
}

export default App;

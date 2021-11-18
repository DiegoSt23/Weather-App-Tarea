import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const Search = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleOpenWeatherComponent = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`weather/${value}`)
    }
  };

  return (
    <motion.div 
      className="search-container"
      initial={{x: -100, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{type: "just", duration: 1}}
    >
      <form>
        <input 
          placeholder="Search for any city in the world"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button onClick={handleOpenWeatherComponent}>GO</button>
        <h3>OR</h3>
        <Link to="weather/current">
          <button>YOUR CURRENT LOCATION</button>
        </Link>                                  
      </form>
    </motion.div>
  )
};

export default Search
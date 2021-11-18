import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Search = () => {
  const [value, setValue] = useState("");

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
        <Link to={`weather/${value}`}>
          <button>GO</button>
        </Link>                          
      </form>
    </motion.div>
  )
};

export default Search
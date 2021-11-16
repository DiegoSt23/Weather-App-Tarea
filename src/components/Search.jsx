import { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [value, setValue] = useState("");

  return (
    <div className="search-container">
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
    </div>
  )
};

export default Search
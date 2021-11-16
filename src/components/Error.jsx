import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <p>This page can't be found.</p>
      <Link to ="/" className="link">
        <h5>Back Home</h5>
      </Link>      
    </div>
  )
};

export default Error
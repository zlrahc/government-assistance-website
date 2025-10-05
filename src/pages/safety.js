import { Link } from "react-router-dom";

function Safety() {
  return (
    <div>
      <h1>Safety Information</h1>
      <ul>
        <li><Link to="/safety/emergency">Emergency</Link></li>
        <li><Link to="/safety/scam">Scam Prevention</Link></li>
      </ul>
    </div>
  );
}

export default Safety;
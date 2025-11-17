import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: 20, display:"flex", gap:20 }}>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/sports">Sports</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;

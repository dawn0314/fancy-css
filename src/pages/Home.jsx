import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="wrapper">
      <Link to="/page-scroll">Page scroll with color match</Link>
      <Link to="/nav-indicator">Nav indicator</Link>
      <Link to="/circle-progress-bar">Circular progress bar</Link>
    </div>
  );
}

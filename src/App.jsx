import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import DigitalClock from "./pages/digital-clock/DigitalClock";
import PageScroll from "./pages/page-scroll/PageScroll";
import NavIndicator from "./pages/nav-indicator/NavIndicator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        {/* <Route path="/digital-clock" Component={DigitalClock}></Route> */}
        <Route path="/page-scroll" Component={PageScroll}></Route>
        <Route path="/nav-indicator" Component={NavIndicator}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

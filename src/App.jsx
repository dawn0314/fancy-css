import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { PageScroll, NavIndicator, CircleProgressBar } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        {/* <Route path="/digital-clock" Component={DigitalClock}></Route> */}
        <Route path="/page-scroll" Component={PageScroll}></Route>
        <Route path="/nav-indicator" Component={NavIndicator}></Route>
        <Route
          path="/circle-progress-bar"
          Component={CircleProgressBar}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

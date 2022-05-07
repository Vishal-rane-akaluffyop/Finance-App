import "./App.css";
import DailyGainers from "./Components/DailyGainers";
import DailyLosers from "./Components/DailyLosers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./Components/Landing";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="dailygainers" element={<DailyGainers />} />
          <Route path="dailylosers" element={<DailyLosers />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
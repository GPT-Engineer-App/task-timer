import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Pomodoro from "./pages/Pomodoro.jsx";
import ShortBreak from "./pages/ShortBreak.jsx";
import LongBreak from "./pages/LongBreak.jsx";
import Custom from "./pages/Custom.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route path="/short-break" element={<ShortBreak />} />
        <Route path="/long-break" element={<LongBreak />} />
        <Route path="/custom" element={<Custom />} />
      </Routes>
    </Router>
  );
}

export default App;

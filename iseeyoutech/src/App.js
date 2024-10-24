import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CallApi from "./CallApi";
import Form from "./Form";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="nav-bar">
        <Link to="/CallApi">Call API</Link> | <Link to="/Form">Form</Link>
      </nav>

      <Routes>
        <Route path="/CallApi" element={<CallApi />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/views/Home";
import Sobre from "./views/Sobre";
import Contato from "./views/Contato";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/sobre" Component={Sobre} />
          <Route path="/contato" Component={Contato} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

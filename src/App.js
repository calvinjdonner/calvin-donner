import React, { useContext } from 'react';
import "../src/index.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Contact from "./components/Contact";
import Toggle from "./components/Toggle";
import Resume from "./components/Resume";
import Lists from "./components/Lists";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return (
    <Router>
      <Nav />
      <Toggle />
    <div style={{ backgroundColor:darkMode ? "#222" : "white" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App;
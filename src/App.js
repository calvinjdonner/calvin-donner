import React, { useContext } from 'react';
import "../src/index.css";
import Intro from './components/Intro';
import About from './components/About';
import ProjectList from './components/ProjectList';
import Contact from "./components/Contact";
import Toggle from "./components/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor:darkMode ? "#222" : "white", color: darkMode && "white", }}>
      <Toggle />
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  )
}

export default App;
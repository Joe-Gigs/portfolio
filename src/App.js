import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './componets/Header';
import Hero from './componets/Hero';
import About from './componets/About';
import Projects from './componets/Projects';
import Audioreel from './componets/Audioreel';


function App() {
  return (
    <div className="App">
       <Header />
      <Routes>

        <Route path="/portfolio" element={ <Hero /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/audioreel" element={ <Audioreel /> } />
      </Routes>
    </div>
  )
}


export default App;

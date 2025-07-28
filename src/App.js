import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './componets/Header';
import Hero from './componets/Hero';
import About from './componets/About';
import Projects from './componets/Projects';


function App() {
  return (
    <div className="App">
       <Header />
      <Routes>

        <Route path="/Portfolio" element={ <Hero /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/projects" element={ <Projects /> } />
      </Routes>
    </div>
  )
}


export default App;

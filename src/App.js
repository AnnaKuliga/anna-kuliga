import "./App.css";
import Hero from "./components/Body/Hero/Hero";
import About from "./components/Body/About/About";
import Skills from "./components/Body/Skills/Skills";
import Projects from "./components/Body/Projects/Projects";
import Reviews from "./components/Body/Reviews/Reviews";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Reviews />
        {/*<Footer/>*/}
      </div>
    </div>
  );
}

export default App;

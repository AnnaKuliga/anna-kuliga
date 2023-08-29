import "./App.css";
import Hero from "./components/Body/Hero/Hero";
import About from "./components/Body/About/About";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Hero />
        <About />
        {/*<Body />*/}
        {/*<Footer/>*/}
      </div>
    </div>
  );
}

export default App;

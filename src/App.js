import "./App.css";
import Body from "./components/Body/Body";
import Sidebar from "./components/Side Bar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;

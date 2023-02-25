import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;

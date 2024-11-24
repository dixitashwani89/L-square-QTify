import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';

function App() {
  return (
    <div className="App">
      <div>
      <Navbar/>
      </div>
      <div>
        <Hero/>
      </div>
    </div>
  );
}

export default App;
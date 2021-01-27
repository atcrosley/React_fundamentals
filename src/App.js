import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Aboutme from './components/challenges/day01/Aboutme';
import Footer from './components/challenges/day01/Footer';

function App() { // this is the root component
  const name = 'Austin'; // JS above return statment can be injected into JSX using curly brackets { }
  return (
    <div className = "App">
      <h1>Welcome to React, {name} </h1>
      <h2>We just modified our root component</h2>
      <Header /> {/* This is how you mount a component */}
      <Aboutme />
      <Footer />
    </div>
  );
}

export default App;

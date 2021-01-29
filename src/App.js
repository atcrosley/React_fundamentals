
import './App.css';
import NameProp from './components/NameProp';
import Contacts from './components/Contacts';
import State from './components/State';


function App() { // this is the root component
  const profile = { name: "Austin", age: 25, school: "Wabash", graduationYear: 2018}
  return (
    <div className="App">
    <NameProp  name="Austin"/>
    {/* <Contacts  name="Austin" age= "25" school= "Wabash" graduationYear = " 2018"/> */}
    <Contacts {...profile} />
    <p>------------------</p>
    <State />
    </div>
  );
}

export default App;

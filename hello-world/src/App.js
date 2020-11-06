import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
function App() {
  return (
    <div className="App">
      <Greet name="Bruce" Heroname="Batman"><p>These are the childeren of Back.</p></Greet>
      <Greet name="Arjun"><button>Action</button></Greet>
      <Welcome name="Bruce" Heroname="Batman"><button>Action</button></Welcome>
      <Welcome name="Clark" Heroname="Supuerman"/>

    </div>
  );
}

export default App;

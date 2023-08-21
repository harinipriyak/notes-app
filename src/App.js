import './App.css';
import Notes from "./Notes";
import ClassComponent from './ClassComponent';
import FunctionalComponent from "./FunctionalComponent";
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <ClassComponent />
        <FunctionalComponent />
        <Notes />
      </header>
    </div>
  );
}

export default App;

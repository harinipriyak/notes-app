import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Notes from "./Notes";
import FunctionalComponent from "./FunctionalComponent";
function App() {

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path='/' element={<Notes />} />
                    <Route path='/notes' element={<Notes />} />
                    <Route path='/func' element={<FunctionalComponent />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
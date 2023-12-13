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
                    <Route path='/logout' element={<Notes text={'v0'}/>} />
                    <Route path='/maintenance' element={<FunctionalComponent text={'v0'}/>} />
                    <Route path='/logout/v1' element={<Notes text={'v1'}/>} />
                    <Route path='/maintenance/v1' element={<FunctionalComponent text={'v1'}/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
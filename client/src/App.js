import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Welcomepage, About } from './views';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Welcomepage/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;

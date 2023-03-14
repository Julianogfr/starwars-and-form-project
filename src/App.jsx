import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './pages/Form';
import Starwars from './pages/Starwars';
import Home from './pages/Home';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/starwars'  element={<Starwars />}/>
        <Route path='/form'  element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;

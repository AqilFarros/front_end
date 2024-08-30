import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/blog' element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;

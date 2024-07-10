import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalColors from './components/atoms/GlobalColors/colors';
import './App.css';

function App() {

  return <>
    <Router>
      <GlobalColors />
      <Routes>
        <Route path="/" />
      </Routes>
    </Router>
  </>
}

export default App;

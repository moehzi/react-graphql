import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Character } from './pages/Character';
import { CharacterList } from './pages/CharacterList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<CharacterList />} />
        <Route strict exact path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import AcademyPage from './pages/AcademyPage';
import TrainingsPage from './pages/TrainingsPage'; // Importação adicionada

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota Principal */}
        <Route path="/" element={<HomePage />} />
        
        {/* Rota A Academia */}
        <Route path="/academy" element={<AcademyPage />} />

        {/* Rota Treinos - Adicionada */}
        <Route path="/trainings" element={<TrainingsPage />} />
        
        {/* Rota da Galeria */}
        <Route path="/gallery" element={<GalleryPage />} />
        
        {/* Rota de Fallback */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
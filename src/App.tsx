import  { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import SeriesDetail from './pages/SeriesDetail';
import SeriesPage from './pages/Series';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetail />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="series" element={<SeriesPage />} />
        <Route path="series/:seriesId" element={<SeriesDetail />} />
      </Route>
    </Routes>
  );
}

export default App;

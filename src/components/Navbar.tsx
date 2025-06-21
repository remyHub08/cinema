import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Film, Search } from 'lucide-react';
import { movies } from '../data/movies';
import { series } from '../data/series';

// Define a type for search results
// Movie and Series share most fields, so we can combine them

type SearchResult = {
  id: string;
  title: string;
  genre: string;
  image: string;
  releaseDate: string;
  _type: 'movie' | 'series';
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Search movies
      const foundMovie = movies.find(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.cast.some(actor => actor.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      // Search series
      const foundSeries = series.find(s =>
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.cast.some(actor => actor.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      if (foundMovie) {
        navigate(`/movies/${foundMovie.id}`);
      } else if (foundSeries) {
        navigate(`/series/${foundSeries.id}`);
      } else {
        navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      }
      setSearchQuery('');
      setShowSearch(false);
      setShowResults(false);
      closeMenu();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowSearch(false);
        setShowResults(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    const timer = setTimeout(() => {
      // Movie results
      const movieResults = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.cast.some(actor => actor.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      // Series results
      const seriesResults = series.filter(s =>
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.cast.some(actor => actor.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      // Combine and slice
      const results = [
        ...movieResults.map(m => ({ ...m, _type: 'movie' as const })),
        ...seriesResults.map(s => ({ ...s, _type: 'series' as const }))
      ].slice(0, 5);
      setSearchResults(results);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleResultClick = (result: any) => {
    if (result._type === 'series') {
      navigate(`/series/${result.id}`);
    } else {
      navigate(`/movies/${result.id}`);
    }
    setSearchQuery('');
    setSearchResults([]);
    setShowResults(false);
    setShowSearch(false);
    closeMenu();
  };

  return (
    <nav className="bg-secondary-light py-4 sticky top-0 z-50">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <Film className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold">CineBetty</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={({isActive}) => isActive ? "text-primary" : "hover:text-primary"}>
            Home
          </NavLink>
          <NavLink to="/movies" className={({isActive}) => isActive ? "text-primary" : "hover:text-primary"}>
            Movies
          </NavLink>
          <NavLink to="/series" className={({isActive}) => isActive ? "text-primary" : "hover:text-primary"}>
            Series
          </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "text-primary" : "hover:text-primary"}>
            About
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "text-primary" : "hover:text-primary"}>
            Contact
          </NavLink>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            className="p-2 hover:text-primary transition-colors"
            onClick={() => setShowSearch(!showSearch)}
          >
            <Search size={20} />
          </button>
          <button className="btn btn-primary" onClick={() => setShowLogin(!showLogin)}>Login</button>
        </div>
        {showLogin && (
          <div className="absolute right-8 top-16 bg-secondary-light border border-gray-700 rounded-lg shadow-lg z-50 p-6 w-80">
            <form className="space-y-4">
              <div>
                <label htmlFor="login-email" className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  id="login-email"
                  className="w-full px-3 py-2 rounded bg-secondary border border-gray-700 focus:outline-none focus:border-primary"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="login-password" className="block mb-1 font-medium">Password</label>
                <input
                  type="password"
                  id="login-password"
                  className="w-full px-3 py-2 rounded bg-secondary border border-gray-700 focus:outline-none focus:border-primary"
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="btn btn-primary w-full">Login</button>
            </form>
          </div>
        )}

        <div className="flex items-center gap-4 md:hidden">
          <button 
            className="p-2 text-white"
            onClick={() => setShowSearch(!showSearch)}
          >
            <Search size={20} />
          </button>
          <button className="text-white" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Netflix-style search bar */}
      {showSearch && (
        <div className="absolute top-0 left-0 w-full bg-secondary-light py-4 px-4 z-50 flex justify-center">
          <form onSubmit={handleSearch} className="w-full max-w-3xl flex items-center">
            <input
              type="text"
              autoFocus
              placeholder="Titles, people, genres"
              className="w-full bg-black text-white px-4 py-2 rounded-l focus:outline-none"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setShowResults(true); }}
            />
            <button 
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-r hover:bg-primary-dark"
            >
              <Search size={20} />
            </button>
          </form>
          <button 
            className="ml-4 text-white"
            onClick={() => setShowSearch(false)}
          >
            <X size={24} />
          </button>
          {showResults && searchResults.length > 0 && (
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-16 w-full max-w-3xl bg-secondary-light border border-gray-700 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
              {searchResults.map(result => (
                <Link
                  key={result.id}
                  to={result._type === 'series' ? `/series/${result.id}` : `/movies/${result.id}`}
                  className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                  onClick={() => handleResultClick(result)}
                >
                  <div className="flex items-center gap-3">
                    <img 
                      src={result.image} 
                      alt={result.title} 
                      className="w-10 h-10 object-cover rounded" 
                    />
                    <div>
                      <p className="font-medium">{result.title}</p>
                      <p className="text-sm text-gray-400">{result.genre.split(',')[0]} • {result.releaseDate.split('-')[0]}</p>
                      <span className="text-xs text-primary font-semibold">{result._type === 'series' ? 'Series' : 'Movie'}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {showResults && searchQuery && searchResults.length === 0 && (
            <></>
          )}
        </div>
      )}

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col pt-16">
          <button className="absolute top-4 right-4 text-white" onClick={closeMenu}>
            <X size={24} />
          </button>
          <div className="flex flex-col items-center gap-8 pt-10">
            <NavLink to="/" onClick={closeMenu} className={({isActive}) => isActive ? "text-primary text-xl" : "text-xl hover:text-primary"}>
              Home
            </NavLink>
            <NavLink to="/movies" onClick={closeMenu} className={({isActive}) => isActive ? "text-primary text-xl" : "text-xl hover:text-primary"}>
              Movies
            </NavLink>
            <NavLink to="/about" onClick={closeMenu} className={({isActive}) => isActive ? "text-primary text-xl" : "text-xl hover:text-primary"}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu} className={({isActive}) => isActive ? "text-primary text-xl" : "text-xl hover:text-primary"}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
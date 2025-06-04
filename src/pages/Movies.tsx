import  { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import MovieCard from '../components/MovieCard';
import { movies } from '../data/movies';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const genres = Array.from(new Set(movies.flatMap(movie => movie.genre.split(', '))));

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre ? movie.genre.includes(selectedGenre) : true;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="py-12">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Movies</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <input 
              type="text" 
              placeholder="Search movies..." 
              className="w-full py-2 px-4 pl-10 rounded-lg bg-secondary-light border border-gray-700 focus:outline-none focus:border-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <div className="relative w-full md:w-64">
            <select 
              className="w-full appearance-none py-2 px-4 pl-10 rounded-lg bg-secondary-light border border-gray-700 focus:outline-none focus:border-primary"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              <option value="">All Genres</option>
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
            <Filter className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMovies.map(movie => (
              <MovieCard 
                key={movie.id}
                id={movie.id}
                title={movie.title}
                genre={movie.genre}
                image={movie.image}
                rating={movie.rating}
                duration={movie.duration}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-xl text-gray-400">No movies found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
  
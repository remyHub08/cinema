import { useParams, Link } from 'react-router-dom';
import { Clock, Calendar, Star, Users, Video, ArrowLeft, Play } from 'lucide-react';
import { movies } from '../data/movies';

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const movie = movies.find(m => m.id === id);

  if (!movie) {
    return (
      <div className="container py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Movie not found</h2>
        <Link to="/movies" className="btn btn-primary">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Movies
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-secondary-light">
        <div className="container py-12">
          <Link to="/movies" className="inline-flex items-center text-gray-400 hover:text-primary mb-6">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Movies
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <button
                className="w-full focus:outline-none"
                onClick={() => {
                  const videoSection = document.getElementById('movie-video-section');
                  if (videoSection) videoSection.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{ padding: 0, background: 'none', border: 'none' } as React.CSSProperties}
                aria-label="Watch Movie"
              >
                <img 
                  src={movie.image.replace('w=400', 'w=600')} 
                  alt={movie.title} 
                  className="w-full rounded-lg shadow-lg object-cover cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ height: '500px' }}
                />
              </button>
            </div>
            
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{movie.title}</h1>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary px-2 py-1 rounded text-sm font-medium flex items-center">
                  <Star className="h-4 w-4 text-yellow-300 mr-1" />
                  {movie.rating}
                </span>
                <span className="text-gray-400">{movie.genre}</span>
              </div>
              
              <p className="text-gray-300 mb-8">{movie.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Duration</h3>
                    <p className="text-gray-400">{movie.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Release Date</h3>
                    <p className="text-gray-400">{new Date(movie.releaseDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Video className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Director</h3>
                    <p className="text-gray-400">{movie.director}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Cast</h3>
                    <p className="text-gray-400">{movie.cast.join(', ')}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {movie.video && (
                  <a href={movie.video} className="btn bg-red-600 hover:bg-red-700 text-white flex items-center" style={{borderColor: 'transparent'}} target="_blank" rel="noopener noreferrer" download>
                    <Play className="h-5 w-5 mr-2" />
                    Download
                  </a>
                )}
              </div>


              {/* Movie Trailer Section */}
              <div className="container py-12" id="movie-trailer-section">
                {movie.trailer && (
                  <div className="mb-12 flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-4">Official Trailer</h2>
                    <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        width="100%"
                        height="100%"
                        src={movie.trailer?.replace('watch?v=', 'embed/').replace('youtu.be/', 'www.youtube.com/embed/')}
                        title={`${movie.title} Official Trailer`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        sandbox="allow-scripts allow-same-origin allow-presentation"
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* You May Also Like Section */}
      <div className="container py-12">
        <h2 className="text-2xl font-bold mb-6">other latest movie</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies
            .filter(m => m.id !== id)
            .filter(m => {
              // Only show movies added today
              const today = new Date();
              const release = new Date(m.releaseDate);
              return (
                today.getFullYear() === release.getFullYear() &&
                today.getMonth() === release.getMonth() &&
                today.getDate() === release.getDate()
              );
            })
            .slice(0, 4)
            .map(movie => (
              <Link key={movie.id} to={`/movies/${movie.id}`} className="movie-card block">
                <div className="relative">
                  <img src={movie.image} alt={movie.title} className="movie-card-img" />
                  <div className="absolute top-2 right-2 bg-primary px-2 py-1 rounded-md text-sm font-medium flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-300" />
                    <span>{movie.rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold line-clamp-1">{movie.title}</h3>
                  <p className="text-gray-400 mb-2">{movie.genre}</p>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{movie.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
import  { Link } from 'react-router-dom';
import { Clock, Star } from 'lucide-react';

interface MovieCardProps {
  id: string;
  title: string;
  genre: string;
  image: string;
  rating: number;
  duration: string;
}

const MovieCard = ({ id, title, genre, image, rating, duration }: MovieCardProps) => {
  return (
    <Link to={`/movies/${id}`} className="movie-card block">
      <div className="relative">
        <img src={image} alt={title} className="movie-card-img" />
        <div className="absolute top-2 right-2 bg-primary px-2 py-1 rounded-md text-sm font-medium flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-300" />
          <span>{rating}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
        <p className="text-gray-400 mb-2">{genre}</p>
        <div className="flex items-center text-sm text-gray-400">
          <Clock className="h-4 w-4 mr-1" />
          <span>{duration}</span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
  
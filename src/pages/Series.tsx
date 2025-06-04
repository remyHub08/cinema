import React from 'react';
import { Link } from 'react-router-dom';
import { series } from '../data/series';

const SeriesPage: React.FC = () => {
  return (
    <div className="container py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">All Series</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {series.map(s => (
          <Link
            key={s.id}
            to={`/series/${s.id}`}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 block"
          >
            <img src={s.image} alt={s.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-gray-900">{s.title}</h2>
              <p className="text-gray-700 text-sm mb-2 line-clamp-2">{s.description}</p>
              <div className="text-gray-500 text-xs mb-1">{s.genre}</div>
              <div className="text-gray-400 text-xs">{s.releaseDate}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SeriesPage;
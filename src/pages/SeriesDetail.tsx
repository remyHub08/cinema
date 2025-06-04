import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { series } from '../data/series';

const SeriesDetail: React.FC = () => {
  const { seriesId } = useParams();
  const [expandedSeason, setExpandedSeason] = useState<string | null>(null);
  const [selectedEpisode, setSelectedEpisode] = useState<{
    image: string;
    video?: string;
    title?: string;
  } | null>(null);
  const [trailerModal, setTrailerModal] = useState<{title: string, trailer: string} | null>(null);

  const currentSeries = series.find(s => s.id === seriesId);

  if (!currentSeries) {
    return (
      <div className="container py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Series not found</h2>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  const toggleSeason = (seasonId: string) => {
    setExpandedSeason(expandedSeason === seasonId ? null : seasonId);
  };

  return (
    <div className="container py-12">
      {/* Modal for trailer */}
      {trailerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-gray-900 rounded-lg shadow-lg p-4 max-w-2xl w-full relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-primary"
              onClick={() => setTrailerModal(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={trailerModal.trailer}
                title={trailerModal.title + ' Trailer'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-80 rounded"
              ></iframe>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-full md:w-1/3">
          {selectedEpisode ? (
            <img
              src={selectedEpisode.image}
              alt={selectedEpisode.title || currentSeries.title}
              className="w-full rounded-lg shadow-lg object-cover mb-2"
            />
          ) : (
            <img
              src={currentSeries.image}
              alt={currentSeries.title}
              className="w-full rounded-lg shadow-lg object-cover mb-2"
            />
          )}
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{currentSeries.title}</h1>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-primary px-2 py-1 rounded text-sm font-medium">
              {currentSeries.genre}
            </span>
            <span className="text-gray-400">{currentSeries.releaseDate}</span>
          </div>
          <p className="text-gray-300 mb-4">{currentSeries.description}</p>
          <div className="mb-4">
            <span className="font-semibold">Director:</span> 
            <span className="text-gray-400 ml-2">{currentSeries.director}</span>
          </div>
          <div className="mb-6">
            <span className="font-semibold">Cast:</span> 
            <span className="text-gray-400 ml-2">{currentSeries.cast.join(', ')}</span>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Seasons</h2>
      <div className="space-y-4">
        {currentSeries.seasons.map(season => (
          <div key={season.id} className="border rounded-lg overflow-hidden bg-black">
            <button
              className="w-full flex justify-between items-center p-4 bg-gray-800 hover:bg-black-700"
              onClick={() => toggleSeason(season.id)}
            >
              <h3 className="text-xl font-semibold">
                Season {season.seasonNumber}
              </h3>
              <span>{expandedSeason === season.id ? '−' : '+'}</span>
            </button>
            
            {expandedSeason === season.id && (
              <div className="p-4 bg-gray-900">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {season.episodes.map(episode => (
                    <div key={episode.id} className="block group cursor-pointer" onClick={() => setSelectedEpisode({ image: episode.image, video: episode.video, title: episode.title })}>
                      <Link
                        to={`/episode/${episode.id}`}
                        className="block group"
                        onClick={e => e.stopPropagation()}
                      >
                        <div className="rounded-lg overflow-hidden shadow-lg transition-transform group-hover:scale-105">
                          <img
                            src={episode.image}
                            alt={episode.title}
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-4 bg-gray-800">
                            <h4 className="font-bold mb-1">{episode.title}</h4>
                            <p className="text-sm text-gray-400 mb-2 line-clamp-2">
                              {episode.description}
                            </p>
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>{episode.duration}</span>
                              <span>{episode.releaseDate}</span>
                            </div>
                            <div className="flex flex-col gap-2 mt-2">
                              <button
                                type="button"
                                className="btn btn-primary block text-center"
                                onClick={e => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  if (episode.trailer) setTrailerModal({ title: episode.title, trailer: episode.trailer });
                                }}
                              >
                                Watch Trailer
                              </button>
                              {episode.video && (
                                <a
                                  href={episode.video}
                                  className="btn btn-secondary block text-center"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  download
                                  onClick={e => e.stopPropagation()}
                                >
                                  Download Video
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeriesDetail;
// File: App.jsx
import React, { useState, useEffect } from 'react';
import moviesData from './moviesData.json';
import MovieCard from './MovieCard';

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // Calculate ROI and sort descending
    const processedMovies = moviesData.map(movie => ({
      ...movie,
      roi: ((movie.boxOffice - movie.budget) / movie.budget).toFixed(2),
    })).sort((a, b) => b.roi - a.roi);

    setMovies(processedMovies);
  }, []);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">🎬 ROI-Based Movie Recommendations</h1>
      <input
        type="text"
        placeholder="Search movie title..."
        className="w-full p-2 mb-6 rounded text-black"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}





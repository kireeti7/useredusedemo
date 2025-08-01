// File: MovieCard.jsx

export default function MovieCard({ movie }) {
  return (
    <div className="bg-gray-800 p-4 rounded shadow-lg hover:scale-105 transition-transform">
      <img src={movie.poster} alt={movie.title} className="rounded mb-2" />
      <h2 className="text-xl font-semibold">{movie.title}</h2>
      <p className="text-sm">🎥 Budget: ₹{movie.budget} Cr</p>
      <p className="text-sm">💰 Box Office: ₹{movie.boxOffice} Cr</p>
      <p className="text-green-400 font-bold">ROI: {movie.roi}x</p>
    </div>
  );
}

import { NavLink } from "react-router-dom";

export const Card = ({ currMovie }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={`${currMovie.Poster}`}
        alt="Titanic Poster"
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 truncate">
          {currMovie.Title}
        </h2>
        <p className="text-gray-600">Year: {currMovie.Year}</p>
        <p className="text-gray-600">Type: {currMovie.Type}</p>
        <NavLink
          to={`/movie/${currMovie.imdbID}`}
          className="mt-2 inline-block text-blue-500 hover:text-blue-700 font-semibold "
        >
          <button className="cursor-pointer">View on IMDb</button>
        </NavLink>
      </div>
    </div>
  );
};

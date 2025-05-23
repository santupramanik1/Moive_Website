import { useLoaderData, useParams } from "react-router-dom";

export const MovieDetails = () => {
  const moviesData = useLoaderData();
  const { Title, Poster, Year, Type } = moviesData;
  return (
    <div className="container mx-auto p-4 pt-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 ">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <img
            src={`${Poster}`}
            alt="Titanic Poster"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800 truncate">
              {Title}
            </h2>
            <p className="text-gray-600">Year: {Year}</p>
            <p className="text-gray-600">Type: {Type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

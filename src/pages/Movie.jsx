import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card";

export const Movie = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);
  return (
    <div className="container mx-auto p-4 pt-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 ">
        {moviesData.Search.map((currMovie) => {
          return (
            <Card currMovie={currMovie} key={currMovie.imdbID}></Card>
          );
        })}
        {/* <!-- Card 1: Titanic (1997) --> */}
      </div>
    </div>
    // <p>Hello Movie</p>
  );
};

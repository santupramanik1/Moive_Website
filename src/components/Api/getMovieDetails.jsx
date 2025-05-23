export const getMovieDetails = async ({params}) => {
    // console.log(params)
    const id=params.movieId
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
    );
    const data = await response.json(); //convert the data into json format
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesData = async () => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`
    );
    const data = await response.json(); //convert the data into json format
    return data;
  } catch (error) {
    console.log(error);
  }
};
